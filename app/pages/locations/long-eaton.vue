<template>
  <UPage>
    <HeroStandard title-brow="Been Coffee" title="Long Eaton">
      <UModal fullscreen title="Order for collection">
        <UButtonDefault color="secondary" target="_blank">Order for collection </UButtonDefault>

        <template #body>
          <iframe
            src="https://goodeats.io/been-coffee-long-eaton?embed_outlet=been-coffee-long-eaton"
            class="h-full w-full"
          />
        </template>
      </UModal>
    </HeroStandard>
    <div class="container w-full lg:hidden">
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
    </div>
    <div id="overview" class="container-px container grid py-4 lg:grid-cols-12 lg:gap-10">
      <UTimeline :default-value="2" :items="data" class="w-full lg:col-span-4">
        <template #title="{ item }">
          <!-- eslint-disable-next-line vue/no-v-html -- hard-coded markup defined in this file -->
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

      <div id="bookTable" class="pt-12 lg:col-span-6">
        <FormTableBooking location="long-eaton" />
      </div>

      <div id="faqs" class="pt-12 lg:col-span-6">
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
      <div id="team" class="@container col-span-full pt-12 lg:col-span-6">
        <h2 class="flex flex-col">
          <DualLineText class="text-xl" :text="`Meet the`" level="span" />
          <DualLineText
            class="text-tuscany-500 -mt-1 mb-4 text-2xl"
            :text="`Managers`"
            level="span"
          />
        </h2>
        <div class="xs:grid-cols-2 grid grid-cols-1 gap-6">
          <UCard v-for="(item, index) in team" :key="index" class="">
            <template #header>
              <NuxtImg width="500" height="650" :src="item.image" fit="cover" position="top" />
            </template>
            <div class="flex flex-col items-start gap-2">
              <h2 class="text-lg font-bold">{{ item.label }}</h2>
              <UBadge color="tertiary" variant="outline" :label="item.labelSuffix" />
              <p class="text-sm">{{ item.description }}</p>
            </div>
          </UCard>
        </div>
      </div>

      <div id="directions" class="col-span-full pt-12 lg:col-span-6">
        <LocationGetDirections postcode="Boots Court, NG10 3RJ" label="Been Coffee Long Eaton" />
      </div>
    </div>
  </UPage>
</template>

<script setup lang="ts">
import type { TimelineItem, AccordionItem } from '@nuxt/ui'
import Faqs from '~/data/faqs.json'
import TeamMembers from '~/data/team.json'

const { origin } = useRequestURL()

const pageNav = [
  { name: 'Opening Hours', href: '#overview' },
  { name: 'Address', href: '#overview' },
  { name: 'Telephone', href: '#overview' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Book a Table', href: '#bookTable' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Team', href: '#team' },
  { name: 'Directions', href: '#directions' },
]

const team = [
  ...TeamMembers,
  {
    label: 'Shelley',
    labelSuffix: 'Assistant Manager',
    description:
      'Our lovely Assistant Manager Shelley is at the heart of our Long Eaton shop. With a big smile and a warm welcome for everyone who walks through the door, she makes sure your visit is a great one and is always happy to help with anything you need.',
    image: '/media/locations/long-eaton/shelley.jpg',
  },
]

const accordionItems: AccordionItem[] = [
  ...Faqs.filter((faq: AccordionItem): boolean => faq.label !== 'Do you have any job vacancies?'),
  {
    label: 'What is parking like?',
    content:
      'There is fast turnover of cars on a daily basis as people tend to visit and go. There is street parking over the road, too, for busier days.',
  },
  {
    label: 'Do you have highchairs and baby changing facilities?',
    content:
      "We have two highchairs available for use and a baby changing station. Please be advised these are used at the customer's own risk.",
  },
]

const data: TimelineItem[] = [
  {
    date: 'Opening Hours',
    title: 'Monday - Friday: 07:00 - 17:30<br />Saturday - Sunday: 08:00 - 17:30',
    icon: 'mdi-clock-outline',
  },
  {
    date: 'Address',
    title: 'Boots Court,<br />Cranfleet Way,<br />Long Eaton,<br />Nottinghamshire<br />NG10 3RJ',
    icon: 'mdi-map-marker-outline',
  },
  {
    date: 'Telephone',
    title: '<a href="tel:07598 889 434">07598 889 434</a>',
    icon: 'mdi-phone-outline',
  },
  {
    date: 'Opened',
    title: 'Monday 2nd November 2026',
    icon: 'mdi-calendar-month-outline',
  },
]

const imagery: ImageryItem[] = [
  {
    src: '/media/locations/long-eaton/01.jpg',
    alt: 'Outside Long Eaton shop',
  },
]

const title = 'Been Coffee Long Eaton - Independent coffee shop in Long Eaton, Nottingham'
const description =
  "Been Coffee's Long Eaton location, boasting great coffee, delicious food and a warm welcome near West Park, Long Eaton, Nottinghamshire. Now open!"

defineOgImage('DefaultOgImage', {
  title: 'Been Coffee Long Eaton',
  description,
  imageUrl: `${origin}/media/locations/long-eaton/01.jpg`,
})

useSchemaOrg([
  defineLocalBusiness({
    '@type': 'FoodEstablishment',
    name: 'Been Coffee Long Eaton',
    description,
    image: `${origin}/media/locations/long-eaton/01.jpg`,
    telephone: '+447598889434',
    priceRange: '££',
    servesCuisine: [
      'Coffee',
      'Tea',
      'Hot Chocolate',
      'Smoothies',
      'Milkshakes',
      'Cakes',
      'Bagels',
      'Paninis',
      'Cobs',
    ],
    address: {
      streetAddress: 'Boots Court, Cranfleet Way',
      addressLocality: 'Long Eaton',
      addressRegion: 'Nottinghamshire',
      postalCode: 'NG10 3RJ',
      addressCountry: 'GB',
    },
    sameAs: ['https://www.facebook.com/beencoffeelongeaton'],
    openingHoursSpecification: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:30',
      },
      {
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '08:00',
        closes: '17:30',
      },
    ],
  }),
])

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: `${origin}/media/locations/long-eaton/01.jpg`,
  twitterCard: 'summary_large_image',
})
</script>
