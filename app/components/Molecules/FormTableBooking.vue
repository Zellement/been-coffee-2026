<template>
  <div class="w-full max-w-md">
    <h2 class="flex flex-col">
      <DualLineText class="text-xl" :text="`Book a table at`" level="span" />
      <DualLineText
        class="text-tuscany-500 -mt-1 mb-4 text-2xl"
        :text="` ${locationName}`"
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
      <UFormField label="Name *" name="name">
        <UInput
          v-model="state.name"
          class="w-full"
          placeholder="Enter your name"
          autocomplete="name"
        />
      </UFormField>
      <UFormField label="Email *" name="email">
        <UInput
          v-model="state.email"
          class="w-full"
          placeholder="Enter your email"
          type="email"
          autocomplete="email"
        />
      </UFormField>
      <UFormField label="Phone" name="phone">
        <UInput
          v-model="state.phone"
          class="w-full"
          placeholder="Optional"
          type="tel"
          autocomplete="tel"
        />
      </UFormField>
      <UFormField label="Date &amp; time *" name="dateTime">
        <UInput v-model="state.dateTime" class="w-full" type="datetime-local" :min="minDateTime" />
      </UFormField>
      <UFormField label="Number of people *" name="people">
        <UInput
          v-model="state.people"
          class="w-full"
          type="number"
          :min="bookingLimits.minPeople"
          :max="bookingLimits.maxPeople"
        />
      </UFormField>
      <UFormField label="More information" name="details">
        <UTextarea
          v-model="state.details"
          class="w-full"
          placeholder="Anything we should know? e.g. high chair, birthday, accessibility"
          :maxlength="bookingLimits.maxDetailsLength"
        />
      </UFormField>

      <!-- Honeypot: hidden from people and screen readers; bots tend to fill it in -->
      <div class="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label :for="honeypotId">Website</label>
        <UInput :id="honeypotId" v-model="state.website" tabindex="-1" autocomplete="off" />
      </div>

      <TurnstileWidget ref="turnstile" v-model="state.turnstileToken" class="mt-2" />

      <p class="mt-4 text-sm">
        By submitting this form, you agree to our
        <a href="/privacy-policy" class="text-tuscany-500 underline">privacy policy</a> and to be
        contacted by Been Coffee regarding your reservation.
      </p>
      <UButton class="btn mt-4 self-end" type="submit" :loading="sending">Book table</UButton>
    </UForm>
    <div
      v-if="errorMessage"
      role="alert"
      class="mt-8 rounded bg-red-700 px-2 py-1 text-center text-white"
    >
      {{ errorMessage }}
    </div>
    <div
      v-if="success"
      ref="completeMessage"
      class="mt-8 scroll-m-10 rounded bg-green-700 px-4 py-3 text-white"
    >
      <p class="text-center">
        Thank you, your table is booked! We've sent a confirmation to your email.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormError } from '@nuxt/ui'

interface Props {
  location: BookingLocationKey
}

interface BookingFormState {
  name: string
  email: string
  phone: string
  dateTime: string
  people: string
  details: string
  website: string
  turnstileToken: string
}

interface TurnstileWidgetInstance {
  reset: () => void
}

const props = defineProps<Props>()

const honeypotId = useId()
const locationName = computed((): string => bookingLocations[props.location].name)

const state: BookingFormState = reactive({
  name: '',
  email: '',
  phone: '',
  dateTime: '',
  people: '',
  details: '',
  website: '',
  turnstileToken: '',
})
const sending: Ref<boolean> = ref(false)
const success: Ref<boolean> = ref(false)
const errorMessage: Ref<string> = ref('')
const completeMessage: Ref<HTMLElement | null> = ref(null)
const turnstile: Ref<TurnstileWidgetInstance | null> = ref(null)

const hasFormSent = computed((): string => (success.value ? 'opacity-50 pointer-events-none' : ''))

// Local "YYYY-MM-DDTHH:mm" for now, so the picker can't go into the past
const minDateTime = computed((): string => {
  const now = new Date()
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
  return now.toISOString().slice(0, 16)
})

const validate = (s: BookingFormState): FormError[] => {
  const errors: FormError[] = []
  const people = Number(s.people)
  if (!s.name.trim()) errors.push({ name: 'name', message: 'Name is required' })
  if (!s.email.trim()) errors.push({ name: 'email', message: 'Email is required' })
  else if (!emailPattern.test(s.email.trim()))
    errors.push({ name: 'email', message: 'Please enter a valid email address' })
  if (s.phone.trim() && !/^[\d\s()+-]+$/.test(s.phone.trim()))
    errors.push({ name: 'phone', message: 'Please enter a valid phone number' })
  if (!s.dateTime) errors.push({ name: 'dateTime', message: 'Please select a date and time' })
  else if (s.dateTime < minDateTime.value)
    errors.push({ name: 'dateTime', message: 'Please choose a date and time in the future' })
  if (!Number.isInteger(people) || people < bookingLimits.minPeople)
    errors.push({ name: 'people', message: 'Please enter the number of people' })
  else if (people > bookingLimits.maxPeople)
    errors.push({
      name: 'people',
      message: `For groups over ${bookingLimits.maxPeople}, please contact us directly`,
    })
  return errors
}

const submitForm = async (): Promise<void> => {
  errorMessage.value = ''
  if (!state.turnstileToken) {
    errorMessage.value = 'Please wait for the spam check to finish, then try again.'
    return
  }

  sending.value = true
  try {
    const payload: TableBookingPayload = {
      ...state,
      people: Number(state.people),
      location: props.location,
    }
    await $fetch('/api/table-booking', { method: 'POST', body: payload })
    success.value = true
    nextTick((): void => completeMessage.value?.scrollIntoView())
  } catch (error: unknown) {
    const message = error as { statusMessage?: string; data?: { statusMessage?: string } }
    errorMessage.value =
      message.data?.statusMessage ||
      message.statusMessage ||
      'Sorry, something went wrong. Please try again or give us a call.'
    turnstile.value?.reset()
  } finally {
    sending.value = false
  }
}
</script>
