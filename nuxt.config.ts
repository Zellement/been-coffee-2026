import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'
import { defineOrganization } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
    ssr: true,

    nitro: {
        compressPublicAssets: true,
        minify: true
    },

    modules: [
        '@nuxt/image',
        '@nuxt/ui',
        '@nuxt/scripts',
        '@nuxtjs/seo',
        '@nuxtjs/i18n',
        'nuxt-viewport',
        '@pinia/nuxt'
    ],

    i18n: {
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        locales: [
            {
                code: 'en',
                language: 'en-GB',
                name: 'English',
                file: 'en.json'
            }
        ],
        baseUrl: import.meta.env.NUXT_SITE_URL
    },

    schemaOrg: {
        identity: defineOrganization({
            name: import.meta.env.NUXT_SITE_NAME || 'My Website',
            url: import.meta.env.NUXT_SITE_URL,
            logo: '/favicon.png',
            email: import.meta.env.NUXT_SITE_EMAIL || ''
        })
    },

    $development: {
        app: {
            head: {
                bodyAttrs: {
                    class: 'debug-screens'
                }
            }
        }
    },

    // scripts: {
    //     registry: {
    //         googleTagManager: {
    //             id: import.meta.env.GTM_ID
    //         }
    //     }
    // },



    icon: {
        customCollections: [
            {
                prefix: 'theme',
                dir: './app/assets/icons'
            }
        ]
    },

    image: {
        densities: [1, 2]
    },

    css: ['~/assets/css/app.css'],

    components: {
        dirs: [
            {
                path: '~/components',
                pathPrefix: false
            }
        ]
    },

    viewport: {
        breakpoints: {
            initial: 0,
            '3xs': 336,
            '2xs': 410,
            xs: 480,
            sm: 560,
            md: 658,
            lg: 878,
            xl: 1078,
            '2xl': 1280
        },
        fallbackBreakpoint: 'initial'
    },

    // Allows for local testing on devices
    devServer: {
        port: 3000, // default: 3000
        host: '0.0.0.0' // default: localhost
    },

    ui: {
        theme: {
            colors: [
                'primary',
                'secondary',
                'tertiary',
                'neutral',
                'neutral-light',
                'success',
                'warning',
                'error',
                'info'
            ]
        },
        colorMode: false
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
                {
                    name: 'description',
                    content: 'An Effect Digital creation. Please change this description.'
                },
                { id: 'og-type', property: 'og:type', content: 'website' }
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.png'
                }
            ]
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    runtimeConfig: {
        public: {
            MARKER_ID: import.meta.env.MARKER_ID,
            MARKER_ENABLED: import.meta.env.MARKER_ENABLED,
            GTM_ID: import.meta.env.GTM_ID,
        }
    },

    vite: {
        plugins: [tailwindcss()],
        // optimizeDeps: {
        //     include: [
        //         '@vue/devtools-core',
        //         '@vue/devtools-kit',
        //         'isomorphic-dompurify',
        //         '@marker.io/browser'
        //     ]
        // }
    },

    typescript: {
        typeCheck: true,
        strict: true,
        tsConfig: {
            compilerOptions: {
                strict: true,
                skipLibCheck: true
            }
        }
    },


    devtools: {
        enabled: import.meta.env.NODE_ENV === 'development'
    },

    compatibilityDate: '2026-03-19'
})
