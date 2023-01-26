<script lang="ts" setup>
import { defineEmits, defineProps, withDefaults } from "vue"
import { useVModel } from "@vueuse/core"
import type { InputProps } from "~/components/Search/types"

const props = withDefaults(defineProps<InputProps>(), {
  id: undefined,
  name: undefined,
  value: "",
})

const emit = defineEmits(["update:value", "focus", "blur", "enter"])

const newValue = useVModel(props, "value", emit)
</script>

<template>
  <div
    class="flex items-center relative shadow-sm bg-gray-800 sm:text-sm border-gray-300 rounded-md"
  >
    <input
      :id="props.id"
      :value="newValue"
      type="text"
      :name="props.name"
      class="bg-transparent w-full px-4 block h-8 focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="Search TV shows"
      autocomplete="off"
      @input="$emit('update:value', $event.target.value)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      @keydown.enter="$emit('enter', $event.target.value)"
    />
    <span
      class="flex w-10 h-8 p-1 cursor-pointer z-10 hover:bg-gray-700 rounded-r-md"
      @click="$emit('enter', newValue)"
    >
      <span class="i-carbon-search w-full h-full"></span>
      <span class="sr-only">Search Button</span>
    </span>
  </div>
</template>
