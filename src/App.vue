<script setup lang="ts">
useHead({
  title: "ABN Amro TV Shows | Watch Your Favorite TV Shows Online",
  meta: [
    {
      name: "description",
      content:
        "Discover the latest and greatest TV shows at ABN Amro TV Shows. Browse our vast selection, watch online, and stay up-to-date with the latest episodes and releases.",
    },
    {
      name: "keywords",
      content: "TV shows, latest episodes, popular series, ABN Amro TV Shows",
    },
  ],
})
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
