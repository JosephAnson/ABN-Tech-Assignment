<script setup lang="ts">
import type { Episode as IEpisode } from "~/types"

const props = defineProps<{
  episodes: IEpisode[]
}>()
</script>

<template>
  <section v-if="episodes.length" class="episodes mb-10">
    <Container>
      <Heading h3>Episodes</Heading>
      <div
        v-for="episode in props.episodes"
        :key="episode.id"
        class="episode md:flex mb-8"
      >
        <div
          class="episode__image aspect-square w-full md:max-w-xs mr-8 mb-4 md:mb-0"
        >
          <img
            v-if="episode.image?.medium"
            alt="Poster Artwork"
            :src="episode.image.original"
            class="w-full h-full object-cover"
          />
          <img
            v-else
            alt="Poster Artwork Missing"
            :src="NOT_FOUND_IMAGE"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="episode__info">
          <Heading h4>{{ episode.name }}</Heading>
          <Rating>{{ episode.rating.average }}</Rating>

          <div class="episode__info__details flex color-gray-300">
            <span> {{ toHoursAndMinutes(episode.runtime) }}</span>
            <span class="seperator mx-2">&#x2022;</span>
            <span
              >Season {{ episode.season }} - Episode {{ episode.number }}</span
            >
            <span class="seperator mx-2">&#x2022;</span>
            <span>{{ episode.airdate.split("-")[0] }}</span>
          </div>
          <p class="prose prose-xl" v-html="episode.summary"></p>
        </div>
      </div>
    </Container>
  </section>
</template>
