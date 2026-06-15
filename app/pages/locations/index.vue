<template>
  <UPage>
    <HeroStandard title="Locations" />
    <section class="grid md:grid-cols-2 gap-4 container container-px py-4">
      <UCard v-for="(location, index) in childrenNav" :key="index" class="">
        <template #header>
          <NuxtImg
            width="500"
            height="300"
            fit="cover"
            class="w-full h-75 object-cover"
            :src="location.image"
          />
        </template>
        <div class="flex flex-col gap-2 items-start">
          <h2 class="text-2xl font-bold">{{ location.label }}</h2>
          <UBadge color="tertiary" variant="outline" :label="location.labelSuffix" />
          <p class="">{{ location.description }}</p>
          <UButtonDefault :href="location.to" class=""> View Location </UButtonDefault>
        </div>
      </UCard>
    </section>
  </UPage>
</template>

<script setup lang="ts">
import childrenNav from '~/data/locations.json'
useHead({
  title:
    'Locations | Been Coffee - Award-winning coffee shops in Willington, Derby & Long Eaton, Nottingham UK',
  meta: [
    {
      name: 'description',
      content:
        'Find your local Been Coffee shop in Willington, Derby or Long Eaton, Nottingham. Enjoy our award-winning coffee, locally sourced food and welcoming atmosphere.',
    },
  ],
})
</script>
