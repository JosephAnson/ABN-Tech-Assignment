<script setup lang="ts">
import { useGetShow } from "~/services/tv-maze"
import { getRouterParamsAsString } from "~/utils/getRouterParamsAsString"

const router = useRouter()
const route = useRoute()
const id = $computed(() => getRouterParamsAsString(route.params.id))

const { data: showData } = useGetShow(id)
const informationData = computed(() => showData.value)
const castData = computed(() => showData.value?._embedded.cast)
const imageData = computed(() => showData.value?._embedded.images)
const episodeData = computed(() => showData.value?._embedded.episodes)

const headerImage = computed(() =>
  imageData.value
    ?.filter((item) => item.type === "background")
    .reduce((max, background) =>
      max.resolutions.original.width > background.resolutions.original.width
        ? max
        : background
    )
)

function toHoursAndMinutes(totalMinutes: number) {
  if (totalMinutes < 60) return `${totalMinutes}m`
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  return `${hours}h ${minutes}m`
}
</script>

<template>
  <main class="title pb-10">
    <div v-if="informationData" class="header relative py-32">
      <div
        v-if="headerImage"
        :style="`background: url('${informationData.image.original}')`"
        class="overlay !bg-no-repeat !bg-cover"
      ></div>
      <div class="overlay object-cover bg-gradient-to-t from-primary-900"></div>
      <Container class="relative z-1">
        <div class="information w-full">
          <Heading h1>{{ informationData.name }}</Heading>
          <Rating class="mb-4 text-xl"
            >{{ informationData.rating.average }}
          </Rating>
          <div class="flex information__details color-gray-400">
            <span class="runtime">{{
              toHoursAndMinutes(informationData.averageRuntime)
            }}</span>
            <span class="seperator mx-2">&#x2022;</span>
            <span class="genres">{{ informationData.genres.join(", ") }}</span>
            <span class="seperator mx-2">&#x2022;</span>
            <span class="premiered">{{
              informationData.premiered.split("-")[0]
            }}</span>
          </div>
          <article
            class="prose prose-xl mb-8"
            v-html="informationData.summary"
          ></article>
          <Button
            target="_blank"
            rel="noopener"
            :href="`https://www.imdb.com/title/${informationData.externals.imdb}`"
          >
            View more on IMDB
          </Button>
        </div>
      </Container>
    </div>

    <div v-if="castData" class="cast mb-2">
      <Container>
        <Heading h3>Cast</Heading>
        <div class="flex flex-wrap">
          <div
            v-for="cast in castData"
            :key="cast.person.id"
            class="cast mr-8 mb-8 last:mr-0 flex flex-col items-center w-48 text-center"
          >
            <img
              v-if="cast.person.image"
              :alt="`Picture of ${cast.person.name}`"
              :src="cast.person.image.medium"
              class="rounded-full overflow-hidden w-48 h-48 object-cover mb-2"
            />
            <p>{{ cast.person.name }}</p>
            <p class="color-gray-400">
              {{ cast.character.name }}
            </p>
          </div>
        </div>
      </Container>
    </div>

    <Container>
      <div v-if="imageData" class="posters mb-10">
        <Heading h3>Posters</Heading>

        <div class="flex flex-wrap">
          <div
            v-for="image in imageData.filter((item) => item.type === 'poster')"
            :key="image.id"
            class="mr-2 mb-2 last:mr-0"
          >
            <img
              v-if="image.resolutions?.medium"
              alt="Poster Artwork"
              :src="image.resolutions.medium.url"
            />
          </div>
        </div>
      </div>

      <div v-if="episodeData" class="episodes mb-10">
        <Heading h3>Episodes</Heading>
        <div
          v-for="episode in episodeData"
          :key="episode.id"
          class="episode flex mb-8"
        >
          <div class="episode__image aspect-square max-w-xs mr-8">
            <img
              v-if="episode.image?.medium"
              alt="Poster Artwork"
              :src="episode.image.original"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="episode__info">
            <Heading h4>{{ episode.name }}</Heading>
            <div class="episode__info__details flex color-gray-300">
              <span>Aired {{ episode.airdate.split("-")[0] }}</span>
              <span class="seperator mx-2">&#x2022;</span>
              <span>Season {{ episode.season }}</span>
              <span class="seperator mx-2">&#x2022;</span>
              <span>Episode {{ episode.number }}</span>
              <span class="seperator mx-2">&#x2022;</span>
              <span> {{ toHoursAndMinutes(episode.runtime) }}</span>
              <span class="seperator mx-2">&#x2022;</span>
              <Rating>{{ episode.rating.average }}</Rating>
            </div>
            <p class="prose prose-xl" v-html="episode.summary"></p>
          </div>
        </div>
      </div>
    </Container>
  </main>
</template>
