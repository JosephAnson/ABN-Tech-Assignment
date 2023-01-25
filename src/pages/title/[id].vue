<script setup lang="ts">
import { getShow } from "~/services/tv-maze"
import type { Show } from "~/types"

const router = useRouter()
const route = useRoute()
const id = $computed(() => route.params.id)

let show = $ref<Show[]>(null)

onMounted(async () => (show = await getShow(id)))
</script>

<template>
  <div v-if="show" class="container">
    {{ route.params.id }}
    <div class="flex">
      <div class="details">
        <div class="text-4xl">
          <div class="i-carbon-pedestrian inline-block" />
          <button class="btn" text-sm @click="router.back()">back</button>
        </div>
        <p class="text-4xl">WELCOME BACK</p>
        <article class="prose prose-xl" v-html="show.summary"></article>
      </div>
      <div class="image"></div>
    </div>
  </div>
</template>
