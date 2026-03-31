<template>
    <div :aria-hidden="!hasAlt ? 'true' : undefined" class="relative h-full">
        <Icon
            v-if="!hideSpinner"
            name="svg-spinners:eclipse"
            class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2"
        />

        <picture>
            <source
                v-for="size in sizes"
                :key="size.from"
                type="image/avif"
                :media="`(min-width: ${size.from})`"
                :srcset="getImagePath(size)"
            />
            <img
                :src="`${media.filename}/m/${sizes?.[0]?.dimensions}`"
                :alt="altOverride || media.alt || ''"
                :loading="loading ?? 'lazy'"
                :fetchpriority="fetchpriority"
                class="relative h-full w-full"
                :class="imgClasses"
            />
        </picture>
    </div>
</template>

<script lang="ts" setup>
/**
 * SingleStoryblokPicture.vue
 *
 * Renders a responsive <picture> element for Storyblok images, supporting multiple breakpoints and optional focal point.
 *
 * @component
 * @prop {StoryblokAsset} media - The Storyblok media asset object.
 * @prop {MediaDimensions[]} sizes - Array of image size objects, each with dimensions ('widthxheight') and a min-width 'from'.
 * @prop {'lazy'|'eager'} [loading='lazy'] - The loading strategy for the image.
 * @prop {boolean} [hideSpinner] - If true, hides the loading spinner.
 * @prop {string} [imgClasses] - Additional classes for the <img> element.
 * @prop {string} [altOverride] - Optional alt text override.
 *
 * @example
 * <single-storyblok-picture
 *   :media="featuredMedia"
 *   :sizes="[
 *     { dimensions: '1600x800', from: '1200px' },
 *     { dimensions: '1200x800', from: '800px' },
 *     { dimensions: '800x700', from: '500px' },
 *     { dimensions: '500x700', from: '1px' }
 *   ]"
 *   loading="lazy"
 *   :hideSpinner="false"
 *   img-classes="rounded shadow"
 * />
 */

/**
 * Props interface for SingleStoryblokPicture.
 */
interface Props {
    /** The Storyblok media asset object. */
    media: StoryblokAsset
    /** Array of image size objects, each with dimensions and a min-width 'from'. */
    sizes: MediaDimensions[]
    /** The loading strategy for the image. */
    loading?: 'lazy' | 'eager'
    /** If true, hides the loading spinner. */
    hideSpinner?: boolean
    /** Additional classes for the <img> element. */
    imgClasses?: string
    /** Optional alt text override. */
    altOverride?: string
    /** Fetch priority hint for the image. Use 'high' for LCP images. */
    fetchpriority?: 'high' | 'low' | 'auto'
}

const props = defineProps<Props>()

/**
 * Returns the image path for a given size, including optional focal point.
 * @param {MediaDimensions} size - The size object containing dimensions and from.
 * @returns {string} The image URL with appropriate filters.
 */
const getImagePath = (size: MediaDimensions): string => {
    if (props.media.focus) {
        return `${props.media.filename}/m/${size.dimensions}/filters:format(avif):focal(${props.media.focus})`
    }
    return `${props.media.filename}/m/${size.dimensions}/filters:format(avif)`
}

const hasAlt: ComputedRef<boolean> = computed(() => {
    return !!props.altOverride || !!props.media.alt
})
</script>
