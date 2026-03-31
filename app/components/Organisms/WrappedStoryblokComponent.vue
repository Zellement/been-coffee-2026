<template>
    <div
        v-for="childBlok in blok?.body || []"
        :key="childBlok._uid"
        :class="[getSpacing(childBlok?.blokTopSpacing, pageSpacing || 'spacing-30rem')]"
    >
        <StoryblokComponent :blok="childBlok" />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    blok?: TemplatePageTypesStoryblok
    pageSpacing?: AcceptedSpacings
}>()

const { getSpacing } = useSpacingUtil()
</script>
