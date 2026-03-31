/**
 * Provides utility functions for handling regional-specific logic.
 */
export const useLanguageComposables = () => {
    /**
     * Maps i18n locale codes to Storyblok language codes.
     * @param locale - The i18n locale code.
     * @returns The corresponding Storyblok language code.
     */
    const getLanguage = (locale: string) => {
        type LocaleToStoryblokLanguageMap = Record<string, string>
        // Map i18n locale codes to Storyblok language codes
        const localeToStoryblokLanguage: LocaleToStoryblokLanguageMap = {
            en: 'default'
        }

        return localeToStoryblokLanguage[locale] || 'default'
    }

    return {
        getLanguage
    }
}
