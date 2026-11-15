<script setup>
defineProps({
  title: { type: String, required: false, default: 'title' },
  description: { type: String, required: false, default: '' },
  imageUrl: { type: String, required: false, default: '' },
})
</script>

<template>
  <div
    style="background-color: #fab944; color: #1b1d3c"
    class="relative h-full w-full items-end justify-start p-12"
  >
    <div class="relative w-full flex-col items-start justify-end gap-5">
      <!-- Title -->
      <h1
        class="m-0 text-[48px] leading-tight font-bold lg:text-[80px]"
        style="display: block; line-clamp: 3; text-overflow: ellipsis; text-wrap: balance"
      >
        {{ title }}
      </h1>

      <!-- Divider -->
      <div v-if="description" class="h-1 w-16 rounded-full" />
      <!-- Description -->
      <p
        v-if="description"
        class="text-[24px] leading-relaxed lg:text-[32px]"
        style="display: block; line-clamp: 2; text-overflow: ellipsis"
      >
        {{ description }}
      </p>
      <div v-if="imageUrl" class="mt-4 h-25 w-full">
        <img :src="imageUrl" alt="OG Image" class="h-full w-full object-cover" />
      </div>
    </div>
  </div>
</template>
