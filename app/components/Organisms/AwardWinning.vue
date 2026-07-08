<template>
  <div class="grid grid-cols-1 xl:grid-cols-2">
    <div class="relative col-span-1 col-start-1 flex h-full xl:row-start-1">
      <div class="absolute inset-0">
        <NuxtImg
          src="/media/home/awards.jpeg"
          alt="Award Winning Coffee"
          class="block h-full w-full overflow-hidden object-cover"
          width="1000"
          height="1000"
          fit="cover"
        />
      </div>
    </div>
    <div
      class="container mx-auto flex w-full py-16 text-center xl:col-span-full xl:row-start-1 xl:grid xl:grid-cols-2"
    >
      <div class="@container w-full xl:col-start-2">
        <DualLineText
          text="Award-winning."
          level="h2"
          class="text-tuscany-500 mb-12 block text-3xl"
          outline-class="after:text-navy-500"
        />

        <div class="flex flex-col lg:grid @sm:grid-cols-2">
          <div
            v-for="(column, colIndex) in awardColumns"
            :key="colIndex"
            class="flex flex-col items-center gap-8 p-4"
          >
            <div
              v-for="(award, awardIndex) in column.awards"
              :key="awardIndex"
              class="flex w-full flex-col items-center gap-4"
            >
              <img :src="award.logoUrl" alt="Award Logo" class="h-auto w-28" >
              <div class="font-krete text-center text-sm">
                <div v-for="(yearGroup, yi) in award.details" :key="yi" class="mb-2">
                  <UBadge :label="yearGroup.year" class="mb-1" color="tertiary" />
                  <ul class="flex flex-col gap-1">
                    <li v-for="(detail, di) in yearGroup.details" :key="di">
                      <UBadge
                        :label="detail.title"
                        variant="outline"
                        :ui="{
                          base: '',
                          label: 'whitespace-break-spaces',
                        }"
                      />
                    </li>
                  </ul>
                </div>
              </div>
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
        logoUrl: '/media/logos/luxlife.png',
        details: [
          {
            year: '2026',
            details: [
              { title: 'Best Independent Coffee Shop' },
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
        logoUrl: '/media/logos/good-food.jpg',
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
        logoUrl: '/media/logos/business-concept.png',
        details: [
          {
            year: '2024',
            details: [{ title: 'Best Independent Coffee Shop Derby' }],
          },
        ],
      },
      {
        logoUrl: '/media/logos/rg.png',
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
