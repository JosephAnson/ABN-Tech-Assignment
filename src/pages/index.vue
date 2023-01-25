<script setup lang="ts">
import Heading from "~/components/Heading/Heading.vue"
import { getShows } from "~/services/tv-maze"
import type { Show } from "~/types"

useHead({
  title: "Home Page",
})

const { result: data } = getShows()

const filtersShow = computed(() => {
  const showMapping: Record<string, Show[]> = {}
  if (data.value) {
    for (const show of data.value) {
      for (const genre of show.genres) {
        if (!showMapping[genre]) showMapping[genre] = []

        showMapping[genre].push(show)
      }
    }
  }
  return showMapping
})
const sortShow = (shows?: Show[]) =>
  shows ? shows.sort((a, b) => b.weight - a.weight) : []
</script>

<template>
  <div class="explore-highlighted">
    <Container>
      <Heading h1>Highlighted shows</Heading>
      <ShowSlider :shows="sortShow(data)" />
    </Container>
  </div>
  <div class="explore-genres bg-gray-900 py-10">
    <Container>
      <Heading h2>Explore TV shows by genres</Heading>
      <div v-for="(shows, genre) in filtersShow" :key="genre">
        <Heading h3>{{ genre }}</Heading>
        <ShowSlider :shows="sortShow(shows)" />
      </div>
    </Container>
  </div>
</template>

<route lang="yaml">
meta:
layout: home
</route>
