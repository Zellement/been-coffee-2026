interface EmailAddress {
  email: string
  name?: string
}

export interface TransactionalEmail {
  to: EmailAddress[]
  replyTo?: EmailAddress
  subject: string
  htmlContent: string
  textContent: string
}

interface BrevoConfig {
  apiKey: string
  sender: EmailAddress
}

const SEND_URL = 'https://api.brevo.com/v3/smtp/email'

export const sendBrevoEmail = async (
  config: BrevoConfig,
  email: TransactionalEmail
): Promise<void> => {
  await $fetch(SEND_URL, {
    method: 'POST',
    headers: { 'api-key': config.apiKey, accept: 'application/json' },
    body: { sender: config.sender, ...email },
  })
}

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

export const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (char: string): string => HTML_ESCAPES[char] ?? char)
