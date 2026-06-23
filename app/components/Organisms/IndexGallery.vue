<template>
  <div class="container text-white py-16 text-center container-px">
    <h2 class="flex flex-col mb-12">
      <DualLineText
        text="Bagels,"
        level="span"
        class="text-3xl text-butterscotch-500 mx-auto"
        outline-class="after:text-white"
      />
      <DualLineText
        text="Bacon & Brownies."
        level="span"
        class="text-3xl text-butterscotch-500 mx-auto"
        outline-class="after:text-white"
      />
    </h2>
    <p class="max-w-160 mx-auto font-krete text-lg">
      We offer a variety of both food and drink options, including
      <span class="text-butterscotch-500">thick cut butcher bacon & Philadelphia bagels</span>,
      <span class="text-butterscotch-500">award-winning sausage cobs and bacon cobs</span>,
      <span class="text-butterscotch-500">paninis</span>,
      <span class="text-butterscotch-500">handmade sausage rolls</span> and
      <span class="text-butterscotch-500">traditional scotch eggs</span>, and much, much more.
    </p>
    <UCarousel
      v-slot="{ item }"
      class="mt-20 mx-20"
      :ui="{
        item: 'basis-full md:basis-1/2 xl:basis-1/3 aspect-square',
      }"
      arrows
      loop
      dots
      :items="imagery"
    >
      <nuxt-img
        :src="item.src"
        :alt="item.alt"
        class="object-cover h-full w-full rounded-lg overflow-hidden"
      />
    </UCarousel>
    <UButtonDefault class="mt-20" color="secondary" to="/gallery">
      View More Photos
    </UButtonDefault>
  </div>
</template>

<script lang="ts" setup>
const imagery: ImageryItem[] = [
  {
    src: '/media/home/gallery/1.jpg',
    alt: 'Salmon bagel',
  },
  {
    src: '/media/home/gallery/2.jpg',
    alt: 'Mozzarella panini',
  },
  {
    src: '/media/home/gallery/3.jpg',
    alt: 'Mozzarella panini with pesto',
  },
  {
    src: '/media/home/gallery/4.jpg',
    alt: 'Pizza bagel with pepperoni',
  },
  {
    src: '/media/home/gallery/5.jpg',
    alt: 'Bacon and Philly bagel',
  },
  {
    src: '/media/home/gallery/6.jpg',
    alt: 'The Monster',
  },
  {
    src: '/media/home/gallery/7.jpg',
    alt: 'Margherita pizza bagel',
  },
]
</script>
