<template>
  <UButton trailing icon="ic:outline-keyboard-arrow-right" v-bind="$attrs">
    <slot />
  </UButton>
</template>

<script lang="ts" setup>
defineOptions({ inheritAttrs: false })
</script>
