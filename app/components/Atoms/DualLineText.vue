<template>
  <component
    :is="level"
    :data-text="text"
    class="relative inline-block whitespace-nowrap font-riverside after:absolute after:inset-0 after:h-full after:w-full after:translate-x-0.5 after:translate-y-1 after:whitespace-nowrap after:font-riverside-outline after:content-[attr(data-text)]"
    :class="[backgroundClass, outlineClass]"
  >
    {{ text }}
  </component>
</template>

<script lang="ts" setup>
defineProps<{
  text: string
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  backgroundClass?: string
  outlineClass?: string
}>()
</script>
