<template>
  <div class="w-full max-w-md">
    <h2 class="flex flex-col">
      <DualLineText class="text-xl" :text="`Book a table at`" level="span" />
      <DualLineText
        class="text-tuscany-500 -mt-1 mb-4 text-2xl"
        :text="` ${props.location}`"
        level="span"
      />
    </h2>
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
      <UFormField label="Date &amp; time" name="date">
        <UInput v-model="state.date" class="w-full" type="datetime-local" />
      </UFormField>
      <UFormField label="Number of people" name="people">
        <UInput v-model="state.people" class="w-full" type="number" min="1" />
      </UFormField>
      <UFormField label="More information" name="message">
        <UTextarea v-model="state.message" class="w-full" placeholder="Your message" />
      </UFormField>
      <p class="mt-4 text-sm">
        By submitting this form, you agree to our
        <a href="/privacy-policy" class="text-tuscany-500 underline">privacy policy</a> and to be
        contacted by Been Coffee regarding your reservation.
      </p>
      <UButton class="btn mt-4 self-end" type="submit" :loading="sending">Submit</UButton>
    </UForm>
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
import type { FormError } from '@nuxt/ui'

interface Props {
  location: string
}

const props = defineProps<Props>()

const endpoint = 'https://formspree.io/f/xnnalyjq'

const state = reactive({ name: '', email: '', date: '', people: '', message: '' })
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
  if (!s.date) errors.push({ name: 'date', message: 'Please select a date and time' })
  if (!s.people || Number(s.people) < 1)
    errors.push({ name: 'people', message: 'Please enter the number of people' })
  return errors
}

const submitForm = async () => {
  try {
    sending.value = true
    const { error } = await useFetch(endpoint, {
      method: 'POST',
      body: { ...state, location: props.location },
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
