<template></template>

<script lang="ts" setup>
defineProps<{
    ulClasses?: string
}>()

const navItems = [
    {
        name: 'About',
        href: '/'
    },
    {
        name: 'Locations',
        href: '/locations',
        subnav: [
            {
                name: 'Willington (DE65)',
                href: '/locations/willington'
            },
            {
                name: 'Long Eaton (NG10)',
                href: '/locations/long-eaton'
            }
        ]
    },
    {
        name: 'Gallery',
        href: '/gallery'
    },
    {
        name: 'FAQs',
        href: '/faqs'
    },
    {
        name: 'Book a Table',
        href: '/book'
    }
]
</script>
