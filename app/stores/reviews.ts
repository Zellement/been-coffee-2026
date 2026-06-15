import { defineStore } from 'pinia'

export const useReviewsStore = defineStore('reviews', {
    state: () => ({
        reviewsTripadvisorWillington: null as unknown[] | null,
        reviewsGoogleWillington: null as unknown[] | null
    }),
    actions: {
        async fetchTripAdvisorReviews() {
            const client = useSupabaseClient()
            const { data } = await client
                .from('reviews')
                .select('reviews_tripadvisor_willington')
                .eq('id', 1)

            if (
                data &&
                data[0]?.reviews_tripadvisor_willington &&
                data[0].reviews_tripadvisor_willington.length > 0
            ) {
                this.reviewsTripadvisorWillington =
                    data[0].reviews_tripadvisor_willington
            } else {
                const { data: fetchData } = await useFetch('/api/tripadvisor')
                const result = fetchData.value as { data: unknown[] }
                await client
                    .from('reviews')
                    .update({
                        reviews_tripadvisor_willington: result.data
                    })
                    .eq('id', 1)
                this.reviewsTripadvisorWillington = result.data
            }
        },
        async fetchGoogleReviews() {
            const client = useSupabaseClient()
            const { data } = await client
                .from('reviews')
                .select('reviews_google_willington')
                .eq('id', 1)

            if (
                data &&
                data[0]?.reviews_google_willington &&
                data[0].reviews_google_willington.length > 0
            ) {
                this.reviewsGoogleWillington =
                    data[0].reviews_google_willington
            } else {
                const { data: fetchData } = await useFetch('/api/serpapi')
                const result = fetchData.value as { reviews: unknown[] }
                await client
                    .from('reviews')
                    .update({
                        reviews_google_willington: result.reviews
                    })
                    .eq('id', 1)
                this.reviewsGoogleWillington = result.reviews
            }
        },
        async fetchAllReviews() {
            this.fetchTripAdvisorReviews()
            this.fetchGoogleReviews()
        }
    }
})
