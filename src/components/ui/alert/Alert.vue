<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: String, default: '' },
  variant: { type: String, default: 'default' }
})

const variantClasses = computed(() => {
  const variants = {
    default: 'bg-card text-card-foreground',
    destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
    info: 'border-blue-500/50 bg-blue-50 text-blue-900 [&>svg]:text-blue-500',
    success: 'border-green-500/50 bg-green-50 text-green-900 [&>svg]:text-green-500',
    warning: 'border-yellow-500/50 bg-yellow-50 text-yellow-900 [&>svg]:text-yellow-500',
  }
  return variants[props.variant] || variants.default
})

const classes = computed(() =>
  cn('relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground', variantClasses.value, props.class)
)
</script>

<template>
  <div :class="classes" role="alert">
    <slot />
  </div>
</template>
