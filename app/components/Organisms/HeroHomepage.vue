<template>
  <section role="banner" class="w-full h-[105dvh] relative block-clip--left">
    <video
      src="/media/home/hero/hero-mob.mp4"
      autoplay
      loop
      muted
      class="w-full xl:hidden fixed inset-0 h-full object-cover"
      poster="/media/home/hero/hero-poster.jpg"
    />
    <video
      src="/media/home/hero/hero.mp4"
      autoplay
      loop
      muted
      class="w-full hidden xl:block fixed inset-0 h-full object-cover"
      poster="/media/home/hero/hero-poster.jpg"
    />
    <div
      class="absolute inset-0 flex flex-col items-start justify-end p-4 bg-opacity-50 text-white pb-[calc(5dvh+2rem)]"
    >
      <div class="container container-px flex flex-col">
        <DualLineText
          text="Been Coffee"
          level="h1"
          class="text-5xl lg:text-4xl"
          outline-class="text-butterscotch-500"
        />
        <div class="flex flex-col sm:flex-row sm:gap-2">
          <DualLineText
            text="Award Winning."
            level="h2"
            class="text-2xl"
            outline-class="text-butterscotch-500"
          />
          <DualLineText
            text="Independent."
            level="h2"
            class="text-2xl"
            outline-class="text-butterscotch-500"
          />
        </div>
        <p class="text-lg mt-4 font-krete">And now in two locations.</p>
        <div class="flex gap-2 mt-4">
          <UButtonDefault href="/locations/willington" color="neutral" variant="subtle">
            Willington
          </UButtonDefault>
          <UButtonDefault href="/locations/long-eaton" color="neutral" variant="subtle">
            Long Eaton
          </UButtonDefault>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
