<template>
  <section
    class="bg-linear-to-br from-tuscany-400 pt-50 lg:pt-30 flex flex-col items-end pb-10 via-tuscany-500 to-tuscany-600"
  >
    <div class="container gap-4 container-px text-center md:text-left relative">
      <DualLineText
        :text="title"
        level="h1"
        class="text-3xl mx-auto text-white whitespace-normal"
        outline-class="text-butterscotch-500"
      />
    </div>
    <div class="container container-px mt-4 text-center md:text-left relative">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  title: string
}

defineProps<Props>()
</script>
