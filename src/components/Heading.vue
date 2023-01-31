<script setup lang="ts">
import type { PropType } from "vue"

type HeadingSizes = "h1" | "h2" | "h3" | "h4"

const props = defineProps({
  h1: {
    type: Boolean,
    default: false,
  },
  h2: {
    type: Boolean,
    default: false,
  },
  h4: {
    type: Boolean,
    default: false,
  },
  bold: {
    type: Boolean,
    default: false,
  },
  styled: {
    type: String as PropType<HeadingSizes | null>,
    validator: (value: string) => ["h1", "h2", "h3", "h4"].includes(value),
    default: null,
  },
})

const type = computed(() => {
  if (props.h1) return "h1"
  if (props.h2) return "h2"
  if (props.h4) return "h4"

  return "h3"
})

function getHeaderClass(type: HeadingSizes) {
  switch (type) {
    case "h1":
      return "text-2xl md:text-3xl mb-5"
    case "h2":
      return "text-xl md:text-2xl mb-4"
    case "h3":
      return "text-xl md:text-xl mb-3"
    case "h4":
      return "md:text-l mb-2"
  }
}

const styles = computed(() => {
  if (!props.styled) return getHeaderClass(type.value)
  return getHeaderClass(props.styled)
})
</script>

<template>
  <component
    :is="type"
    class="heading font-secondary font-semibold"
    :class="[styles, { 'font-bold': bold }]"
  >
    <slot></slot>
  </component>
</template>
