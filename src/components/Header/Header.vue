<script setup>

</script>

<template>
  <div class="relative bg-dark">
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex items-center justify-between py-4">
        <div class="flex justify-start">
          <router-link to="/">
            Tv Shows
          </router-link>
        </div>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <span>Search</span>
          <Input />
          <a>search</a>
        </div>
      </div>
    </div>
  </div>
</template>
