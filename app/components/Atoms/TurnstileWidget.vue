<template>
  <div ref="container" class="min-h-[65px]" />
</template>

<script setup lang="ts">
interface TurnstileRenderOptions {
  sitekey: string
  callback: (token: string) => void
  'expired-callback': () => void
  'error-callback': () => void
}

interface TurnstileApi {
  render: (element: HTMLElement, options: TurnstileRenderOptions) => string
  reset: (widgetId: string) => void
  remove: (widgetId: string) => void
}

type TurnstileWindow = Window & {
  turnstile?: TurnstileApi
  onTurnstileLoad?: () => void
}

const SCRIPT_ID = 'cf-turnstile-script'
const SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad'

const token = defineModel<string>({ default: '' })

const { public: publicConfig } = useRuntimeConfig()
const container: Ref<HTMLElement | null> = ref(null)
let widgetId: string | null = null

const loadTurnstile = (): Promise<TurnstileApi> =>
  new Promise((resolve: (api: TurnstileApi) => void): void => {
    const win = window as TurnstileWindow
    if (win.turnstile) return resolve(win.turnstile)

    const previousOnLoad = win.onTurnstileLoad
    win.onTurnstileLoad = (): void => {
      previousOnLoad?.()
      if (win.turnstile) resolve(win.turnstile)
    }

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.src = SCRIPT_SRC
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  })

const reset = (): void => {
  token.value = ''
  const win = window as TurnstileWindow
  if (widgetId && win.turnstile) win.turnstile.reset(widgetId)
}

onMounted(async (): Promise<void> => {
  const api = await loadTurnstile()
  if (!container.value) return
  widgetId = api.render(container.value, {
    sitekey: publicConfig.turnstileSiteKey,
    callback: (value: string): void => {
      token.value = value
    },
    'expired-callback': (): void => {
      token.value = ''
    },
    'error-callback': (): void => {
      token.value = ''
    },
  })
})

onBeforeUnmount((): void => {
  const win = window as TurnstileWindow
  if (widgetId && win.turnstile) win.turnstile.remove(widgetId)
})

defineExpose({ reset })
</script>
