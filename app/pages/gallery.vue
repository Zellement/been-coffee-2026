<template>
  <UPage>
    <HeroStandard title="Gallery" />

    <div class="container container-px py-4 grid lg:grid-cols-12 lg:gap-10">
      <ImageGallery />
    </div>
  </UPage>
</template>

<script setup lang="ts">
useHead({
  title: 'Gallery - Been Coffee image and video gallery',
  meta: [
    {
      name: 'description',
      content:
        "Been Coffee's second location, boasting great coffee, delicious food and a warm welcome in the heart of Long Eaton, Nottinghamshire.",
    },
  ],
})
</script>
