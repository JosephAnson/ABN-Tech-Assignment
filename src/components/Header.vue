<script setup lang="ts">
const name = ref("")
const router = useRouter()

const search = () => {
  if (name.value) {
    router.push(`/find/${name.value}`)
    name.value = ""
  }
}
</script>

<template>
  <div class="relative bg-primary-100">
    <div class="container">
      <div class="flex items-center justify-between py-2">
        <div
          class="heading font-secondary font-semibold flex justify-start text-l mr-2"
        >
          <router-link to="/"> TV SHOW </router-link>
        </div>
        <div class="items-center justify-end flex flex-1">
          <Search v-model:value="name" @enter="search" />
        </div>
      </div>
    </div>
  </div>
</template>
