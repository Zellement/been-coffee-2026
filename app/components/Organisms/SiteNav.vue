<template>
  <UNavigationMenu
    :items="items"
    color="neutral"
    class="w-full max-w-160 justify-end"
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

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    icon: "i-lucide-house",
    to: "/",
  },
  {
    label: "Locations",
    icon: "i-lucide-map-pin",
    to: "/locations",
    slot: "locations" as const,
    children: [
      {
        label: "Willington (DE65 6DX)",
        labelSuffix: "Since 2021",
        labelSuffixClass: "text-xs text-muted uppercase tracking-wide",
        description:
          "A large car park, great for commuters, business meets and groups of friends.",
        to: "/locations/willington",
      },
      {
        label: "Long Eaton (NG10 3RJ)",
        labelSuffix: "NEW",
        labelSuffixClass:
          "text-xs rounded bg-navy-500 text-butterscotch-500 py-0.5 px-1 uppercase tracking-wide",
        description:
          "Cosy and welcoming, conveniently placed near West Park and the train station.",
        to: "/locations/long-eaton",
      },
    ],
  },
])
</script>
