<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
</script>

<template>
  <div>
    <div class="text-4xl">
      <div class="i-carbon-pedestrian inline-block" />
    </div>
    <p class="text-4xl">
      WELCOME BACK {{ props.name }}
    </p>

    <p text-sm opacity-75>
      <em>intro</em>
    </p>

    <div>
      <button
        btn m="3 t6" text-sm
        @click="router.back()"
      >
        back
      </button>
    </div>
  </div>
</template>
