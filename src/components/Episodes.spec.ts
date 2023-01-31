import { render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import Episodes from "./Episodes.vue"

import { shows } from "./__mocks__/showMock"

describe("Episodes", () => {
  test("should not render episodes", () => {
    const { html } = render(Episodes, {
      props: {
        episodes: [],
      },
    })
    expect(html()).toMatchSnapshot()
  })

  test("should render episodes", () => {
    const { html } = render(Episodes, {
      props: {
        episodes: shows[0]._embedded.episodes,
      },
    })
    expect(html()).toMatchSnapshot()
  })
})
