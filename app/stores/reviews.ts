import { defineStore } from 'pinia'

interface ReviewsRow {
    id: number
    reviews_tripadvisor_willington: unknown[] | null
    reviews_google_willington: unknown[] | null
}

export const useReviewsStore = defineStore('reviews', {
    state: () => ({
        reviewsTripadvisorWillington: null as unknown[] | null,
        reviewsGoogleWillington: null as unknown[] | null
    }),
    actions: {
        async fetchTripAdvisorReviews() {
            const client = useSupabaseClient()
            const { data, error } = await client
                .from('reviews')
                .select('reviews_tripadvisor_willington')
                .eq('id', 1)

            const rows = data as Pick<ReviewsRow, 'reviews_tripadvisor_willington'>[] | null
            if (!error && rows?.[0]?.reviews_tripadvisor_willington?.length) {
                this.reviewsTripadvisorWillington = rows[0].reviews_tripadvisor_willington
                return
            }

            try {
                const result = await $fetch<{ data: unknown[] }>('/api/tripadvisor')
                if (result?.data?.length) {
                    this.reviewsTripadvisorWillington = result.data
                    await client
                        .from('reviews')
                        .update({ reviews_tripadvisor_willington: result.data } as never)
                        .eq('id', 1)
                }
            } catch (err) {
                console.error('[reviews] TripAdvisor fetch failed', err)
            }
        },
        async fetchGoogleReviews() {
            const client = useSupabaseClient()
            const { data, error } = await client
                .from('reviews')
                .select('reviews_google_willington')
                .eq('id', 1)

            const rows = data as Pick<ReviewsRow, 'reviews_google_willington'>[] | null
            if (!error && rows?.[0]?.reviews_google_willington?.length) {
                this.reviewsGoogleWillington = rows[0].reviews_google_willington
                return
            }

            try {
                const result = await $fetch<{ reviews: unknown[] }>('/api/serpapi')
                if (result?.reviews?.length) {
                    this.reviewsGoogleWillington = result.reviews
                    await client
                        .from('reviews')
                        .update({ reviews_google_willington: result.reviews } as never)
                        .eq('id', 1)
                }
            } catch (err) {
                console.error('[reviews] Google fetch failed', err)
            }
        },
        async fetchAllReviews() {
            await Promise.all([
                this.fetchTripAdvisorReviews(),
                this.fetchGoogleReviews()
            ])
        }
    }
})
