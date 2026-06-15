<template>
  <div class="container px-8 text-white flex gap-12 flex-col py-20">
    <h2 class="flex flex-col">
      <DualLineText
        text="Committed"
        level="span"
        class="text-3xl mx-auto"
        outline-class="text-butterscotch-500"
      />
      <DualLineText
        text="to sustainability."
        level="span"
        class="text-3xl mx-auto"
        outline-class="text-butterscotch-500"
      />
    </h2>
    <div class="grid grid-cols-1 text-center lg:grid-cols-12 gap-4 lg:text-left lg:gap-12">
      <p class="max-w-160 mx-auto text-lg font-krete lg:col-span-4">
        We choose brands and partners who share our
        <span class="text-butterscotch-500">commitment to sustainability</span>, and we're always
        looking for ways to reduce our environmental impact.
      </p>
      <div class="flex flex-col gap-2 lg:col-start-5 lg:col-span-7">
        <p>
          We strive to make everything as environmentally friendly and sustainable as possible. Our
          takeaway cups are compostable (even the lids!), our pre-packed drinks are all in cans (no
          plastic!) and we strive to choose suppliers that share our vision for a greener future.
        </p>
        <p>
          When we opened in late 2021, we decided we wanted to prioritise helping our environment as
          much as a small business can, by choosing to use sustainably sourced ingredients and
          reduce the amount of non-recyclable waste we were producing.
        </p>
      </div>
    </div>
    <UCarousel
      v-slot="{ item }"
      class="sm:mx-20"
      :ui="{
        item: 'basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 aspect-square',
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
          class="object-contain h-full w-full rounded-lg overflow-hidden"
        />
      </div>
    </UCarousel>
  </div>
</template>

<script lang="ts" setup>
const imagery: ImageryItem[] = [
  {
    src: '/logos/decent.webp',
    alt: 'Decent Packaging logo',
  },
  {
    src: '/logos/karma.webp',
    alt: 'Karma logo',
  },
  {
    src: '/logos/kokoa.jpg',
    alt: 'Kokoa Collection logo',
  },
  {
    src: '/logos/onewater.svg',
    alt: 'One Water logo',
  },
  {
    src: '/logos/peppersmith.png',
    alt: 'Peppersmith logo',
  },
  {
    src: '/logos/beebombs.png',
    alt: 'BeeBombs logo',
  },
]
</script>
