<template>
  <div class="flex w-full py-4">
    <footer role="contentinfo" class="flex container container-px w-full justify-between">
      <div class="flex flex-col">
        <div class="flex items-center justify-start gap-2">
          <div class="h-10">
            <SiteBrand icon-classes="size-10" />
          </div>
          <p class="flex flex-row gap-1 text-xs items-center">
            <span>&copy;</span> Been Coffee House Ltd <span>{{ date }}</span>
          </p>
        </div>
        <ul class="mt-4 text-xs flex gap-4">
          <li><ULink to="/media-press">Media & Press</ULink></li>
          <li><ULink to="/privacy-policy">Privacy Policy</ULink></li>
          <li><ULink to="/contact">Contact</ULink></li>
        </ul>
      </div>
      <div class="flex">
        <ul class="flex flex-row gap-2 items-center justify-end">
          <li v-for="link in socialLinks" :key="link.name">
            <a
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-navy-500 hover:text-tuscany-700 transition-colors duration-300"
            >
              <u-icon :name="link.icon" class="size-5" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const date: ComputedRef<number> = computed(() => {
  return new Date().getFullYear()
})

const socialLinks = [
  {
    name: 'Linktree',
    href: 'https://linktr.ee/beencoffeeuk',
    icon: 'i-tabler-brand-linktree',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/beencoffeeuk',
    icon: 'i-ri-facebook-fill',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/beencoffeeuk/',
    icon: 'i-ri-instagram-fill',
  },
]
</script>
