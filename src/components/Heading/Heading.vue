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

const type = $computed(() => {
  if (props.h1) return "h1"
  if (props.h2) return "h2"
  if (props.h4) return "h4"

  return "h3"
})

function getHeaderClass(type: HeadingSizes) {
  switch (type) {
    case "h1":
      return "text-3xl pb-5"
    case "h2":
      return "text-2xl pb-4"
    case "h3":
      return "text-xl pb-3"
    case "h4":
      return "text-l pb-2"
  }
}

const styles = $computed(() => {
  if (!props.styled) return getHeaderClass(type)
  return getHeaderClass(props.styled)
})
</script>

<template>
  <component
    :is="type"
    class="heading"
    :class="[styles, { 'font-bold': bold }]"
  >
    <slot></slot>
  </component>
</template>
