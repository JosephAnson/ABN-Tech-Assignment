<script setup lang="ts">
import type { ShowImage as IShowImage } from "~/types.js"

const props = defineProps<{
  images: IShowImage[]
}>()

const posters = computed(() =>
  props.images.filter((item) => item.type === "poster")
)
</script>

<template>
  <div class="posters mb-10">
    <Container>
      <Heading h3>Posters</Heading>

      <Grid>
        <div
          v-for="poster in posters"
          :key="poster.id"
          class="mr-2 mb-2 last:mr-0 w-full"
        >
          <img
            v-if="poster.resolutions?.medium"
            alt="Poster Artwork"
            :src="poster.resolutions.medium.url"
            class="w-full"
          />
        </div>
      </Grid>
    </Container>
  </div>
</template>
