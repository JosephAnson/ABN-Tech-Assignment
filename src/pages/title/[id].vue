<script setup lang="ts">
const route = useRoute()
const id = computed(() => getRouterParamsAsString(route.params.id))

const { data: showData } = useGetShow(id.value)
</script>

<template>
  <main v-if="showData" class="title pb-10">
    <ShowInformation :show="showData" />
    <Cast
      v-if="showData?._embedded.cast?.length"
      :cast="showData?._embedded.cast"
    />
    <Posters
      v-if="showData?._embedded.images?.length"
      :images="showData?._embedded.images"
    />
    <Episodes
      v-if="showData?._embedded.episodes?.length"
      :episodes="showData?._embedded.episodes"
    />
  </main>
</template>
