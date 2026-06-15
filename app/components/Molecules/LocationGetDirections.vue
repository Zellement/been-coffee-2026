<template>
  <div class="w-full flex flex-col h-full">
    <h2 class="flex flex-col">
      <DualLineText class="text-xl" text="Get" level="span" />
      <DualLineText class="mb-4 -mt-1 text-2xl text-tuscany-500" text="Directions" level="span" />
    </h2>
    <UButtonDefault
      :href="directionsUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="mb-6 self-start"
    >
      Open in Google Maps
    </UButtonDefault>
    <div class="w-full rounded-lg h-full overflow-hidden flex">
      <iframe
        :src="embedUrl"
        class="w-full h-full border-0 object-cover"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        :title="`Map showing ${label}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  postcode: string
  label: string
}

const props = defineProps<Props>()

const encodedPostcode = computed((): string => encodeURIComponent(props.postcode))

const directionsUrl = computed(
  (): string => `https://www.google.com/maps/dir/?api=1&destination=${encodedPostcode.value}`
)

const embedUrl = computed(
  (): string => `https://maps.google.com/maps?q=${encodedPostcode.value}&output=embed`
)
</script>
