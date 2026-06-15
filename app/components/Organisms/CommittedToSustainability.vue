<template>
  <div class="container flex flex-col gap-12 px-8 py-20 text-white">
    <h2 class="flex flex-col">
      <DualLineText
        text="Committed"
        level="span"
        class="mx-auto text-3xl"
        outline-class="text-butterscotch-500"
      />
      <DualLineText
        text="to sustainability."
        level="span"
        class="mx-auto text-3xl"
        outline-class="text-butterscotch-500"
      />
    </h2>
    <div class="grid grid-cols-1 gap-4 text-center lg:grid-cols-12 lg:gap-12 lg:text-left">
      <p class="font-krete mx-auto max-w-160 text-lg lg:col-span-5">
        At Been Coffee, we believe that great coffee and great food shouldn't come at the expense of
        the environment. From the day we opened in 2021, we've made conscious choices to
        <span class="text-butterscotch-500">reduce our environmental impact</span> wherever
        possible.
      </p>
      <div class="flex flex-col gap-4 lg:col-span-7">
        <p>
          We work with brands and suppliers who share our
          <span class="text-butterscotch-500">commitment to sustainability</span>, prioritising
          responsibly sourced ingredients and environmentally conscious products. Our takeaway cups
          are fully compostable - including the lids - and all of our pre-packaged cold drinks are
          supplied in recyclable cans rather than plastic bottles.
        </p>

        <p>
          Many of these choices cost more than the alternatives, particularly for a small
          independent business. However, we've never wanted to take the cheapest route simply
          because it's cheaper. We believe that investing in better packaging, responsible sourcing
          and greener practices is worth it, and will continue to be a key part of how we operate as
          we grow.
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
        class="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white p-4"
      >
        <NuxtImg
          :src="item.src"
          :alt="item.alt"
          class="h-full w-full overflow-hidden rounded-lg object-contain"
        />
      </div>
    </UCarousel>
  </div>
</template>

<script lang="ts" setup>
const imagery: ImageryItem[] = [
  {
    src: '/media/logos/decent.webp',
    alt: 'Decent Packaging logo',
  },
  {
    src: '/media/logos/karma.webp',
    alt: 'Karma logo',
  },
  {
    src: '/media/logos/kokoa.jpg',
    alt: 'Kokoa Collection logo',
  },
  {
    src: '/media/logos/onewater.svg',
    alt: 'One Water logo',
  },
  {
    src: '/media/logos/peppersmith.png',
    alt: 'Peppersmith logo',
  },
  {
    src: '/media/logos/beebombs.png',
    alt: 'BeeBombs logo',
  },
]
</script>
