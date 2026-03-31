export const useSeoUtils = (story: TemplatePageTypesStoryblok) => {
    const pageName: ComputedRef<string> = computed(() => story.name)

    const metaTags: ComputedRef<MetaTags | null> = computed(() => {
        return story.content?.metaTags
    })

    const hasMetaImages: ComputedRef<boolean> = computed(() => {
        return !!metaTags.value?.og_image || !!metaTags.value?.twitter_image
    })

    useSeoMeta({
        title: () => metaTags.value?.title || metaTags.value?.og_title || pageName.value || '',
        description: () => metaTags.value?.description || metaTags.value?.og_description || '',
        ogTitle: () => metaTags.value?.og_title || metaTags.value?.title || pageName.value,
        ogDescription: () => metaTags.value?.og_description || metaTags.value?.description || '',
        twitterTitle: () =>
            metaTags.value?.twitter_title ||
            metaTags.value?.og_title ||
            metaTags.value?.title ||
            pageName.value,
        twitterDescription: () =>
            metaTags.value?.twitter_description ||
            metaTags.value?.og_description ||
            metaTags.value?.description ||
            '',
        twitterCard: 'summary_large_image'
    })

    if (hasMetaImages.value) {
        useSeoMeta({
            ogImage: () => metaTags.value?.og_image || metaTags.value?.twitter_image || '',
            twitterImage: () => metaTags.value?.twitter_image || metaTags.value?.og_image || ''
        })
    } else {
        defineOgImage('DefaultOgImage.takumi', {
            title: pageName.value,
            description: metaTags.value?.description || ''
        })
    }

    return {
        pageName,
        metaTags,
        hasMetaImages
    }
}
