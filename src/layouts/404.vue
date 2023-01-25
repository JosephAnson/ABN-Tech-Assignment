<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="p-x4 p-y10 text-center text-teal-700 text-dark:gray-200">
    <div class="text-4xl">
      <div class="i-carbon-warning inline-block" />
    </div>
    <RouterView />
    <div>
      <router-link btn text-sm m="3 t8" to="/">Go Back</router-link>
    </div>
  </main>
  <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
    [404 Layout]
  </div>
</template>
