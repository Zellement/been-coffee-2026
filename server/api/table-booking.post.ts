import type { H3Event } from 'h3'
import type { BookingEmailData } from '~~/server/utils/bookingEmails'

interface ValidBooking {
  name: string
  email: string
  phone: string
  people: number
  details: string
  dateTimeIso: string
  location: BookingLocation
}

const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000
const DAY_MS = 24 * 60 * 60 * 1000

const asTrimmedString = (value: unknown, maxLength: number): string =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : ''

const badRequest = (message: string): Error =>
  createError({ statusCode: 400, statusMessage: message })

const validateBooking = (body: Partial<TableBookingPayload>): ValidBooking => {
  const name = asTrimmedString(body.name, bookingLimits.maxNameLength)
  const email = asTrimmedString(body.email, 254).toLowerCase()
  const phone = asTrimmedString(body.phone, bookingLimits.maxPhoneLength)
  const details = asTrimmedString(body.details, bookingLimits.maxDetailsLength)
  const people = Number(body.people)

  if (!name) throw badRequest('Name is required')
  if (!emailPattern.test(email)) throw badRequest('A valid email address is required')
  if (phone && !/^[\d\s()+-]+$/.test(phone)) throw badRequest('Phone number looks invalid')
  if (!isBookingLocationKey(body.location)) throw badRequest('Unknown location')
  if (
    !Number.isInteger(people) ||
    people < bookingLimits.minPeople ||
    people > bookingLimits.maxPeople
  ) {
    throw badRequest(
      `Number of people must be between ${bookingLimits.minPeople} and ${bookingLimits.maxPeople}`
    )
  }

  const dateTimeIso = londonLocalToIso(asTrimmedString(body.dateTime, 16))
  if (!dateTimeIso) throw badRequest('A valid date and time is required')
  const bookingTime = new Date(dateTimeIso).getTime()
  const now = Date.now()
  if (bookingTime < now) throw badRequest('Please choose a date and time in the future')
  if (bookingTime > now + bookingLimits.maxDaysAhead * DAY_MS) {
    throw badRequest(`Bookings can be made up to ${bookingLimits.maxDaysAhead} days ahead`)
  }

  return {
    name,
    email,
    phone,
    people,
    details,
    dateTimeIso,
    location: bookingLocations[body.location],
  }
}

const teamEmailFor = (
  location: BookingLocationKey,
  config: ReturnType<typeof useRuntimeConfig>
): string =>
  location === 'long-eaton' ? config.bookingEmailLongEaton : config.bookingEmailWillington

const sendBookingEmails = async (
  booking: ValidBooking,
  config: ReturnType<typeof useRuntimeConfig>
): Promise<void> => {
  const brevo = {
    apiKey: config.brevoApiKey,
    sender: { email: config.brevoSenderEmail, name: config.brevoSenderName },
  }
  const emailData: BookingEmailData = {
    ...booking,
    locationName: booking.location.name,
    when: formatLondonDateTime(booking.dateTimeIso),
  }
  const teamEmail = teamEmailFor(booking.location.key, config)

  const results = await Promise.allSettled([
    sendBrevoEmail(brevo, customerConfirmationEmail(emailData)),
    teamEmail
      ? sendBrevoEmail(brevo, teamNotificationEmail(emailData, teamEmail))
      : Promise.reject(new Error(`No team email configured for ${booking.location.key}`)),
  ])

  results.forEach((result: PromiseSettledResult<void>, index: number): void => {
    if (result.status === 'rejected') {
      console.error(
        `[table-booking] ${index === 0 ? 'Customer' : 'Team'} email failed`,
        result.reason
      )
    }
  })
}

export default defineEventHandler(async (event: H3Event): Promise<{ ok: true }> => {
  const config = useRuntimeConfig(event)
  const ip = getRequestIP(event, { xForwardedFor: true })
  const body = await readBody<Partial<TableBookingPayload>>(event)

  // Honeypot: real visitors never see or fill this field. Pretend it worked so bots move on.
  if (asTrimmedString(body?.website, 200)) return { ok: true }

  if (isRateLimited(ip ?? 'unknown', RATE_LIMIT, RATE_WINDOW_MS)) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too many booking attempts, please try again later',
    })
  }

  const human = await verifyTurnstile(
    asTrimmedString(body?.turnstileToken, 2048),
    config.turnstileSecretKey,
    ip
  )
  if (!human)
    throw createError({ statusCode: 403, statusMessage: 'Spam check failed, please try again' })

  const booking = validateBooking(body ?? {})

  try {
    await createTableBookingEntry(
      {
        spaceId: config.contentfulSpaceId,
        environmentId: config.contentfulEnvironmentId,
        cmaToken: config.contentfulCmaAccessToken,
      },
      { ...booking, locationId: booking.location.contentfulId }
    )
  } catch (error) {
    console.error('[table-booking] Contentful entry failed', error)
    throw createError({
      statusCode: 502,
      statusMessage: 'We could not save your booking, please try again',
    })
  }

  // The booking is saved; email failures are logged but don't fail the request.
  await sendBookingEmails(booking, config)

  return { ok: true }
})
