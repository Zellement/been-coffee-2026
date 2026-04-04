<template>
    <UNavigationMenu :items="items" color="neutral" class="w-full max-w-160 justify-end" />
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
    {
        label: 'Home',
        icon: 'i-lucide-house',
        to: '/'
    },
    {
        label: 'Locations',
        icon: 'i-lucide-map-pin',
        to: '/locations',
        children: [
            {
                label: 'Willington (DE65 6DX)',
                description:
                    'A large car park, great for commuters and those looking to meet up with friends.',
                to: '/locations/willington'
            },
            {
                label: 'Long Eaton (NG10 3RJ)',
                description:
                    'Cosy and welcoming, conveniently placed near West Park and the train station.',
                to: '/locations/long-eaton'
            }
        ]
    }
])
</script>
