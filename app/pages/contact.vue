<template>
  <UPage>
    <HeroStandard title="Contact" />
    <div class="container container-px py-12">
      <div class="prose mb-8">
        <p>If you would like to get in touch with us, please fill in the form below and we'll get back to you as soon as possible.</p>
      </div>
      <FormContact />
    </div>
  </UPage>
</template>

<script setup lang="ts">
useHead({
  title: 'Privacy Policy - Been Coffee',
  meta: [
    {
      name: 'description',
      content:
        "Read Been Coffee's Privacy Policy to understand how we handle your personal information and ensure your data is protected.",
    },
  ],
})
</script>
