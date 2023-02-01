<script setup lang="ts">
import type { Show } from "~/types"

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
  shows
    ? shows.sort(
        (a, b) => Number(b.rating?.average) - Number(a.rating?.average)
      )
    : []
</script>

<template>
  <main class="homepage py-10">
    <section class="explore-highlighted">
      <Container>
        <Heading h1>Highlighted shows</Heading>
        <ShowSlider id="highlighted-shows" :shows="sortShowByWeight(shows)" />
      </Container>
    </section>
    <section class="explore-genres bg-gray-900 py-10">
      <Container>
        <Heading h2>Explore TV shows by genres</Heading>
        <div v-for="(sortedShows, genre) in showsSortedByGenre" :key="genre">
          <Heading h3>{{ genre }}</Heading>
          <ShowSlider :id="genre" :shows="sortShowByWeight(sortedShows)" />
        </div>
      </Container>
    </section>
  </main>
</template>
