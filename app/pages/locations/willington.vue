<template>
  <UPage>
    <HeroStandard title="Willington" />
    <div class="container w-full">
      <div class="overflow-x-auto flex gap-2 p-2 pb-3">
        <UButton
          v-for="item in pageNav"
          :key="item.name"
          class="whitespace-nowrap"
          size="sm"
          variant="subtle"
          :to="item.href"
          >{{ item.name }}</UButton
        >
      </div>
    </div>
    <div id="overview" class="container container-px py-4 grid lg:grid-cols-3">
      <UTimeline :default-value="2" :items="data" class="w-full">
        <template #title="{ item }">
          <p v-html="item.title" />
        </template>
      </UTimeline>

      <div id="gallery" class="lg:col-span-2 mx-0 lg:mx-10">
        <UCarousel
          v-slot="{ item }"
          :ui="{
            item: 'basis-full',
          }"
          arrows
          loop
          dots
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
    </div>
  </UPage>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const pageNav = [
  { name: 'Opening Hours', href: '#overview' },
  { name: 'Address', href: '#overview' },
  { name: 'Telephone', href: '#overview' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Book a Table', href: '#book' },
]

const data: TimelineItem[] = [
  {
    date: 'Opening Hours',
    title: 'Monday - Friday: 07:00 - 17:30<br />Saturday - Sunday: 07:30 - 17:30',
    icon: 'mdi-clock-outline',
  },
  {
    date: 'Address',
    title: 'Derby & Burton Services,<br />Etwall Road, Willington,<br />Derby<br />DE65 6DX',
    icon: 'mdi-map-marker-outline',
  },
  {
    date: 'Telephone',
    title: '<a href="tel:07592 294 650">07592 294 650</a>',
    icon: 'mdi-phone-outline',
  },
]

const imagery: ImageryItem[] = [
  {
    src: '/locations/willington/01.jpg',
    alt: 'Outside Willington shop',
  },
  {
    src: '/locations/willington/02.jpg',
    alt: 'Outside Willington shop',
  },
  {
    src: '/locations/willington/03.jpg',
    alt: 'Inside Willington shop',
  },
  {
    src: '/locations/willington/04.jpg',
    alt: 'Inside Willington shop',
  },
  {
    src: '/locations/willington/05.jpg',
    alt: 'Inside Willington shop',
  },
]

useHead({
  title: 'Been Coffee Willington - Award-winning coffee shop in Willington, Derby',
  meta: [
    {
      name: 'description',
      content:
        'Been Coffee is an award-winning coffee shop located in Willington, Derby. We serve high-quality coffee and delicious food in a cozy and welcoming atmosphere. ',
    },
  ],
})
</script>
