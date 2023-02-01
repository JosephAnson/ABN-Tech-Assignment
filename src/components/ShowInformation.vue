<script setup lang="ts">
import type { Show } from "~/types"

const props = defineProps<{
  show: Show
}>()
</script>

<template>
  <section class="header relative pt-10 pb-24">
    <div
      :style="`background: url('${props.show.image?.original}')`"
      class="overlay !bg-no-repeat !bg-cover"
    ></div>
    <div
      class="overlay object-cover bg-gradient-to-t from-primary-900 to-primary-900/40"
    ></div>
    <Container class="relative z-1">
      <div class="information w-full">
        <Heading h1>{{ props.show.name }}</Heading>
        <Rating v-if="props.show.rating.average" class="mb-4 text-xl"
          >{{ props.show.rating.average }}
        </Rating>
        <div class="flex information__details color-gray-400">
          <span v-if="props.show.averageRuntime" class="runtime">{{
            toHoursAndMinutes(props.show.averageRuntime)
          }}</span>
          <span v-if="props.show.averageRuntime" class="seperator mx-2"
            >&#x2022;</span
          >
          <span class="genres">{{ props.show.genres.join(", ") }}</span>
          <span v-if="props.show.premiered" class="seperator mx-2"
            >&#x2022;</span
          >
          <span class="premiered">{{
            props.show.premiered?.split("-")[0]
          }}</span>
        </div>
        <article
          class="prose prose-xl mb-8"
          v-html="props.show.summary"
        ></article>
        <Button
          target="_blank"
          rel="noopener"
          :href="`https://www.imdb.com/title/${props.show.externals.imdb}`"
        >
          View more on IMDB
        </Button>
      </div>
    </Container>
  </section>
</template>
