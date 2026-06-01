<template>
  <UNavigationMenu
    :items="items"
    color="neutral"
    class="w-full max-w-160 pointer-events-auto"
  >
    <template #locations-content="{ item }: { item: NavigationMenuItem }">
      <ul class="grid gap-2 w-full p-4 lg:grid-cols-2">
        <li
          v-for="child in item.children"
          class="w-full p-0"
          :key="child.label"
        >
          <ULink
            class="text-sm text-left rounded-md p-3 py-0! flex flex-col transition-colors hover:bg-elevated/50"
            :to="child.to"
          >
            <p class="font-medium text-highlighted">
              {{ child.label }}
              <span :class="child.labelSuffixClass">{{
                child.labelSuffix
              }}</span>
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
import type { NavigationMenuItem } from "@nuxt/ui"
import childrenNav from "~/data/locations.json"

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    icon: "i-lucide-house",
    to: "/",
  },
  {
    label: "Gallery",
    icon: "i-lucide-image",
    to: "/gallery",
  },
  {
    label: "Locations",
    icon: "i-lucide-map-pin",
    to: "/locations",
    slot: "locations" as const,
    children: childrenNav,
  },
])
</script>
