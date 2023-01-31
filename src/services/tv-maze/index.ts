import type { Ref } from "vue"
import type { SearchItem, Show, ShowWithEmbedded } from "~/types"

export function useFindShow(name: Ref<string>) {
  const url = computed(
    () => `https://api.tvmaze.com/search/shows?q=${name.value}`
  )

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
  return useFetch(`https://api.tvmaze.com/shows`).get().json<Show[]>()
}

export function useGetShow(id: number | string) {
  return useFetch(
    `https://api.tvmaze.com/shows/${id}?embed[]=images&embed[]=cast&embed[]=episodes`
  )
    .get()
    .json<ShowWithEmbedded>()
}
