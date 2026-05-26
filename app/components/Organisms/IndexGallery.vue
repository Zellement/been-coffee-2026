<template>
  <div class="container text-white py-16 text-center">
    <DualLineText
      text="Bagels, Bacon & Brownies."
      level="h2"
      class="text-3xl block text-butterscotch-500 mb-12"
      outline-class="text-white"
    />
    <p class="max-w-160 mx-auto font-krete text-lg">
      We offer a variety of both food and drink options, including
      <span class="text-butterscotch-500"
        >thick cut butcher bacon & Philadelphia bagels</span
      >,
      <span class="text-butterscotch-500"
        >award-winning sausage cobs and bacon cobs</span
      >, <span class="text-butterscotch-500">paninis</span>,
      <span class="text-butterscotch-500">handmade sausage rolls</span> and
      <span class="text-butterscotch-500">traditional scotch eggs</span>, and
      much, much more.
    </p>
    <u-carousel
      class="mt-20 mx-20"
      :ui="{
        item: 'basis-full md:basis-1/2 xl:basis-1/3 aspect-square',
      }"
      arrows
      loop
      dots
      v-slot="{ item }"
      :items="imagery"
    >
      <nuxt-img
        :src="item.src"
        :alt="item.alt"
        class="object-cover h-full w-full rounded-lg overflow-hidden"
      />
    </u-carousel>
    <u-button class="mt-20" color="secondary" to="/gallery">
      View More Photos
    </u-button>
  </div>
</template>

<script lang="ts" setup>
const imagery: ImageryItem[] = [
  {
    src: "/index-gallery/1.jpg",
    alt: "Salmon bagel",
  },
  {
    src: "/index-gallery/2.jpg",
    alt: "Mozzarella panini",
  },
  {
    src: "/index-gallery/3.jpg",
    alt: "Mozzarella panini with pesto",
  },
  {
    src: "/index-gallery/4.jpg",
    alt: "Pizza bagel with pepperoni",
  },
  {
    src: "/index-gallery/5.jpg",
    alt: "Bacon and Philly bagel",
  },
  {
    src: "/index-gallery/6.jpg",
    alt: "The Monster",
  },
  {
    src: "/index-gallery/7.jpg",
    alt: "Margherita pizza bagel",
  },
]
</script>
