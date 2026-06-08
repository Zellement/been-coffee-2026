<template>
  <NuxtLink to="/" class="flex pointer-events-auto">
    <span class="sr-only">Go to the homepage</span>
    <icon name="theme:logo" :class="props.iconClasses || 'size-18'" />
  </NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
  iconClasses?: string
}

const props = defineProps<Props>()
</script>
