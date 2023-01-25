<script setup lang="ts">
useHead({
  title: 'Home Page',
})

const name = $ref('joe')
const router = useRouter()

const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <div>
    This is the homepage

    <div class="flex flex-wrap">
      <carousel :items-to-show="1.5">
        <slide v-for="slide in 10" :key="slide">
          <MovieCard name="Avatar" description="this is avatar the movie" />
          <MovieCard name="Avatar" description="this is avatar the movie" />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
