import { render } from "@testing-library/vue"
import { describe, expect, test, vi } from "vitest"
import { useRoute } from "vue-router"
import App from "./App.vue"

vi.mock("@vueuse/head")
vi.mock("vue-router")

describe("App", () => {
  test("should render app", async () => {
    vi.mocked(useRoute, { partial: true }).mockReturnValue({
      params: {
        name: "Home",
      },
    })

    const { html } = render(App, {
      global: {
        components: {
          RouterView: {
            template: `RouterView`,
          },
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
