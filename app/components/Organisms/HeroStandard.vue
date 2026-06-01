<template>
  <section
    class="bg-linear-to-br from-navy-400 pt-50 flex items-end pb-10 via-navy-500 to-navy-700"
  >
    <div class="container container-px text-center md:text-left relative">
      <DualLineText
        :text="title"
        level="h1"
        class="text-3xl mx-auto text-white whitespace-normal"
        outline-class="text-butterscotch-500"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  title: string
}

defineProps<Props>()
</script>
