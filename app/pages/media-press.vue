<template>
  <UPage>
    <HeroStandard title="Media & Press" />
    <div class="container container-px py-12">
      <div class="prose mb-8">
        <p>
          For media inquiries, press releases, or to request high-resolution images/logos and
          interviews, please use the form below. We are happy to provide information about our
          company, products, and initiatives to journalists and media outlets.
        </p>
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
