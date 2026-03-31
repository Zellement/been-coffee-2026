<script setup>
defineProps({
    title: { type: String, required: false, default: 'title' },
    description: { type: String, required: false }
})
</script>

<template>
    <div class="w-full h-full justify-start items-end relative p-12 bg-neutral-900 text-white">
        <div class="w-full flex-col justify-end relative items-start gap-5">
            <!-- Title -->
            <h1
                class="text-[48px] lg:text-[80px] font-bold m-0 leading-tight text-white"
                style="display: block; line-clamp: 3; text-overflow: ellipsis; text-wrap: balance"
            >
                {{ title }}
            </h1>

            <!-- Divider -->
            <div v-if="description" class="w-16 h-1 bg-neutral-600 rounded-full" />
            <!-- Description -->
            <p
                v-if="description"
                class="text-[24px] lg:text-[32px] text-neutral-400 leading-relaxed"
                style="display: block; line-clamp: 2; text-overflow: ellipsis"
            >
                {{ description }}
            </p>
        </div>
    </div>
</template>
