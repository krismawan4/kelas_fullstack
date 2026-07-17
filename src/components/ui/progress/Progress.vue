<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: String, default: '' },
  modelValue: { type: Number, default: 0 },
  max: { type: Number, default: 100 }
})

const percentage = computed(() => Math.min(100, Math.max(0, (props.modelValue / props.max) * 100)))
</script>

<template>
  <div
    :class="cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/20', props.class)"
    role="progressbar"
    :aria-valuenow="modelValue"
    :aria-valuemax="max"
  >
    <div
      class="h-full w-full flex-1 bg-primary transition-all"
      :style="{ transform: `translateX(-${100 - percentage}%)` }"
    />
  </div>
</template>
