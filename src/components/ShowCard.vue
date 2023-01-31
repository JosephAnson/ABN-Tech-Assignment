<script setup lang="ts">
import Rating from "~/components/Rating.vue"
import { notFoundImage } from "~/utils/constants"

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
          :src="notFoundImage"
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
