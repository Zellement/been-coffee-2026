/**
 * Provides utility functions for resolving Storyblok link URLs and display titles,
 * with locale-aware handling for translated slugs and story names.
 */

const HOME_PAGE_STORY_NAME = 'home'

export const useLinkComposables = () => {
    const { locale } = useI18n()

    const resolveStoryblokLink = (link: StoryblokMultilink) => {
        if (link?.linktype === 'email') {
            return `mailto:${link.email}`
        }
        if (link?.linktype === 'story') {
            const slug = link?.story && 'full_slug' in link.story ? link.story.full_slug : ''
            return slug ? resolveLocalePath(slug) : ''
        }
        // Else is asset or URL
        return link?.url || link?.cached_url
    }

    /**
     * Generates a locale-aware internal URL from a full path, trimming any trailing slash.
     * External links are returned unchanged.
     * @param fullSlug - The raw path to process.
     * @returns The resolved, normalised URL string.
     */
    const resolveLocalePath = (fullSlug: string): string => {
        if (!fullSlug) return '/'

        if (isExternalLink(fullSlug)) {
            return fullSlug
        }

        const normalisedPath = normalisePath(fullSlug)
        const localeRoute = useLocaleRoute()
        const route = localeRoute(normalisedPath, locale.value)

        if (normalisedPath === `/${HOME_PAGE_STORY_NAME}`) return '/'

        if (!route || !route.fullSlug) {
            return trimTrailingSlash(normalisedPath)
        }

        return trimTrailingSlash(route.fullSlug)
    }

    /**
     * Resolves the translated story name for the current locale from `translated_slugs`.
     * Falls back to the default story name if no translation is available.
     * @param link - A Storyblok multilink object containing story data.
     * @returns The translated or default story name.
     */
    const resolveTranslatedName = (link: StoryblokMultilink): string => {
        const story = link?.story
        if (!story) return ''

        if ('translated_slugs' in story && Array.isArray(story.translated_slugs)) {
            const translated = story.translated_slugs.find(
                (slug: { lang: string; name: string }) => slug.lang === locale.value
            )
            if (translated?.name) return translated.name
        }

        return story.name || ''
    }

    return {
        resolveStoryblokLink,
        resolveLocalePath,
        resolveTranslatedName
    }
}
