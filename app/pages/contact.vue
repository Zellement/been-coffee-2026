<template>
  <UPage>
    <HeroStandard title="Contact" />
    <div class="container-px container py-12">
      <div class="prose mb-8">
        <p>
          If you would like to get in touch with us, please fill in the form below and we'll get
          back to you as soon as possible.
        </p>
      </div>
      <FormContact />
    </div>
  </UPage>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact - Been Coffee',
  meta: [
    {
      name: 'description',
      content:
        "Get in touch with Been Coffee. Fill in the contact form and we'll respond as soon as possible.",
    },
  ],
})
</script>
