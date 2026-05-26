declare global {
    type ImageTypes = {
        url?: string
        alt?: string
        caption?: string
        focus?: string
    }

    type NavItem = {
        key: string
        label: string
        url: string
        subItems?: NavItem[]
    }

    interface ImageryItem {
        src: string
        alt: string
    }

    interface UtmParameters {
        [key: `utm_${string}`]: string
    }
}

export {}
