<template>
  <div class="flex h-full w-full flex-col">
    <h2 class="flex flex-col">
      <DualLineText class="text-xl" text="Get" level="span" />
      <DualLineText class="text-tuscany-500 -mt-1 mb-4 text-2xl" text="Directions" level="span" />
    </h2>
    <UButtonDefault
      :href="directionsUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="mb-6 self-start"
    >
      Open in Google Maps
    </UButtonDefault>
    <div class="flex h-full w-full overflow-hidden rounded-lg">
      <iframe
        :src="embedUrl"
        class="h-full w-full border-0 object-cover"
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
