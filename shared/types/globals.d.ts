declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }

  interface MediaDimensions {
    dimensions: string
    from: string
  }
  interface ImageryItem {
    src: string
    alt: string
  }

  interface Event {
    title: string
    time: string
    content: string
    contact: string
    contactText: string
  }

  type AcceptedSpacings =
    | 'spacing-none'
    | 'spacing-8rem'
    | 'spacing-20rem'
    | 'spacing-30rem'
    | 'spacing-40rem'

  type TemplatePageTypesStoryblok =
    | TemplateHomepageStoryblok
    | TemplateAudienceHomepageStoryblok
    | TemplatePageStoryblok
    | TemplateArticleStoryblok
    | TemplateResourceStoryblok

  interface TranslatedSlug {
    lang: string | null
    name: string | null
    path: string
    published: boolean | null
  }

  interface MetaTags {
    title: string
    description: string
    og_title: string
    og_description: string
    og_image: string
    twitter_title: string
    twitter_description: string
    twitter_image: string
  }
}

export {}
