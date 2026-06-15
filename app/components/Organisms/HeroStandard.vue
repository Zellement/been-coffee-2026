<template>
  <section
    class="from-tuscany-400 via-tuscany-500 to-tuscany-600 flex flex-col items-end bg-linear-to-br pt-50 pb-10 lg:pt-30"
  >
    <h1
      class="container-px relative container flex flex-col justify-start text-center md:text-left"
    >
      <DualLineText
        v-if="titleBrow"
        :text="titleBrow"
        level="span"
        class="-mb-2 text-xl whitespace-normal text-white"
        outline-class="text-butterscotch-500"
      />
      <DualLineText
        :text="title"
        level="span"
        class="text-3xl whitespace-normal text-white"
        outline-class="text-butterscotch-500"
      />
    </h1>
    <div class="container-px relative container mt-4 text-center md:text-left">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  titleBrow?: string
  title: string
}

defineProps<Props>()
</script>
