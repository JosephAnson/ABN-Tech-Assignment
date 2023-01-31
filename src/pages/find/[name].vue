<script setup lang="ts">
import { useFindShow } from "~/services/tv-maze"
import { getRouterParamsAsString } from "~/utils/getRouterParamsAsString"

const route = useRoute()
const name = computed(() => getRouterParamsAsString(route.params.name))
const { data: result } = useFindShow(name)

const showsFound = computed<number>(() => result.value?.length || 0)
</script>

<template>
  <main class="find py-10">
    <Container>
      <section>
        <Heading h1 class="flex items-center text-4xl mb-2">
          <span class="mr-2">Search: {{ name }}</span>
          <span class="flex h-8 w-8">
            <span class="i-carbon-search h-full w-full" />
          </span>
        </Heading>
      </section>
      <section v-if="showsFound">
        <Heading h2>Titles</Heading>
        <Grid>
          <ShowCard
            v-for="show in result"
            :id="show.id"
            :key="show.id"
            :image="show.image?.medium"
            :name="show.name"
            :summary="show?.summary"
            :rating="show.rating"
          />
        </Grid>
      </section>
      <section v-if="!showsFound" class="pt-10">
        <Heading h2>No Items found!</Heading>
        <router-link to="/"><Button>Go Home</Button></router-link>
      </section>
    </Container>
  </main>
</template>
