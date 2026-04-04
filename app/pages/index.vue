<template>
    <UPage>
        <div class="w-full h-screen relative">
            <video src="/hero.mp4" autoplay loop muted class="w-full h-full object-cover"></video>
            <div
                class="absolute inset-0 flex flex-col items-start justify-end p-4 bg-opacity-50 text-white"
            >
                <DualLineText
                    text="Been Coffee"
                    level="h1"
                    class="text-4xl"
                    outline-class="text-butterscotch-500"
                />
                <DualLineText
                    text="Award Winning. Independent."
                    level="h2"
                    class="text-2xl"
                    outline-class="text-butterscotch-500"
                />
                <p class="text-lg mt-4 font-krete">And now in two locations.</p>
            </div>
        </div>
    </UPage>
</template>

<script setup lang="ts"></script>
