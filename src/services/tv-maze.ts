import type { Ref } from "vue"
import type { SearchItem, Show, ShowWithEmbedded } from "~/types"

export function useFindShow(name: Ref<string>) {
  const url = computed(() => `${API_URL}search/shows?q=${name.value}`)

  return useFetch<SearchItem[]>(url, {
    refetch: true,
    afterFetch(ctx) {
      ctx.data = ctx.data.map((item: SearchItem) => item.show)
      return ctx
    },
  })
    .get()
    .json<Show[]>()
}

export function useGetShows() {
  return useFetch(`${API_URL}shows`).get().json<Show[]>()
}

export function useGetShow(id: number | string) {
  return useFetch(
    `${API_URL}shows/${id}?embed[]=images&embed[]=cast&embed[]=episodes`
  )
    .get()
    .json<ShowWithEmbedded>()
}
