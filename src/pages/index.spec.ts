import { render } from "@testing-library/vue"
import { describe, expect, test, vi } from "vitest"
import Index from "./index.vue"
import { shows } from "~/components/__mocks__/showMock"

vi.mock("~/services/tv-maze")

describe("Index", () => {
  test("should render index page", async () => {
    vi.mocked(useGetShows, { partial: true }).mockReturnValue({
      data: ref(shows),
    })
    const { html } = render(Index, {
      global: {
        components: {
          RouterLink: {
            template: `<a><slot /></a>`,
          },
        },
      },
    })
    await nextTick() // Allows Slider to render
    expect(html()).toMatchSnapshot()
  })
})
