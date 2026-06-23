<template>
    <div class="columns-1 gap-4 sm:columns-2 lg:columns-3">
        <div
            v-for="review in mergedReviews"
            :key="review.id"
            class="mb-4 break-inside-avoid"
        >
            <UCard>
                <template #header>
                    <div class="flex items-center gap-2">
                        <UAvatarGroup size="sm">
                            <UAvatar :icon="platformIcon(review.source)" />
                            <UAvatar v-if="review.userImage" :src="review.userImage" :alt="review.name" />
                        </UAvatarGroup>
                        <div>
                            <p class="text-sm font-semibold leading-tight">{{ review.name }}</p>
                            <p class="text-muted text-xs">{{ review.date }}</p>
                        </div>
                    </div>
                    <div class="mt-2 flex gap-0.5">
                        <UIcon
                            v-for="i in 5"
                            :key="i"
                            name="material-symbols:star"
                            class="size-5"
                            :class="i <= review.rating ? 'text-butterscotch-500' : 'text-gray-200'"
                        />
                    </div>
                </template>

                <p v-if="review.title" class="mb-2 text-sm font-medium italic">
                    &ldquo;{{ review.title }}&rdquo;
                </p>
                <p v-if="review.text" class="text-sm">{{ review.text }}</p>

                <ul
                    v-if="review.details && hasDetails(review.details)"
                    class="text-muted mt-3 space-y-1 text-xs"
                >
                    <li v-if="review.details.food">Food: {{ review.details.food }}</li>
                    <li v-if="review.details.service">Service: {{ review.details.service }}</li>
                    <li v-if="review.details.atmosphere">Atmosphere: {{ review.details.atmosphere }}</li>
                </ul>
            </UCard>
        </div>
    </div>
</template>

<script setup lang="ts">

interface ReviewDetails {
    food?: string
    service?: string
    atmosphere?: string
}

interface NormalisedReview {
    id: string
    source: 'google' | 'tripadvisor'
    name: string
    date: string
    rating: number
    userImage?: string
    title?: string
    text?: string
    details?: ReviewDetails
}

const props = withDefaults(defineProps<{ location?: string }>(), {
    location: 'willington'
})

const reviewsStore = useReviewsStore()

const locationSuffix = computed(
    () => props.location.charAt(0).toUpperCase() + props.location.slice(1)
)

const googleRaw = computed(
    () => reviewsStore[`reviewsGoogle${locationSuffix.value}` as keyof typeof reviewsStore] as Record<string, unknown>[] | null
)

const tripadvisorRaw = computed(
    () => reviewsStore[`reviewsTripadvisor${locationSuffix.value}` as keyof typeof reviewsStore] as Record<string, unknown>[] | null
)

function platformIcon(source: 'google' | 'tripadvisor'): string {
    return source === 'google' ? 'tabler:brand-google-filled' : 'tabler:brand-tripadvisor'
}

function timeAgo(date: string | undefined): string {
    if (!date) return ''
    const parsed = new Date(date)
    if (Number.isNaN(parsed.getTime())) return ''
    return useTimeAgo(parsed).value
}

function normaliseGoogle(review: Record<string, unknown>, index: number): NormalisedReview {
    const user = review.user as Record<string, unknown>
    const details = review.details as ReviewDetails | undefined
    return {
        id: `google-${index}`,
        source: 'google',
        name: user?.name as string ?? 'Anonymous',
        date: (review.date as string) ?? '',
        rating: review.rating as number ?? 0,
        userImage: user?.thumbnail as string | undefined,
        text: review.snippet as string | undefined,
        details
    }
}

function normaliseTripadvisor(review: Record<string, unknown>, index: number): NormalisedReview {
    const user = review.user as Record<string, unknown>
    return {
        id: `tripadvisor-${index}`,
        source: 'tripadvisor',
        name: user?.username as string ?? 'Anonymous',
        date: timeAgo(review.published_date as string | undefined),
        rating: review.rating as number ?? 0,
        userImage: (user?.avatar as Record<string, unknown> | undefined)?.thumbnail as string | undefined,
        title: review.title as string | undefined,
        text: review.text as string | undefined
    }
}

const mergedReviews = computed((): NormalisedReview[] => {
    const google = (googleRaw.value ?? []).map(normaliseGoogle)
    const tripadvisor = (tripadvisorRaw.value ?? []).map(normaliseTripadvisor)
    return [...google, ...tripadvisor].filter((r) => r.rating >= 4)
})

function hasDetails(details: ReviewDetails): boolean {
    return !!(details.food || details.service || details.atmosphere)
}

onMounted(() => {
    reviewsStore.fetchAllReviews()
})
</script>
