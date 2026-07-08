<template>
  <UPage>
    <HeroStandard title="Gallery" />
    <ImageGallery />
  </UPage>
</template>

<script setup lang="ts">
const title = 'Gallery - Been Coffee image and video gallery'
const description =
  'Browse the Been Coffee gallery — photos and videos of our award-winning coffee shops, specialty coffee, freshly made food and welcoming spaces in Willington, Derby & Long Eaton, Nottingham.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})
</script>
