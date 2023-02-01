import { render } from "@testing-library/vue"
import { describe, expect, test, vi } from "vitest"
import { useRoute } from "vue-router"
import Name from "./[name].vue"
import { shows } from "~/components/__mocks__/showMock"
import { useFindShow } from "~/services/tv-maze/tv-maze"

vi.mock("~/services/tv-maze")
vi.mock("vue-router")

describe("Name", () => {
  test("should render name page", async () => {
    vi.mocked(useFindShow, { partial: true }).mockReturnValue({
      data: ref(shows),
    })

    vi.mocked(useRoute, { partial: true }).mockReturnValue({
      params: {
        name: shows[0].name,
      },
    })

    const { html, getByText } = render(Name, {
      global: {
        components: {
          RouterLink: {
            template: `<a><slot /></a>`,
          },
        },
      },
    })

    expect(getByText(`Search: ${shows[0].name}`)).toBeTruthy()
    expect(html()).toMatchSnapshot()
  })
})
