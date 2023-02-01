import { render } from "@testing-library/vue"
import { describe, expect, test, vi } from "vitest"
import { useRoute } from "vue-router"
import Title from "./[id].vue"
import { shows } from "~/components/__mocks__/showMock"
import { useGetShow } from "~/services/tv-maze/tv-maze"

vi.mock("~/services/tv-maze")
vi.mock("vue-router")

describe("Title", () => {
  test("should render title page", async () => {
    vi.mocked(useRoute, { partial: true }).mockReturnValue({
      params: {
        id: String(shows[0].id),
      },
    })

    vi.mocked(useGetShow, { partial: true }).mockReturnValue({
      data: ref(shows[0]),
    })
    const { html } = render(Title)
    await nextTick() // Allows Slider to render
    expect(html()).toMatchSnapshot()
  })
})
