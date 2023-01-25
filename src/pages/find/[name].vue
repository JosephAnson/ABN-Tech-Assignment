<script setup lang="ts">
import { useFindShow } from "~/services/tv-maze"

const route = useRoute()
const routeName = $computed(() => route.params.name)
const name = $computed(() =>
  Array.isArray(route.params.name) ? route.params.name[0] : route.params.name
)
const { result, search } = useFindShow(name, { immediate: true })

const showsFound = $computed(() => result.value.length)

watch(
  () => name,
  (newName) => {
    search(newName)
  }
)
</script>

<template>
  <div class="container">
    <p class="flex align-center text-4xl mb-2">
      <span>Searching: {{ name }}</span>
      <span class="i-carbon-search inline-block" />
    </p>
    <div v-if="showsFound" class="grid grid-cols-6 gap-6">
      <ShowCard
        v-for="show in result"
        :id="show.id"
        :key="show.id"
        :image="show.image?.medium"
        :name="show.name"
        :summary="show.summary"
        :rating="show.rating"
      />
    </div>
    <p v-if="!showsFound">No Items found!</p>
  </div>
</template>
