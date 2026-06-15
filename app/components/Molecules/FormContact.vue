<template>
  <div class="w-full max-w-md">
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
      <UFormField label="Message">
        <UTextarea ref="message" class="w-full" placeholder="Your message" />
      </UFormField>
      <UButton class="btn mt-4 self-end" type="submit">Send message</UButton>
    </UForm>
    <div v-if="sending" class="my-8">Please wait, we are sending your message...</div>
    <div
      v-if="success"
      ref="completeMessage"
      class="mt-8 scroll-m-8 rounded bg-green-700 px-2 py-1 text-white"
    >
      <p class="text-center">Thank you for your message! We'll be in touch as soon as possible!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const name: Ref<string> = ref('')
const email: Ref<string> = ref('')
const message: Ref<string> = ref('')
const endpoint = 'https://formspree.io/f/xvgpyppg'

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
    message: message.value,
  }
  try {
    sending.value = true
    const { error } = await useFetch(endpoint, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
    sending.value = false
    if (error.value) {
      console.error(error.value)
    } else {
      success.value = true
      nextTick(() => {
        completeMessage.value?.scrollIntoView()
      })
    }
  } catch (err) {
    sending.value = false
    console.error(err)
  }
}
</script>
