<template>
  <UPage>
    <HeroStandard title="Media & Press" />
    <div class="container-px container py-12">
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
  title: 'Media & Press - Been Coffee',
  meta: [
    {
      name: 'description',
      content:
        'For media inquiries, press releases, or to request high-resolution images/logos and interviews, please use the form below. We are happy to provide information about our company, products, and initiatives to journalists and media outlets.',
    },
  ],
})
</script>
