<template>
  <div class="grid grid-cols-2 overflow-clip sm:grid-cols-6">
    <div v-for="(item, index) in media" :key="index" :class="[getMosaicClass(index), 'relative']">
      <!-- DEBUG: remove span when done -->
      <!-- <span class="absolute top-1 left-1 z-10 bg-black/70 px-1 text-xs text-white">{{
        index
      }}</span> -->
      <video
        v-if="item.endsWith('.mp4')"
        loop
        disablepictureinpicture
        muted
        playsinline
        autoplay
        class="h-full w-full object-cover"
      >
        <source :src="item" type="video/mp4" >
      </video>
      <NuxtImg
        v-else
        :src="item"
        :alt="`Gallery item ${index + 1}`"
        sizes="336px 2xs:425px xs:472px sm:560px lg:780px"
        quality="85"
        class="h-full w-full object-cover"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const media = ref(
  Array.from({ length: 34 }, (_, i) => {
    switch (i) {
      case 1:
        return '/media/gallery/gallery2.mp4'
      case 10:
        return '/media/gallery/gallery11.mp4'
      case 18:
        return '/media/gallery/gallery19.mp4'
      default:
        return `/media/gallery/gallery${i + 1}.jpg`
    }
  })
)

const getMosaicClass = (index: number) => {
  const classes: Record<number, string> = {
    0: 'sm:row-span-2 sm:col-span-2 col-span-full',
    1: 'sm:row-span-2 sm:col-span-2 col-span-full',
    2: 'sm:row-span-1 sm:col-span-1 col-span-full',
    3: 'sm:row-span-1 sm:col-span-1 col-span-full',
    4: 'sm:row-span-2 sm:col-span-2 col-span-full',
    5: 'sm:row-span-2 sm:col-span-2 col-span-full',
    6: 'sm:row-span-1 sm:col-span-2 col-span-full',
    7: 'sm:row-span-1 sm:col-span-2 col-span-full',
    8: 'sm:row-span-2 sm:col-span-2 col-span-full',
    9: 'sm:row-span-2 sm:col-span-2 col-span-full',
    10: 'sm:row-span-2 sm:col-span-2 col-span-full',
    11: 'sm:row-span-1 sm:col-span-1 col-span-full',
    12: 'sm:row-span-1 sm:col-span-1 col-span-full',
    13: 'sm:row-span-2 sm:col-span-2 col-span-full',
    14: 'sm:row-span-1 sm:col-span-1 col-span-full',
    15: 'sm:row-span-2 sm:col-span-2 col-span-full',
    16: 'sm:row-span-2 sm:col-span-1 col-span-full',
    17: 'sm:row-span-2 sm:col-span-1 col-span-full',
    18: 'sm:row-span-2 sm:col-span-2 col-span-full',
    19: 'sm:row-span-1 sm:col-span-2 col-span-full',
    20: 'sm:row-span-1 sm:col-span-1 col-span-full',
    21: 'sm:row-span-1 sm:col-span-1 col-span-full',
    22: 'sm:row-span-1 sm:col-span-3 col-span-full',
    23: 'sm:row-span-2 sm:col-span-3 col-span-full',
    24: 'sm:row-span-1 sm:col-span-3 col-span-full',
    25: 'sm:row-span-2 sm:col-span-1 col-span-full',
    26: 'sm:row-span-2 sm:col-span-2 col-span-full',
    27: 'sm:row-span-2 sm:col-span-3 col-span-full',
    28: 'sm:row-span-1 sm:col-span-3 col-span-full',
    29: 'sm:row-span-1 sm:col-span-2 col-span-full',
    30: 'sm:row-span-2 sm:col-span-2 col-span-full',
    31: 'sm:row-span-2 sm:col-span-2 col-span-full',
    32: 'sm:row-span-2 sm:col-span-3 col-span-full',
    33: 'sm:row-span-1 sm:col-span-3 col-span-full',
  }
  return classes[index % Object.keys(classes).length]
}
</script>
