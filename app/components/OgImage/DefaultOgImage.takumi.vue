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
    class="w-full h-full justify-start items-end relative p-12"
  >
    <div class="w-full flex-col justify-end relative items-start gap-5">
      <!-- Title -->
      <h1
        class="text-[48px] lg:text-[80px] font-bold m-0 leading-tight"
        style="display: block; line-clamp: 3; text-overflow: ellipsis; text-wrap: balance"
      >
        {{ title }}
      </h1>

      <!-- Divider -->
      <div v-if="description" class="w-16 h-1 rounded-full" />
      <!-- Description -->
      <p
        v-if="description"
        class="text-[24px] lg:text-[32px] leading-relaxed"
        style="display: block; line-clamp: 2; text-overflow: ellipsis"
      >
        {{ description }}
      </p>
      <div v-if="imageUrl" class="w-full h-25 mt-4">
        <img :src="imageUrl" alt="OG Image" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>
