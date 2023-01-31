import { cleanup, render } from "@testing-library/vue"
import { afterEach, describe, expect, test } from "vitest"
import ShowSlider from "./ShowSlider.vue"
import { shows } from "~/components/__mocks__/showMock"

function createRenderShowSlider(props: any) {
  return render(ShowSlider, {
    props,
    global: {
      components: {
        RouterLink: {
          template: `<a><slot /></a>`,
        },
      },
    },
  })
}

describe("ShowSlider", () => {
  afterEach(() => cleanup())

  test("should render show slider", async () => {
    const { html } = createRenderShowSlider({
      shows,
      id: "test-slider",
    })
    await nextTick() // Allows Slider to render
    expect(html()).toMatchSnapshot()
  })
})
