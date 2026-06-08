<template>
  <div class="container py-16 text-center">
    <DualLineText
      text="Award-winning."
      level="h2"
      class="text-3xl block text-tuscany-500 mb-12"
      outline-class="text-navy-500 "
    />

    <div class="flex flex-col lg:grid lg:grid-cols-3">
      <div
        v-for="(column, colIndex) in awardColumns"
        :key="colIndex"
        class="flex flex-col items-center gap-8 p-4"
      >
        <div
          v-for="(award, awardIndex) in column.awards"
          :key="awardIndex"
          class="flex flex-col items-center gap-4 w-full"
        >
          <img :src="award.logoUrl" alt="Award Logo" class="w-28 h-auto" />
          <div class="text-center text-sm font-krete">
            <div v-for="(yearGroup, yi) in award.details" :key="yi" class="mb-2">
              <p class="font-bold">{{ yearGroup.year }}</p>
              <p v-for="(detail, di) in yearGroup.details" :key="di">
                {{ detail.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface AwardDetail {
  title: string
}

interface AwardYear {
  year: string
  details: AwardDetail[]
}

interface Award {
  logoUrl: string
  details: AwardYear[]
}

interface AwardColumn {
  awards: Award[]
}

const awardColumns: AwardColumn[] = [
  {
    awards: [
      {
        logoUrl: '/logos/luxlife.png',
        details: [
          {
            year: '2026',
            details: [
              { title: 'Best Independent Coffee Shop 2026' },
              { title: 'Sustainability Excellence Award' },
            ],
          },
          {
            year: '2025',
            details: [
              { title: 'Derby Coffee Shop of the Year' },
              { title: 'Best Independent Coffee Shop Derbyshire' },
            ],
          },
        ],
      },
    ],
  },
  {
    awards: [
      {
        logoUrl: '/logos/good-food.jpg',
        details: [
          {
            year: '2025',
            details: [{ title: 'Good Food Award Gold Seal' }],
          },
          {
            year: '2024',
            details: [{ title: 'Good Food Award Winner' }],
          },
          {
            year: '2023',
            details: [{ title: 'Good Food Award Winner' }],
          },
          {
            year: '2022',
            details: [{ title: 'Good Food Award Blue Ribbon' }],
          },
        ],
      },
    ],
  },
  {
    awards: [
      {
        logoUrl: '/logos/business-concept.png',
        details: [
          {
            year: '2024',
            details: [{ title: 'Best Independent Coffee Shop Derby' }],
          },
        ],
      },
      {
        logoUrl: '/logos/rg.png',
        details: [
          {
            year: '2023',
            details: [{ title: 'Best Cafe in Derby' }],
          },
        ],
      },
    ],
  },
]
</script>
