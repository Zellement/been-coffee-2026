<template>
  <UPage>
    <HeroStandard title="Contact" />
    <div class="container container-px py-12">
      <div class="prose">
        <p>
          If you would like to get in touch with us, please feel free to reach out via email at
          <a href="mailto:hello@been.coffee">hello@been.coffee</a>.
        </p>
      </div>
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
