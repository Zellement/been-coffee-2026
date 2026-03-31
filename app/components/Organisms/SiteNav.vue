<template>
    <nav class="font-riverside">
        <ul class="flex gap-4">
            <li class="relative group" v-for="item in navItems" :key="item.name">
                <NuxtLink :href="item.href">{{ item.name }}</NuxtLink>
                <ul
                    v-if="item.subnav"
                    class="absolute w-48 bg-white p-4 rounded shadow-lg group-hover:block hidden"
                >
                    <li v-for="subItem in item.subnav" :key="subItem.name">
                        <NuxtLink :href="subItem.href">{{ subItem.name }}</NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

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
