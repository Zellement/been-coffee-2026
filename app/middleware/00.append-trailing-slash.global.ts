import type { LocationQuery, RouteLocationNormalized } from 'vue-router'

type RouteTypes = {
  path: string
  query: LocationQuery
  hash: string
}

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized) => {
  if (to.path !== '/' && !to.path.endsWith('/')) {
    const { path, query, hash } = to as RouteTypes
    const nextRoute: RouteTypes = { path: `${path}/`, query, hash }

    return navigateTo(nextRoute, { redirectCode: 301 })
  }
})
