<template>
  <UPage>
    <HeroStandard title-brow="Been Coffee" title="Long Eaton" />
    <!-- <div class="container w-full lg:hidden">
      <div class="flex gap-2 overflow-x-auto p-2 pb-3">
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
    </div> -->
    <div id="overview" class="container-px container grid py-4 lg:grid-cols-12 lg:gap-10">
      <UTimeline :default-value="2" :items="data" class="w-full lg:col-span-4">
        <template #title="{ item }">
          <p v-html="item.title" />
        </template>
      </UTimeline>

      <div id="gallery" class="mx-0 flex flex-col lg:col-span-8 lg:mx-10">
        <UCarousel
          v-slot="{ item }"
          :ui="{
            item: 'basis-full',
          }"
          loop
          :items="imagery"
        >
          <div
            class="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white"
          >
            <NuxtImg
              :src="item.src"
              :alt="item.alt"
              width="500"
              height="300"
              class="h-full w-full overflow-hidden rounded-lg object-contain"
            />
          </div>
        </UCarousel>
        <UButtonDefault to="/gallery" class="mt-10 ml-auto" variant="outline"
          >See more photos</UButtonDefault
        >
      </div>

      <!-- <div id="bookTable" class="pt-12 lg:col-span-6">
        <FormTableBooking location="Willington" />
      </div> -->

      <div id="bookTable" class="pt-12 lg:col-span-6">
        <h2 class="flex flex-col">
          <DualLineText class="text-xl" :text="`Frequently Asked`" level="span" />
          <DualLineText
            class="text-tuscany-500 -mt-1 mb-4 text-2xl"
            :text="`Questions`"
            level="span"
          />
        </h2>
        <UAccordion type="multiple" :unmount-on-hide="false" :items="accordionItems" class="w-full">
          <template #body="{ item }">
            <MDC :value="item.content ?? ''" unwrap="p" />
          </template>
          <template #grid="{ item }">
            <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
              <div
                v-for="subitem in (
                  item as {
                    events?: Event[]
                  }
                ).events || []"
                :key="subitem.title"
              >
                <p class="text-tuscany-500 font-medium">{{ subitem.title }}</p>
                <p class="mb-2 text-sm italic">{{ subitem.time }}</p>
                <p class="text-sm">{{ subitem.content }}</p>
                <p class="mt-2 text-sm">
                  Contact:
                  <a :href="subitem.contact" class="text-tuscany-500 underline">{{
                    subitem.contactText
                  }}</a>
                </p>
              </div>
            </div>
          </template>
        </UAccordion>
      </div>
      <!-- <div id="directions" class="lg:col-span-6 pt-12">
        <LocationGetDirections postcode="Boots Court, NG10 3RJ" label="Been Coffee Long Eaton" />
      </div> -->
    </div>
  </UPage>
</template>

<script setup lang="ts">
import type { TimelineItem, AccordionItem } from '@nuxt/ui'
// import Faqs from '~/data/faqs.json'

const { origin } = useRequestURL()

// const pageNav = [
//   { name: 'Opening Hours', href: '#overview' },
//   { name: 'Address', href: '#overview' },
//   { name: 'Telephone', href: '#overview' },
//   { name: 'Gallery', href: '#gallery' },
//   { name: 'Book a Table', href: '#bookTable' },
//   { name: 'Directions', href: '#directions' },
// ]

const accordionItems: AccordionItem[] = [
  // ...Faqs,
  {
    label: 'When do you open?',
    content: 'We are currently under construction and will be opening in Winter 2026.',
  },
  {
    label: 'What is parking like?',
    content:
      'There is fast turnover of cars on a daily basis as people tend to visit and go. There is street parking over the road, too, for busier days.',
  },
  {
    label: 'Are you hiring?',
    content: 'We will be! Visit out <a href="https://linktr.ee/beencoffeeuk" target="_blank" rel="noopener noreferrer">Linktree</a> for more information.',
  }
  // {
  //   label: 'Do you have highchairs and baby changing facilities?',
  //   content:
  //     "We have two highchairs available for use and a fold-away baby changing station in the accessible toilet. Please be advised these are used at the customer's own risk.",
  // },
]

const data: TimelineItem[] = [
  // {
  //   date: 'Opening Hours',
  //   title: 'Monday - Friday: 07:00 - 17:30<br />Saturday - Sunday: 08:00 - 17:30',
  //   icon: 'mdi-clock-outline',
  // },
  {
    date: 'Address',
    title: 'Boots Court,<br />Cranfleet Way,<br />Long Eaton,<br />Nottinghamshire<br />NG10 3RJ',
    icon: 'mdi-map-marker-outline',
  },

  {
    date: 'Opening',
    title: 'Winter 2026',
    icon: 'mdi-calendar-month-outline',
  },
  // {
  //   date: 'Telephone',
  //   title: '<a href="tel:07592 294 650">07592 294 650</a>',
  //   icon: 'mdi-phone-outline',
  // },
]

const imagery: ImageryItem[] = [
  {
    src: '/media/locations/long-eaton/01.jpg',
    alt: 'Mock up of Long Eaton location',
  },
]

const title = 'Been Coffee Long Eaton - Coffee shop in Long Eaton, Nottingham'
const description =
  "Been Coffee's second location, boasting great coffee, delicious food and a warm welcome near West Park, Long Eaton, Nottinghamshire."

defineOgImage('DefaultOgImage', {
  title: 'Been Coffee Long Eaton',
  description,
  imageUrl: `${origin}/media/locations/long-eaton/01.jpg`,
})

useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${origin}/media/locations/long-eaton/01.jpg`,
    },
  ],
})
</script>
