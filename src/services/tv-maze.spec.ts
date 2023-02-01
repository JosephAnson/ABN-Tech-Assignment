import { beforeEach, describe, expect, test, vi } from "vitest"
import type { ComputedRef } from "vue"
import { useFindShow, useGetShow, useGetShows } from "./tv-maze"
import type { SearchItem } from "~/types"
import { shows } from "~/components/__mocks__/showMock"

vi.mock("@vueuse/core")

function createUseFetchMock(data: any) {
  return vi
    .mocked(useFetch, { partial: true })
    .mockImplementation((url: any, useFetchOptions: any) => {
      let fetchedData = data

      if (useFetchOptions?.afterFetch) {
        fetchedData = useFetchOptions.afterFetch({ data }).data
      }

      return {
        get: vi.fn().mockReturnValue({
          json: vi.fn().mockImplementation(() => fetchedData),
        }),
      }
    })
}

describe("Tv Maze Service", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  describe("useFindShow", () => {
    test("should call correct url and return data", async () => {
      const data = shows[0]
      const name = ref("Under the Dome")
      const url = `https://api.tvmaze.com/search/shows?q=${name.value}`
      const searchItems: SearchItem[] = [
        {
          score: 1,
          show: shows[0],
        },
        {
          score: 1,
          show: shows[1],
        },
        {
          score: 2,
          show: shows[2],
        },
      ]
      const mockedUseFetch = createUseFetchMock(searchItems)
      const result = useFindShow(name)

      expect(
        (mockedUseFetch.mock.calls[0][0] as ComputedRef<string>).value
      ).toEqual(url)
      expect(result).toContainEqual(data)
    })
  })

  describe("useGetShows", () => {
    test("should call correct url and return data", () => {
      const mockedUseFetch = createUseFetchMock(shows)
      const result = useGetShows()

      expect(mockedUseFetch.mock.calls[0][0]).toEqual(
        "https://api.tvmaze.com/shows"
      )
      expect(result).toEqual(shows)
    })
  })

  describe("useGetShow", () => {
    test("should call correct url and return data", () => {
      const data = shows[0]
      const mockedUseFetch = createUseFetchMock(data)

      const id = 1
      const url = `https://api.tvmaze.com/shows/${id}?embed[]=images&embed[]=cast&embed[]=episodes`

      const result = useGetShow(id)

      expect(mockedUseFetch.mock.calls[0][0]).toEqual(url)
      expect(result).toEqual(data)
    })
  })
})
