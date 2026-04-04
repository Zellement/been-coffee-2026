<template>
    <nav role="navigation" class="">
        <ul class="flex gap-1">
            <li class="flex">
                <UButton href="/" color="neutral" variant="solid" icon="mingcute:home-3-fill">
                    <span class="sr-only">Home</span>
                </UButton>
            </li>
            <li v-for="item in menuItems" :key="item.label" class="relative group">
                <UButton :href="item.href" color="neutral" variant="solid">
                    {{ item.label }}
                </UButton>
                <ul
                    v-if="item.children"
                    class="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <li
                        v-for="child in item.children"
                        :key="child.label"
                        class="px-4 py-2 hover:bg-gray-100"
                    >
                        <a
                            :href="child.href"
                            class="text-sm text-gray-700 hover:text-gray-900 block"
                        >
                            {{ child.label }}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { U } from 'vue-router/dist/index-BzEKChPW.js'

interface MenuItem {
    label: string
    href: string
    children?: MenuItem[]
}

const menuItems: MenuItem[] = [
    {
        label: 'Locations',
        href: '/locations',
        children: [
            { label: 'Willington', href: '/locations/willington' },
            { label: 'Long Eaton', href: '/locations/long-eaton' }
        ]
    }
]
</script>
