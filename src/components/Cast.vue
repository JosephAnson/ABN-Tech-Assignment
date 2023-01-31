<script setup lang="ts">
import type { Cast as ICast } from "~/types"
import { notFoundImage } from "~/utils/constants"

const props = defineProps<{
  cast: ICast[]
}>()

const removeDuplicateCastMembers = (arr: ICast[]): Array<ICast> => {
  const names = new Set()
  return arr.filter((castItem) => {
    const isDuplicate = names.has(castItem.person.name.toLowerCase())
    names.add(castItem.person.name.toLowerCase())
    return !isDuplicate
  })
}

const castMembers = computed(() => removeDuplicateCastMembers(props.cast))
</script>

<template>
  <section v-if="cast.length" class="cast mb-4">
    <Container>
      <Heading h3>Cast</Heading>
      <Grid>
        <div
          v-for="item in castMembers"
          :key="item.person.id"
          class="cast mb-4 flex flex-col items-center text-center"
        >
          <img
            v-if="item.person.image"
            :alt="`Picture of ${item.person.name}`"
            :src="item.person.image.medium"
            class="rounded-full aspect-square overflow-hidden w-full object-cover mb-2"
          />
          <img
            v-else
            alt="Picture unavailable"
            :src="notFoundImage"
            class="rounded-full aspect-square overflow-hidden w-full object-cover mb-2"
          />
          <p>{{ item.person.name }}</p>
          <p class="color-gray-400">
            {{ item.character.name }}
          </p>
        </div>
      </Grid>
    </Container>
  </section>
</template>
