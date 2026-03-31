<template>
    <USlideover>
        <UButton color="neutral" variant="outline"> Menu </UButton>
        <template #content>
            <nav class="font-riverside">
                <ul class="flex gap-4 flex-col">
                    <li class="relative group" v-for="item in navItems" :key="item.name">
                        <NuxtLink :href="item.href">{{ item.name }}</NuxtLink>
                        <ul v-if="item.subnav" class="">
                            <li v-for="subItem in item.subnav" :key="subItem.name">
                                <NuxtLink :href="subItem.href">{{ subItem.name }}</NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </template>
    </USlideover>
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
