/**
 * Checks whether a path is an external URL (starts with `http://`, `https://`, or `//`).
 * @param fullPath - The path to check.
 * @returns `true` if the path is an external link.
 */
export const isExternalLink = (fullPath: string) => {
  return /^(https?:)?\/\//.test(fullPath)
}

/**
 * Removes a trailing slash from a path, unless the path is the root `/`.
 * @param path - The path to trim.
 * @returns The path without a trailing slash.
 */
export const trimTrailingSlash = (path: string) => {
  if (path.endsWith('/') && path.length > 1) {
    return path.slice(0, -1)
  }
  return path
}

/**
 * Ensures a path starts with a leading slash.
 * @param path - The path to normalise.
 * @returns The path prefixed with `/` if not already present.
 */
export const normalisePath = (path: string) => (path.startsWith('/') ? path : `/${path}`)
