<template>
  <div class="w-full max-w-md">
    <h2 class="flex flex-col">
      <DualLineText class="text-xl" :text="`Book a table at`" level="span" />
      <DualLineText
        class="mb-4 -mt-1 text-2xl text-tuscany-500"
        :text="` ${props.location}`"
        level="span"
      />
    </h2>
    <UForm
      :class="hasFormSent"
      class="flex flex-col items-stretch gap-2"
      @submit.prevent="submitForm"
    >
      <UFormField label="Name">
        <UInput ref="name" class="w-full" placeholder="Enter your name" />
      </UFormField>
      <UFormField label="Email">
        <UInput ref="email" class="w-full" placeholder="Enter your email" />
      </UFormField>
      <UFormField label="Date &amp; time">
        <UInput ref="date" class="w-full" type="datetime-local" />
      </UFormField>
      <UFormField label="Number of people">
        <UInput ref="people" class="w-full" type="number" />
      </UFormField>
      <UFormField label="More information">
        <UTextarea ref="message" class="w-full" placeholder="Your message" />
      </UFormField>
      <UButton class="btn mt-4 self-end" type="submit">Submit</UButton>
    </UForm>
    <div v-if="sending" ref="isSending" class="my-8">
      Please wait, we are sending your reservation request...
    </div>
    <div
      v-if="success"
      ref="completeMessage"
      class="mt-8 scroll-m-8 rounded bg-green-700 px-2 py-1 text-white"
    >
      <p class="text-center">
        Thank you for your reservation request! We'll be in touch as soon as possible!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  location: string
}

const props = defineProps<Props>()

const name: Ref<string> = ref('')
const email: Ref<string> = ref('')
const date: Ref<string> = ref('')
const people: Ref<string> = ref('')
const message: Ref<string> = ref('')
const locationName: Ref<string> = ref(props.location)
const endpoint = 'https://formspree.io/f/xnnalyjq'

const sending: Ref<boolean> = ref(false)
const success: Ref<boolean> = ref(false)

const completeMessage: Ref<HTMLElement | null> = ref(null)

const hasFormSent = computed(() => {
  return success.value ? 'opacity-50 pointer-events-none' : ''
})

const submitForm = async () => {
  const data = {
    name: name.value,
    email: email.value,
    date: date.value,
    people: people.value,
    location: locationName.value,
    message: message.value,
  }
  try {
    sending.value = true
    const { data: response, error } = await useFetch(endpoint, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
    if (error.value) {
      sending.value = false
      console.error(error.value)
    } else {
      sending.value = false
      success.value = true
      nextTick(() => {
        completeMessage.value?.scrollIntoView()
      })
      console.log(response.value)
    }
  } catch (error) {
    console.error(error)
  }
}
</script>
