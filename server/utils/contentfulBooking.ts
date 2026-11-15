interface ContentfulConfig {
  spaceId: string
  environmentId: string
  cmaToken: string
}

export interface NewTableBooking {
  name: string
  email: string
  phone: string
  dateTimeIso: string
  people: number
  details: string
  locationId: string
}

interface ContentfulEntryResponse {
  sys: { id: string; version: number }
}

const LOCALE = 'en-GB'
const CMA_BASE = 'https://api.contentful.com'

const detailsToRichText = (details: string): Record<string, unknown> => ({
  nodeType: 'document',
  data: {},
  content: details
    .split(/\n+/)
    .map((line: string): string => line.trim())
    .filter((line: string): boolean => line.length > 0)
    .map(
      (line: string): Record<string, unknown> => ({
        nodeType: 'paragraph',
        data: {},
        content: [{ nodeType: 'text', value: line, marks: [], data: {} }],
      })
    ),
})

/**
 * Creates a tableBooking entry and publishes it, so the staff dashboard (which reads published
 * entries through the delivery API) picks it up. Returns the new entry id.
 */
export const createTableBookingEntry = async (
  config: ContentfulConfig,
  booking: NewTableBooking
): Promise<string> => {
  const entriesUrl = `${CMA_BASE}/spaces/${config.spaceId}/environments/${config.environmentId}/entries`
  const headers = {
    Authorization: `Bearer ${config.cmaToken}`,
    'Content-Type': 'application/vnd.contentful.management.v1+json',
  }

  const fields: Record<string, Record<string, unknown>> = {
    name: { [LOCALE]: booking.name },
    email: { [LOCALE]: booking.email },
    location: { [LOCALE]: { sys: { type: 'Link', linkType: 'Entry', id: booking.locationId } } },
    dateTime: { [LOCALE]: booking.dateTimeIso },
    people: { [LOCALE]: booking.people },
  }
  if (booking.phone) fields.telephone = { [LOCALE]: booking.phone }
  if (booking.details) fields.details = { [LOCALE]: detailsToRichText(booking.details) }

  const created = await $fetch<ContentfulEntryResponse>(entriesUrl, {
    method: 'POST',
    headers: { ...headers, 'X-Contentful-Content-Type': 'tableBooking' },
    body: { fields },
  })

  await $fetch(`${entriesUrl}/${created.sys.id}/published`, {
    method: 'PUT',
    headers: { ...headers, 'X-Contentful-Version': String(created.sys.version) },
  })

  return created.sys.id
}
