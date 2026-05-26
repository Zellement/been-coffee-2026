<template>
  <UPage>
    <div class="bg-linear-to-br from-navy-400 via-navy-500 to-navy-700">
      <HeroHomepage />
      <div class="container px-8 text-white">
        <p class="text-center max-w-160 mx-auto py-20 text-lg font-krete">
          <span class="text-butterscotch-500">Award-winning</span>,
          <span class="text-butterscotch-500">independent</span>,
          <span class="text-butterscotch-500">environmentally-friendly</span>,
          <span class="text-butterscotch-500">coffee-loving</span> and
          <span class="text-butterscotch-500">dog-friendly</span>, Been Coffee
          serves specialty coffee, loose-leaf tea, locally sourced food and
          more, all hand-crafted in a genuinely welcoming environment.
        </p>
      </div>
    </div>
    <div class="bg-linear-to-tl from-seashell-50 to-seashell-600">
      <div class="container py-16 text-center">
        <AwardWinning />
      </div>
    </div>
    <IndexGallery />

    <div class="bg-linear-to-br from-seashell-50 to-seashell-600">
      <div class="container px-8 text-navy flex gap-12 flex-col py-20">
        <ul class="flex flex-wrap gap-2 items-center justify-center w-full">
          <u-badge icon="i-healthicons-gluten-free" size="xl" color="tertiary"
            >Low-gluten options</u-badge
          >
          <u-badge icon="i-iconoir-vegan-circle" size="xl" color="tertiary"
            >Vegan friendly</u-badge
          >
        </ul>
        <p class="text-center max-w-160 mx-auto text-lg font-krete">
          We've spent countless hours searching for excellent
          <span class="text-tuscany-500">vegan</span> and
          <span class="text-tuscany-500">low-gluten</span> options so that you
          don't have to.
        </p>
        <p class="text-center max-w-160 mx-auto text-lg font-krete">
          We offer low-gluten bagel alternatives, paninis and and many of our
          cakes are either vegan and/or low-gluten.
        </p>
      </div>
    </div>
  </UPage>
</template>

<script setup lang="ts">
import { IndexKind } from "typescript"

useHead({
  title:
    "Been Coffee - Award-winning coffee shops | Willington, Derby & Long Eaton, Nottingham",
  meta: [
    {
      name: "description",
      content:
        "Been Coffee is an independent, award-winning coffee shop with amazing coffee, tea, bubble tea, boba tea, cakes, bagels, cobs & paninis in Willington, Derby & Long Eaton, Nottingham UK.",
    },
  ],
})
</script>
