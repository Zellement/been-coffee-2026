import { getJson } from 'serpapi'

export default defineEventHandler(async (): Promise<Record<string, unknown> | undefined> => {
  try {
    const response = await getJson({
      engine: 'google_maps_reviews',
      place_id: 'ChIJrYZDVGr3eUgRCWhg5ojDc90',
      hl: 'en',
      sort_by: 'newestFirst',
      api_key: process.env.SERP_API_KEY,
    })
    return response
  } catch (err: unknown) {
    console.error(err)
  }
})
