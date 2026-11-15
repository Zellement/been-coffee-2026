const hits: Map<string, number[]> = new Map()

/**
 * Best-effort, in-memory sliding-window limiter. On Netlify each function instance has its own
 * memory, so this only slows down bursts; Turnstile is the real spam gate.
 */
export const isRateLimited = (key: string, limit: number, windowMs: number): boolean => {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((time: number): boolean => now - time < windowMs)

  if (recent.length >= limit) {
    hits.set(key, recent)
    return true
  }

  recent.push(now)
  hits.set(key, recent)
  return false
}
