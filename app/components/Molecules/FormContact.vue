<template>
  <div class="w-full max-w-md">
    <UForm
      :validate="validate"
      :state="state"
      :class="hasFormSent"
      class="flex flex-col items-stretch gap-2"
      @submit="submitForm"
    >
      <UFormField label="Name" name="name">
        <UInput v-model="state.name" class="w-full" placeholder="Enter your name" />
      </UFormField>
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" class="w-full" placeholder="Enter your email" type="email" />
      </UFormField>
      <UFormField label="Message" name="message">
        <UTextarea v-model="state.message" class="w-full" placeholder="Your message" />
      </UFormField>
      <UButton class="btn mt-4 self-end" type="submit" :loading="sending">Send message</UButton>
    </UForm>
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
import type { FormError } from '@nuxt/ui'

const endpoint = 'https://formspree.io/f/xvgpyppg'

const state = reactive({ name: '', email: '', message: '' })
const sending: Ref<boolean> = ref(false)
const success: Ref<boolean> = ref(false)
const completeMessage: Ref<HTMLElement | null> = ref(null)

const hasFormSent = computed(() => (success.value ? 'opacity-50 pointer-events-none' : ''))

const validate = (s: typeof state): FormError[] => {
  const errors: FormError[] = []
  if (!s.name.trim()) errors.push({ name: 'name', message: 'Name is required' })
  if (!s.email.trim()) errors.push({ name: 'email', message: 'Email is required' })
  else if (!/^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(s.email))
    errors.push({ name: 'email', message: 'Please enter a valid email address' })
  if (!s.message.trim()) errors.push({ name: 'message', message: 'Message is required' })
  return errors
}

const submitForm = async () => {
  try {
    sending.value = true
    const { error } = await useFetch(endpoint, {
      method: 'POST',
      body: state,
      headers: { Accept: 'application/json' },
    })
    sending.value = false
    if (error.value) {
      console.error(error.value)
    } else {
      success.value = true
      nextTick(() => completeMessage.value?.scrollIntoView())
    }
  } catch (err) {
    sending.value = false
    console.error(err)
  }
}
</script>
