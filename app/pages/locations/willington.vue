<template>
  <UPage>
    <HeroStandard title="Willington (DE65 6DX)" />
    <div class="container container-px py-4 grid lg:grid-cols-3">
      <UTimeline :default-value="2" :items="data" class="w-96">
        <template #title="{ item }">
          <p v-html="item.title"></p>
        </template>
      </UTimeline>

      <UCarousel
        class="lg:col-span-2 mx-10"
        :ui="{
          item: 'basis-full',
        }"
        arrows
        loop
        dots
        v-slot="{ item }"
        :items="imagery"
      >
        <div
          class="bg-white flex items-center justify-center h-full w-full rounded-lg overflow-hidden p-4"
        >
          <NuxtImg
            :src="item.src"
            :alt="item.alt"
            width="500"
            height="300"
            class="object-contain h-full w-full rounded-lg overflow-hidden"
          />
        </div>
      </UCarousel>
    </div>
  </UPage>
</template>

<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui"

const data: TimelineItem[] = [
  {
    date: "Opening Hours",
    title:
      "Monday - Friday: 07:00 - 17:30<br />Saturday - Sunday: 07:30 - 17:30",
    icon: "mdi-clock-outline",
  },
  {
    date: "Address",
    title:
      "Derby & Burton Services,<br />Etwall Road, Willington,<br />Derby<br />DE65 6DX",
    icon: "mdi-map-marker-outline",
  },
  {
    date: "Telephone",
    title: '<a href="tel:07592 294 650">07592 294 650</a>',
    icon: "mdi-phone-outline",
  },
]

const imagery: ImageryItem[] = [
  {
    src: "/locations/willington/01.jpg",
    alt: "Outside Willington shop",
  },
  {
    src: "/locations/willington/02.jpg",
    alt: "Outside Willington shop",
  },
  {
    src: "/locations/willington/03.jpg",
    alt: "Inside Willington shop",
  },
  {
    src: "/locations/willington/04.jpg",
    alt: "Inside Willington shop",
  },
  {
    src: "/locations/willington/05.jpg",
    alt: "Inside Willington shop",
  },
]

useHead({
  title:
    "Been Coffee Willington - Award-winning coffee shop in Willington, Derby",
  meta: [
    {
      name: "description",
      content:
        "Been Coffee is an award-winning coffee shop located in Willington, Derby. We serve high-quality coffee and delicious food in a cozy and welcoming atmosphere. ",
    },
  ],
})
</script>
