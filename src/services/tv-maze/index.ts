import type { AxiosResponse } from "axios"
import axios from "axios"
import { useAxios } from "@vueuse/integrations/useAxios"
import type { SearchItem, Show } from "~/types.js"

const instance = axios.create({
  baseURL: "https://api.tvmaze.com/",
})

export function useFindShow(title, { immediate }: { immediate: boolean }) {
  const result = ref<Show[]>([])

  function search(tit: string) {
    instance
      .get<SearchItem[], AxiosResponse<SearchItem[]>>(`/search/shows?q=${tit}`)
      .then((response) => {
        result.value = response.data.map((item) => item.show)
      })
  }

  if (immediate) {
    search(title)
  }

  return {
    result,
    search,
  }
}

export function getShows() {
  const result = ref<Show[]>([])

  instance.get<Show[], AxiosResponse<Show[]>>(`/shows`, {}).then((response) => {
    result.value = response.data
  })

  return {
    result,
  }
}

export async function getShow(id: number | string) {
  const { data } = await useAxios<Show[]>(`/shows/${id}`, {}, instance)
  return data.value || []
}
