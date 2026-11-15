interface TurnstileVerifyResponse {
  success: boolean
  'error-codes'?: string[]
}

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

/**
 * Verifies a Cloudflare Turnstile token on the server. Fails closed: any error means "not human".
 */
export const verifyTurnstile = async (
  token: string,
  secret: string,
  remoteIp: string | undefined
): Promise<boolean> => {
  if (!token || !secret) return false

  const body = new URLSearchParams({ secret, response: token })
  if (remoteIp) body.set('remoteip', remoteIp)

  try {
    const result = await $fetch<TurnstileVerifyResponse>(VERIFY_URL, { method: 'POST', body })
    if (!result.success) {
      console.warn('[table-booking] Turnstile rejected token', result['error-codes'])
    }
    return result.success
  } catch (error) {
    console.error('[table-booking] Turnstile verification failed', error)
    return false
  }
}
