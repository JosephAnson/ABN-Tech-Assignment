<script setup lang="ts">
import Heading from "~/components/Heading/Heading.vue"
import { useGetShows } from "~/services/tv-maze"
import type { Show } from "~/types"

useHead({
  title: "Home Page",
})

const { data: shows } = useGetShows()

const showsSortedByGenre = computed(() => {
  const showMapping: Record<string, Show[]> = {}
  if (shows.value) {
    for (const show of shows.value) {
      for (const genre of show.genres) {
        if (!showMapping[genre]) showMapping[genre] = []

        showMapping[genre].push(show)
      }
    }
  }
  return showMapping
})
const sortShowByWeight = (shows: Show[] | null) =>
  shows ? shows.sort((a, b) => b.weight - a.weight) : []
</script>

<template>
  <main class="homepage py-10">
    <div class="explore-highlighted">
      <Container>
        <Heading h1>Highlighted shows</Heading>
        <ShowSlider :shows="sortShowByWeight(shows)" />
      </Container>
    </div>
    <div class="explore-genres bg-gray-900 py-10">
      <Container>
        <Heading h2>Explore TV shows by genres</Heading>
        <div v-for="(sortedShows, genre) in showsSortedByGenre" :key="genre">
          <Heading h3>{{ genre }}</Heading>
          <ShowSlider :shows="sortShowByWeight(sortedShows)" />
        </div>
      </Container>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
