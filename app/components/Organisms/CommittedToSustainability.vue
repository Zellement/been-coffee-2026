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
    <p class="text-center max-w-160 mx-auto text-lg font-krete">
      We choose brands and partners who share our
      <span class="text-butterscotch-500">commitment to sustainability</span>,
      and we're always looking for ways to reduce our environmental impact.
    </p>
    <UCarousel
      class="sm:mx-20"
      :ui="{
        item: 'basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 aspect-square',
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
          class="object-contain h-full w-full rounded-lg overflow-hidden"
        />
      </div>
    </UCarousel>
  </div>
</template>

<script lang="ts" setup>
const imagery: ImageryItem[] = [
  {
    src: "/logos/decent.webp",
    alt: "Decent Packaging logo",
  },
  {
    src: "/logos/karma.webp",
    alt: "Karma logo",
  },
  {
    src: "/logos/kokoa.jpg",
    alt: "Kokoa Collection logo",
  },
  {
    src: "/logos/onewater.svg",
    alt: "One Water logo",
  },
  {
    src: "/logos/peppersmith.png",
    alt: "Peppersmith logo",
  },
  {
    src: "/logos/beebombs.png",
    alt: "BeeBombs logo",
  },
]
</script>
