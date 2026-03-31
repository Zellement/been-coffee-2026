/**
 * Utility function to determine the Storyblok version based on the preview mode.
 * @returns "draft" if preview mode is enabled or in Storyblok visual editor, otherwise "published".
 */

type VersionOptions = 'draft' | 'published'

export const useStoryblokVersion = (): VersionOptions => {
    const config = useRuntimeConfig()

    return (config.public.STORYBLOK_VERSION as VersionOptions) ?? 'published'
}
