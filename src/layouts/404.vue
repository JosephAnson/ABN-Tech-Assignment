<template>
  <Header></Header>
  <main class="py-20 flex flex-col items-center justify-center">
    <div class="text-4xl">
      <div class="i-carbon-warning inline-block" />
    </div>
    <RouterView />
    <div class="mt-10">
      <router-link to="/"><Button>Go Home</Button></router-link>
    </div>
  </main>
  <Footer />
</template>
