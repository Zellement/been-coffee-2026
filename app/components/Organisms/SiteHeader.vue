<template>
    <header
        role="banner"
        class="fixed top-0 right-0 left-0 z-50 w-full bg-white/80 py-4 transition-transform duration-500 backdrop-blur-sm"
    >
        <div class="container grid-layout container-px">
            <div
                class="relative col-span-full row-start-1 flex w-full items-center justify-between"
            >
                <SiteBrand />
                <SiteNav />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const uiStore = useUiStore()
</script>
