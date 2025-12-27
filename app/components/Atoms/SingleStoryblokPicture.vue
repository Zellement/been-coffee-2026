<template>
    <div class="relative h-full">
        <icon
            v-if="!hideSpinner"
            name="svg-spinners:eclipse"
            class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2"
        />

        <picture>
            <source
                v-for="size in sizes"
                :key="size.from"
                type="image/webp"
                :media="`(min-width: ${size.from})`"
                :srcset="getImagePath(size)"
            />
            <img
                :src="`${url}/m/${sizes?.[0]?.dimensions}`"
                :alt="alt"
                :loading="loading ?? 'lazy'"
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
 * @prop {string} url - The base URL of the image.
 * @prop {string} alt - The alt text for the image.
 * @prop {Sizes[]} sizes - Array of image size objects, each with dimensions ('widthxheight') and a min-width 'from'.
 * @prop {'lazy'|'eager'} [loading='lazy'] - The loading strategy for the image.
 * @prop {boolean} [hideSpinner] - If true, hides the loading spinner.
 * @prop {string|null} [focus] - Optional focal point for the image, passed as a string (e.g., 'center,top').
 * @prop {string} [imgClasses] - Additional classes for the <img> element.
 *
 * @example
 * <single-storyblok-picture
 *   :url="imageUrl"
 *   alt="Descriptive alt text"
 *   :sizes="[
 *     { dimensions: '1600x800', from: '1200px' },
 *     { dimensions: '1200x800', from: '800px' },
 *     { dimensions: '800x700', from: '500px' },
 *     { dimensions: '500x700', from: '1px' }
 *   ]"
 *   loading="lazy"
 *   :hideSpinner="false"
 *   focus="center,top"
 *   img-classes="rounded shadow"
 * />
 */

/**
 * Props interface for SingleStoryblokPicture.
 */
interface Props {
    /** The base URL of the image. */
    url: string
    /** The alt text for the image. */
    alt: string
    /** Array of image size objects, each with dimensions and a min-width 'from'. */
    sizes: Sizes[]
    /** The loading strategy for the image. */
    loading?: 'lazy' | 'eager'
    /** If true, hides the loading spinner. */
    hideSpinner?: boolean
    /** Optional focal point for the image. */
    focus?: string | null
    /** Additional classes for the <img> element. */
    imgClasses?: string
}

/**
 * Interface for a responsive image size.
 */
interface Sizes {
    /** The image size in 'widthxheight' format. */
    dimensions: string
    /** The min-width breakpoint for this size. */
    from: string
}

const props = defineProps<Props>()

/**
 * Returns the image path for a given size, including optional focal point.
 * @param {Sizes} size - The size object containing dimensions and from.
 * @returns {string} The image URL with appropriate filters.
 */
const getImagePath = (size: Sizes): string => {
    if (props.focus) {
        return `${props.url}/m/${size.dimensions}/filters:format(webp):focal(${props.focus})`
    }
    return `${props.url}/m/${size.dimensions}/filters:format(webp)`
}
</script>
