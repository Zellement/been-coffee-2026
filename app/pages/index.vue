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
    <div class="bg-linear-to-tl from-tuscany-400 to-tuscany-600">
      <div class="container text-white py-16 text-center">
        <DualLineText
          text="Bagels, Bacon & Brownies."
          level="h2"
          class="text-3xl block text-butterscotch-500 mb-12"
          outline-class="text-white"
        />
        <p class="max-w-160 mx-auto font-krete text-lg">
          We offer a variety of both food and drink options, including thick cut
          butcher bacon & Philadelphia bagels, award-winning sausage cobs and
          bacon cobs, paninis, handmade sausage rolls and traditional scotch
          eggs, and much, much more.
        </p>
      </div>
    </div>
  </UPage>
</template>

<script setup lang="ts">
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
