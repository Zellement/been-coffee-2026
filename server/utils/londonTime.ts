const LONDON_TZ = 'Europe/London'

/**
 * Returns the Europe/London UTC offset (e.g. "+01:00") in force at the given instant.
 */
const londonOffsetAt = (instant: Date): string => {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: LONDON_TZ,
    timeZoneName: 'longOffset',
  }).formatToParts(instant)
  const label = parts.find((part: Intl.DateTimeFormatPart): boolean => part.type === 'timeZoneName')
  const offset = label?.value.replace('GMT', '') ?? ''
  return offset === '' ? '+00:00' : offset
}

/**
 * Turns a `datetime-local` value ("2026-11-25T12:00"), read as London wall-clock time,
 * into an ISO string with the correct offset ("2026-11-25T12:00+00:00").
 * Returns null when the input isn't a valid local date-time.
 */
export const londonLocalToIso = (local: string): string | null => {
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(local)
  if (!match) return null

  const [, year, month, day, hour, minute] = match.map(Number) as number[]
  const asUtc = new Date(Date.UTC(year!, month! - 1, day!, hour!, minute!))
  if (Number.isNaN(asUtc.getTime()) || asUtc.getUTCDate() !== day) return null

  return `${local}${londonOffsetAt(asUtc)}`
}

/**
 * Formats an ISO date-time for people, in London time, e.g. "Wednesday 25 November 2026 at 12:00".
 */
export const formatLondonDateTime = (iso: string): string => {
  const date = new Date(iso)
  const day = new Intl.DateTimeFormat('en-GB', {
    timeZone: LONDON_TZ,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: LONDON_TZ,
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
  return `${day} at ${time}`
}
