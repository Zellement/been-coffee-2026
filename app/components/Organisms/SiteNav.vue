<template>
  <UNavigationMenu :items="items" color="neutral" class="pointer-events-auto w-full max-w-160">
    <template #locations-content="{ item }: { item: NavigationMenuItem }">
      <ul class="grid w-full gap-2 p-4 lg:grid-cols-2">
        <li v-for="child in item.children" :key="child.label" class="w-full p-0">
          <ULink
            class="hover:bg-elevated/50 flex flex-col rounded-md p-3 py-0! text-left text-sm transition-colors"
            :to="child.to"
          >
            <p class="text-highlighted font-medium">
              {{ child.label }}
              <span :class="child.postcode" class="mr-1 text-xs">({{ child.postcode }})</span>
              <span :class="child.labelSuffixClass">{{ child.labelSuffix }}</span>
            </p>
            <p class="text-muted line-clamp-2">
              {{ child.description }}
            </p>
          </ULink>
        </li>
      </ul>
    </template>
  </UNavigationMenu>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import childrenNav from '~/data/locations.json'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/',
  },
  {
    label: 'Gallery',
    icon: 'i-lucide-image',
    to: '/gallery',
  },
  {
    label: 'Locations',
    icon: 'i-lucide-map-pin',
    to: '/locations',
    slot: 'locations' as const,
    children: childrenNav,
  },
])
</script>
