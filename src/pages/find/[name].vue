<script setup lang="ts">
import { useFindShow } from "~/services/tv-maze"
import { getRouterParamsAsString } from "~/utils/getRouterParamsAsString"

const route = useRoute()
const name = computed(() => getRouterParamsAsString(route.params.name))
const { data: result } = useFindShow(name)

const showsFound = $computed<number>(() => result.value?.length || 0)
</script>

<template>
  <main class="find py-10">
    <Container>
      <Heading h1 class="flex items-center text-4xl mb-2">
        <span class="mr-2">Search: {{ name }}</span>
        <span class="flex h-8 w-8">
          <span class="i-carbon-search h-full w-full" />
        </span>
      </Heading>
      <div v-if="showsFound">
        <Heading h2>Titles</Heading>
        <div
          class="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-6 lg:grid-cols-6 lg:gap-6"
        >
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
      </div>
      <p v-if="!showsFound">No Items found!</p>
    </Container>
  </main>
</template>
