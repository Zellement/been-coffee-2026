<template>
    <u-button :to="generateLink">
        <slot />
    </u-button>
</template>

<script setup lang="ts">
/*---------------------
Props
---------------------*/
interface Props {
    to?: string
}

const props = defineProps<Props>()

/*---------------------
Computed
---------------------*/

const isTelOrEmailProtocol: ComputedRef<boolean> = computed(() => {
    const url = props.to || ''
    return url.startsWith('mailto:') || url.startsWith('tel:')
})

const generateLink: ComputedRef<string | undefined> = computed(() => {
    if (!props.to) return undefined
    if (
        props.to.startsWith('#') ||
        props.to.startsWith('?') ||
        isTelOrEmailProtocol.value
    )
        return props.to
    return props.to
})
</script>
