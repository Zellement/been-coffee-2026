<template>
  <UPage>
    <HeroStandard title="Willington">
      <UModal fullscreen title="Order for collection">
        <UButtonDefault color="secondary" target="_blank">Order for collection </UButtonDefault>

        <template #body>
          <iframe
            src="https://goodeats.io/beencoffee?embed_outlet=beencoffee"
            class="w-full h-full"
          />
        </template>
      </UModal>
    </HeroStandard>
    <div class="container w-full lg:hidden">
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
    <div id="overview" class="container container-px py-4 grid lg:grid-cols-12 lg:gap-10">
      <UTimeline :default-value="2" :items="data" class="w-full lg:col-span-4">
        <template #title="{ item }">
          <p v-html="item.title" />
        </template>
      </UTimeline>

      <div id="gallery" class="lg:col-span-8 mx-0 lg:mx-10 flex flex-col">
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
            class="bg-white flex items-center justify-center h-full w-full rounded-lg overflow-hidden"
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
        <UButtonDefault to="/gallery" class="mt-10 ml-auto" variant="outline"
          >See more photos</UButtonDefault
        >
      </div>

      <div id="bookTable" class="pt-12 lg:col-span-6">
        <FormTableBooking location="Willington" />
      </div>

      <div id="faqs" class="pt-12 lg:col-span-6">
        <h2 class="flex flex-col">
          <DualLineText class="text-xl" :text="`Frequently Asked`" level="span" />
          <DualLineText
            class="mb-4 -mt-1 text-2xl text-tuscany-500"
            :text="`Questions`"
            level="span"
          />
        </h2>
        <UAccordion type="multiple" :unmount-on-hide="false" :items="accordionItems" class="w-full">
          <template #body="{ item }">
            <MDC :value="item.content ?? ''" unwrap="p" />
          </template>
          <template #grid="{ item }">
            <div class="@container">
              <div class="grid grid-cols-1 @sm:grid-cols-2 gap-2">
                <div
                  v-for="subitem in (
                    item as {
                      events?: Event[]
                    }
                  ).events || []"
                  :key="subitem.title"
                >
                  <p class="font-medium text-tuscany-500">{{ subitem.title }}</p>
                  <p class="text-sm italic mb-2">{{ subitem.time }}</p>
                  <p class="text-sm">{{ subitem.content }}</p>
                  <p class="text-sm mt-2">
                    Contact:
                    <a :href="subitem.contact" class="text-tuscany-500 underline">{{
                      subitem.contactText
                    }}</a>
                  </p>
                </div>
              </div>
            </div>
          </template>
        </UAccordion>
      </div>

      <div id="team" class="pt-1 col-span-full lg:col-span-6 @container">
        <h2 class="flex flex-col">
          <DualLineText class="text-xl" :text="`Meet the`" level="span" />
          <DualLineText
            class="mb-4 -mt-1 text-2xl text-tuscany-500"
            :text="`Managers`"
            level="span"
          />
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UCard v-for="(item, index) in team" :key="index" class="">
            <template #header>
              <NuxtImg width="500" height="650" :src="item.image" />
            </template>
            <div class="flex flex-col gap-2 items-start">
              <h2 class="text-lg font-bold">{{ item.label }}</h2>
              <UBadge color="tertiary" variant="outline" :label="item.labelSuffix" />
              <p class="text-sm">{{ item.description }}</p>
            </div>
          </UCard>
        </div>
      </div>

      <div id="directions" class="col-span-full lg:col-span-6">
        <LocationGetDirections postcode="DE65 6DX" label="Been Coffee Willington" />
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
]

const team = [
  ...TeamMembers,
  {
    label: 'Nikki',
    labelSuffix: 'Assistant Manager',
    description:
      'Our amazing Assistant Manager Nikki will go out of her way to make sure you feel welcome and have everything you need. She is an integral part of the team and is always happy to help with any questions or requests you may have.',
    image: '/locations/willington/nikki.webp',
  },
]

const accordionItems: AccordionItem[] = [
  ...Faqs,
  {
    label: 'What is parking like?',
    content:
      "Loads of it! Unless it's super busy, you can usually find a space very close to the shop. We are located in the Derby & Burton Services, which has ample parking for cars, motorbikes and coaches.",
  },
  {
    label: 'What events do you host?',
    slot: 'grid',
    events: [
      {
        title: 'Been Networking',
        time: 'Every first Tuesday of the month, 16:30 - 18:00',
        content:
          'A networking event for professionals in and around the local area. It runs from 16:30 to 18:00 and is a great opportunity to connect with other local businesses and professionals',
        contact: 'https://uk.linkedin.com/in/ianpownall',
        contactText: 'Ian Pownall on LinkedIn',
      },
      {
        title: 'Creative Writing Group',
        time: 'Every second Monday of the month, 17:30 - 19:00',
        content: 'Join a group of friendly local writing enthusiasts for a cuppa, cake and a chat.',
        contact: 'mailto:writeherecontact@gmail.com',
        contactText: 'writeherecontact@gmail.com',
      },
    ] as Event[],
  },
  {
    label: 'Do you have highchairs and baby changing facilities?',
    content:
      "We have two highchairs available for use and a fold-away baby changing station in the accessible toilet. Please be advised these are used at the customer's own risk.",
  },
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

const title = 'Been Coffee Willington - Award-winning coffee shop in Willington, Derby'
const description =
  'Been Coffee is an award-winning coffee shop located in Willington, Derby. We serve high-quality coffee and delicious food in a cosy and welcoming atmosphere.'

defineOgImage('DefaultOgImage', {
  title: 'Been Coffee Willington',
  description,
  imageUrl: `${origin}/locations/willington/01.jpg`,
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
      content: `${origin}/locations/willington/01.jpg`,
    },
  ],
})
</script>
