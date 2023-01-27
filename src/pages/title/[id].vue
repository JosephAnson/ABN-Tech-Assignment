<script setup lang="ts">
import Posters from "~/components/Posters/Posters.vue"
import Episodes from "~/components/Episodes/Episodes.vue"
import { useGetShow } from "~/services/tv-maze"
import { getRouterParamsAsString } from "~/utils/getRouterParamsAsString"

const route = useRoute()
const id = $computed(() => getRouterParamsAsString(route.params.id))

const { data: showData } = useGetShow(id)

const existsAndHasLength = (items?: any[]) => items && items.length
</script>

<template>
  <main v-if="showData" class="title pb-10">
    <ShowInformation :show="showData" />
    <Cast
      v-if="existsAndHasLength(showData?._embedded.cast)"
      :cast="showData?._embedded.cast"
    />
    <Posters
      v-if="existsAndHasLength(showData?._embedded.images)"
      :images="showData?._embedded.images"
    />
    <Episodes
      v-if="existsAndHasLength(showData?._embedded.episodes)"
      :episodes="showData?._embedded.episodes"
    />
  </main>
</template>
