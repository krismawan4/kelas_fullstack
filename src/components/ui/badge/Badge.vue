<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: String, default: '' },
  variant: { type: String, default: 'default' }
})

const variantClasses = computed(() => {
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/80',
    outline: 'text-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  }
  return variants[props.variant] || variants.default
})

const classes = computed(() =>
  cn('inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent', variantClasses.value, props.class)
)
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
