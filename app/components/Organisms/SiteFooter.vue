<template>
    <div class="flex w-full pt-20 pb-10">
        <footer role="contentinfo" class="flex items-center justify-center gap-2 w-full">
            <SiteBrand />
            <p class="flex flex-row gap-1 text-xs">
                <span>&copy;</span> <span>{{ date }}</span>
            </p>
        </footer>
    </div>
</template>

<script lang="ts" setup>
const date: ComputedRef<number> = computed(() => {
    return new Date().getFullYear()
})
</script>
