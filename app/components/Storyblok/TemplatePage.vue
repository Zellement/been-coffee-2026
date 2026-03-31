<template>
    <main id="main" class="flex flex-col" :class="getPageSpacing(pageSpacing || 'spacing-30rem')">
        <WrappedStoryblokComponent :blok="blok" :page-spacing="pageSpacing || 'spacing-30rem'" />
    </main>
</template>

<script lang="ts" setup>
defineProps<{
    blok?: StoryblokTemplatePage
    storyName: string
    pageSpacing?: AcceptedSpacings
}>()

const { getPageSpacing } = useSpacingUtil()
</script>
