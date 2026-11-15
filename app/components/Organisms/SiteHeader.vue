<template>
  <header
    role="banner"
    class="pointer-events-none fixed top-0 right-0 left-0 z-50 w-full py-4 transition-transform duration-500"
  >
    <div class="container-px grid-layout container">
      <div
        class="relative col-span-full row-start-1 flex flex-col items-center justify-between gap-2 md:flex-row"
      >
        <SiteBrand />
        <SiteNav class="justify-center md:justify-end" />
        <!-- <ButtonMenu /> -->
      </div>
    </div>
  </header>
  <!-- <div
        class="fixed z-10 top-0 left-0 border-t-150 border-r-150 border-t-tuscany-500 border-r-transparent"
    ></div> -->
</template>

<script setup lang="ts"></script>
