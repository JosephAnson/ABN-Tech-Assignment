<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main>
    <div class="text-4xl">
      <div class="i-carbon-warning inline-block" />
    </div>
    <RouterView />
    <div>
      <router-link btn text-sm m="3 t8" to="/">Go Back</router-link>
    </div>
  </main>
  <Footer />
</template>
