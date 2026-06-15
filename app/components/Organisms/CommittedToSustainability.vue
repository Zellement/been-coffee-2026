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
          As an independent business, we know we can't change the world overnight, but we're
          committed to making better choices every day. Whether that's reducing non-recyclable
          waste, improving our packaging, or partnering with like-minded suppliers, we're always
          looking for ways to create a greener future for our community and the planet.
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
