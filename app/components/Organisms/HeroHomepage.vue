<template>
  <section role="banner" class="block-clip--left relative h-[105dvh] w-full">
    <video
      src="/media/home/hero/hero-mob.mp4"
      autoplay
      loop
      muted
      class="fixed inset-0 h-full w-full object-cover xl:hidden"
      poster="/media/home/hero/hero-poster.jpg"
    />
    <video
      src="/media/home/hero/hero.mp4"
      autoplay
      loop
      muted
      class="fixed inset-0 hidden h-full w-full object-cover xl:block"
      poster="/media/home/hero/hero-poster.jpg"
    />
    <div
      class="bg-opacity-50 absolute inset-0 flex flex-col items-start justify-end p-4 pb-[calc(5dvh+2rem)] text-white"
    >
      <div class="container-px container flex flex-col">
        <DualLineText
          text="Been Coffee"
          level="h1"
          class="text-5xl"
          outline-class="after:text-butterscotch-500"
        />
        <div class="flex flex-col sm:flex-row sm:gap-2">
          <DualLineText
            text="Award Winning."
            level="h2"
            class="text-2xl xl:text-3xl"
            outline-class="after:text-butterscotch-500"
          />
          <DualLineText
            text="Independent."
            level="h2"
            class="text-2xl xl:text-3xl"
            outline-class="after:text-butterscotch-500"
          />
        </div>
        <p class="font-krete mt-4 text-lg">And soon in two locations.</p>
        <div class="mt-4 flex gap-2">
          <UButtonDefault href="/locations/willington" color="neutral" variant="subtle">
            Willington
          </UButtonDefault>
          <UButtonDefault href="/locations/long-eaton" color="neutral" variant="subtle">
            Long Eaton <UBadge variant="outline">Opening Soon</UBadge>
          </UButtonDefault>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
