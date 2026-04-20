<template>
    <UPage>
        <div class="bg-linear-to-br from-navy-500 via-navy-500 to-navy-700">
            <HeroHomepage />
            <div class="container px-8 text-white">
                <p class="text-center max-w-160 mx-auto py-20 text-lg font-krete">
                    <span class="text-butterscotch-500">Award-winning</span>,
                    <span class="text-butterscotch-500">independent</span>,
                    <span class="text-butterscotch-500">environmentally-friendly</span>,
                    <span class="text-butterscotch-500">coffee-loving</span> and
                    <span class="text-butterscotch-500">dog-friendly</span>, Been Coffee serves
                    specialty coffee, loose-leaf tea, locally sourced food and more, all
                    hand-crafted in a genuinely welcoming environment.
                </p>
            </div>
        </div>
        <div class="container">
            <DualLineText
                text="Award-winning."
                level="h2"
                class="text-2xl block"
                outline-class="text-red-500"
            />

            <div class="grid md:grid-cols-2 xl:grid-cols-4">
                <div
                    v-for="(award, index) in awards"
                    :key="index"
                    class="flex flex-col items-center gap-4 p-4"
                >
                    <img :src="award.logoUrl" alt="Award Logo" class="w-32 h-auto" />
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
    </UPage>
</template>

<script setup lang="ts">
useHead({
    title: 'Been Coffee - Award-winning coffee shops | Willington, Derby & Long Eaton, Nottingham',
    meta: [
        {
            name: 'description',
            content:
                'Been Coffee is an independent, award-winning coffee shop with amazing coffee, tea, bubble tea, boba tea, cakes, bagels, cobs & paninis in Willington, Derby & Long Eaton, Nottingham UK.'
        }
    ]
})

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

const awards: Award[] = [
    {
        logoUrl: '/logos/luxlife.png',
        details: [
            {
                year: '2026',
                details: [
                    { title: 'Best Indy Coffee Shop Derbyshire' },
                    { title: 'Sustainability Excellence Award' }
                ]
            },
            {
                year: '2025',
                details: [
                    { title: 'Derby Coffee Shop of the Year' },
                    { title: 'Best Independent Coffee Shop Derbyshire' }
                ]
            }
        ]
    },
    {
        logoUrl: '/logos/good-food.jpg',
        details: [
            {
                year: '2025',
                details: [{ title: 'Gold Seal' }]
            },
            {
                year: '2024',
                details: [
                    { title: 'Gold Seal' },
                    { title: 'Customer Service Excellence Award' },
                    { title: 'Artisan Coffee Shop of the Year' },
                    { title: 'Best Indy Coffee Shop Derby' },
                    { title: 'Best Local Coffee Shop Derbyshire' }
                ]
            },
            {
                year: '2023',
                details: [
                    { title: 'Blue Ribbon' },
                    { title: 'Best Cafe in Derby' },
                    { title: 'Best Indy Coffee Shop' }
                ]
            }
        ]
    }
]
</script>
