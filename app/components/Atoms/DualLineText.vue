<template>
    <span class="relative font-riverside whitespace-nowrap">
        <component :class="backgroundClass" :is="level">{{ text }}</component>
        <span
            class="absolute w-full h-full inset-0 translate-x-0.5 translate-y-1 font-riverside-outline whitespace-nowrap"
            aria-hidden="true"
            :class="outlineClass"
        >
            {{ text }}
        </span>
    </span>
</template>

<script lang="ts" setup>
defineProps<{
    text: string
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
    backgroundClass?: string
    outlineClass?: string
}>()
</script>
