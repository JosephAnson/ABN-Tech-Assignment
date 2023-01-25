<script setup lang="ts">
import Rating from "~/components/Rating/Rating.vue"
import type { ShowImage } from "~/types"

const props = defineProps<{
  id: number
  name: string
  summary: string
  rating?: {
    average?: number
  }
  image?: ShowImage
}>()
</script>

<template>
  <div class="bg-gray-800 rounded overflow-hidden h-full">
    <router-link :to="`/title/${props.id}`">
      <div class="image-container aspect-[42/59]">
        <img
          v-if="image"
          class="w-full object-cover h-full"
          :src="image"
          :alt="name"
        />
        <div v-if="!image" class="w-full bg-gray h-full flex" />
      </div>
      <div class="p-2">
        <Rating v-if="rating && rating.average">{{ rating.average }}</Rating>
        <Heading h4 bold class="truncate">
          {{ props.name }}
        </Heading>
        <div
          class="text-gray-400 text-xs overflow-hidden text-ellipsis text-clip h-12"
          v-html="props.summary"
        />
        <slot />
      </div>
    </router-link>
  </div>
</template>
