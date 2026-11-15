import type { TransactionalEmail } from '~~/server/utils/brevo'

export interface BookingEmailData {
  name: string
  email: string
  phone: string
  people: number
  details: string
  locationName: string
  when: string
}

interface DetailRow {
  label: string
  value: string
}

const detailRows = (booking: BookingEmailData, includeContact: boolean): DetailRow[] => {
  const rows: DetailRow[] = [
    { label: 'Location', value: booking.locationName },
    { label: 'Date & time', value: booking.when },
    { label: 'Number of people', value: String(booking.people) },
  ]
  if (includeContact) {
    rows.unshift({ label: 'Name', value: booking.name })
    rows.push({ label: 'Email', value: booking.email })
    rows.push({ label: 'Phone', value: booking.phone || 'Not given' })
  }
  if (booking.details) rows.push({ label: 'More information', value: booking.details })
  return rows
}

const rowsToHtml = (rows: DetailRow[]): string =>
  rows
    .map(
      (row: DetailRow): string =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">${escapeHtml(row.label)}</td><td style="padding:4px 0;white-space:pre-line">${escapeHtml(row.value)}</td></tr>`
    )
    .join('')

const rowsToText = (rows: DetailRow[]): string =>
  rows.map((row: DetailRow): string => `${row.label}: ${row.value}`).join('\n')

// Hosted PNG: Gmail and Outlook don't render SVG in emails. Served from public/email/.
const LOGO_URL = 'https://www.been.coffee/email/been-coffee-logo.png'
const LOGO_HTML = `<img src="${LOGO_URL}" width="120" height="120" alt="Been Coffee" style="display:block;width:120px;height:auto;border:0;margin:0 0 16px">`

const wrapHtml = (intro: string, rows: DetailRow[], outro: string): string =>
  `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#222">${LOGO_HTML}${intro}<table style="border-collapse:collapse;margin:16px 0">${rowsToHtml(rows)}</table>${outro}</div>`

export const customerConfirmationEmail = (booking: BookingEmailData): TransactionalEmail => {
  const rows = detailRows(booking, false)
  const firstName = booking.name.split(' ')[0] ?? booking.name
  const greeting = `Hi ${firstName},`
  const intro = `Thanks for booking a table at Been Coffee ${booking.locationName}. Here are your booking details:`
  const outro =
    "If anything changes or you need to cancel, just reply to this email and we'll sort it out.\n\nSee you soon,\nBeen Coffee"

  return {
    to: [{ email: booking.email, name: booking.name }],
    subject: `Your table booking at Been Coffee ${booking.locationName}`,
    htmlContent: wrapHtml(
      `<p>${escapeHtml(greeting)}</p><p>${escapeHtml(intro)}</p>`,
      rows,
      `<p style="white-space:pre-line">${escapeHtml(outro)}</p>`
    ),
    textContent: `${greeting}\n\n${intro}\n\n${rowsToText(rows)}\n\n${outro}`,
  }
}

export const teamNotificationEmail = (
  booking: BookingEmailData,
  teamEmail: string
): TransactionalEmail => {
  const rows = detailRows(booking, true)
  const intro = `A new table booking has come in through the website for ${booking.locationName}. It's already in the staff dashboard.`
  const outro = 'Reply to this email to contact the customer.'

  return {
    to: [{ email: teamEmail }],
    replyTo: { email: booking.email, name: booking.name },
    subject: `New table booking: ${booking.name}, ${booking.people} people, ${booking.when}`,
    htmlContent: wrapHtml(`<p>${escapeHtml(intro)}</p>`, rows, `<p>${escapeHtml(outro)}</p>`),
    textContent: `${intro}\n\n${rowsToText(rows)}\n\n${outro}`,
  }
}
