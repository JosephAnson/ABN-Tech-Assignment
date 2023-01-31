<script lang="ts" setup>
interface SelectProps {
  id?: string
  name?: string
  value: string
}

const props = withDefaults(defineProps<SelectProps>(), {
  id: undefined,
  name: undefined,
  value: "",
})

const emit = defineEmits(["update:value", "enter"])

const newValue = useVModel(props, "value", emit, { passive: true })

const emitEnter = (value: string) => emit("enter", value)
</script>

<template>
  <div
    class="flex items-center relative shadow-sm bg-gray-800 sm:text-sm border-gray-300 rounded-md"
  >
    <input
      :id="props.id"
      v-model="newValue"
      type="search"
      :name="props.name"
      class="bg-transparent w-full px-4 block h-8 focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="Search TV shows"
      autocomplete="off"
      @keydown.enter="emitEnter(newValue)"
    />
    <button
      class="flex w-10 h-8 p-1 cursor-pointer z-10 hover:bg-gray-700 rounded-r-md"
      @click="emitEnter(newValue)"
    >
      <span class="i-carbon-search w-full h-full"></span>
      <span class="sr-only">Search Button</span>
    </button>
  </div>
</template>
