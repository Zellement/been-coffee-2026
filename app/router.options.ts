import type { RouteLocationNormalized } from 'vue-router'

export default {
  scrollBehavior(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    savedPosition: { left: number; top: number } | null
  ) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (to.path === from.path) return

    return { top: 0 }
  },
  strict: false,
}
