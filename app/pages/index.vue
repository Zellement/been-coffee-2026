<template>
  <UPage>
    <HeroHomepage />
    <section class="bg-linear-to-br from-navy-400 -mt-40 pt-40 via-navy-500 to-navy-700">
      <div class="container px-8 text-white">
        <p class="text-center max-w-160 mx-auto py-20 text-lg font-krete">
          <span class="text-butterscotch-500">Award-winning</span>,
          <span class="text-butterscotch-500">independent</span>,
          <span class="text-butterscotch-500">environmentally-friendly</span>,
          <span class="text-butterscotch-500">coffee-loving</span> and
          <span class="text-butterscotch-500">dog-friendly</span>, Been Coffee serves specialty
          coffee, loose-leaf tea, locally sourced food and more, all hand-crafted in a genuinely
          welcoming environment.
        </p>
      </div>
    </section>
    <section class="bg-linear-to-tl from-seashell-50 to-seashell-600">
      <AwardWinning />
    </section>

    <section class="bg-linear-to-tl from-tuscany-400 to-tuscany-600">
      <IndexGallery />
    </section>

    <section class="from-seashell-50 to-seashell-600">
      <VeganLowGluten />
    </section>

    <section class="bg-linear-to-br from-tuscany-500 to-tuscany-600">
      <CommittedToSustainability />
    </section>

    <section class="">
      <SocialFeed />
    </section>
  </UPage>
</template>

<script setup lang="ts">
const title =
  'Been Coffee - Award-winning coffee shops | Willington, Derby & Long Eaton, Nottingham'
const description =
  'Been Coffee is an independent, award-winning coffee shop with amazing coffee, tea, bubble tea, boba tea, cakes, bagels, cobs & paninis in Willington, Derby & Long Eaton, Nottingham UK.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})
</script>
