<script setup lang="ts">
import Rating from "~/components/Rating/Rating.vue"

const props = defineProps<{
  id: number
  name: string
  summary?: string
  rating?: {
    average?: number
  }
  image?: string
}>()
</script>

<template>
  <div
    class="h-full rounded-xl overflow-hidden group bg-primary-500 hover:bg-primary-400 transition-250"
  >
    <router-link :to="`/title/${props.id}`" class="h-full">
      <div class="image-container aspect-[42/59] relative overflow-hidden">
        <img
          v-if="image"
          class="w-full h-full group-hover:scale-102 transition-250"
          :src="image"
          :alt="name"
        />
        <img
          v-if="!image"
          class="w-full h-full group-hover:scale-102 transition-250 object-cover"
          src="https://images.unsplash.com/photo-1538131587570-641359811581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=20"
          :alt="`No image for ${props.name}`"
        />
        <span
          class="overlay bg-gradient-to-t from-primary-900 via-transparent"
        ></span>
        <Rating
          v-if="rating && rating.average"
          class="position-absolute bottom-2 left-2"
          >{{ rating.average }}</Rating
        >
      </div>
      <div class="p-2 pointer-events-none">
        <Heading h4 bold class="truncate">
          {{ props.name }}
        </Heading>
        <div
          v-if="summary"
          class="text-gray-400 text-xs overflow-hidden text-ellipsis text-clip h-12"
          v-html="props.summary"
        />
        <slot />
      </div>
    </router-link>
  </div>
</template>
