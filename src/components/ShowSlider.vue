<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { A11y, Navigation, Virtual } from "swiper"
import type { Show } from "~/types"

const props = defineProps<{
  id: string
  shows: Show[]
}>()

const breakpoints = {
  500: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  600: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
}
</script>

<template>
  <div class="slider pb-10">
    <Swiper
      id="THISISTHENEWID"
      wrapper-id="THISISTHENEWID"
      :slides-per-view="2"
      :space-between="20"
      virtual
      :a11y="{ id }"
      :modules="[Navigation, A11y, Virtual]"
      :breakpoints="breakpoints"
    >
      <SwiperSlide
        v-for="tvShow in props.shows"
        :key="tvShow.id"
        :virtual-index="tvShow.id"
      >
        <ShowCard
          :id="tvShow.id"
          :image="tvShow.image?.medium"
          :name="tvShow.name"
          :summary="tvShow?.summary"
          :rating="tvShow.rating"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
