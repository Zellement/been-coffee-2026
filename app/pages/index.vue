<template>
    <UPage>
        <div class="bg-linear-to-br from-navy-500 via-navy-500 to-navy-700">
            <div class="w-full h-[105dvh] relative block-clip--left">
                <video
                    src="/hero.mp4"
                    autoplay
                    loop
                    muted
                    class="w-full fixed inset-0 h-full object-cover"
                ></video>
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
                            <UButton href="/locations/willington" color="neutral" variant="subtle">
                                Willington
                            </UButton>
                            <UButton href="/locations/long-eaton" color="neutral" variant="subtle">
                                Long Eaton
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>
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
        <div class="container text-white">
            <DualLineText
                text="Award-winning."
                level="h2"
                class="text-2xl block"
                outline-class="text-red-500"
            />
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
</script>
