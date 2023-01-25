<script setup lang="ts">
const route = useRoute()

const name = $ref(route.params.name)
const router = useRouter()

const search = () => {
  if (name) {
    router.push(`/find/${name}`)
  }
}
</script>

<template>
  <div class="relative bg-dark">
    <div class="container">
      <div class="flex items-center justify-between py-4">
        <div class="flex justify-start">
          <router-link to="/"> Tv Show </router-link>
        </div>
        <div class="items-center justify-end flex flex-1">
          <Input v-model:value="name" class="mr-2" @keypress.enter="search" />
        </div>
      </div>
    </div>
  </div>
</template>
