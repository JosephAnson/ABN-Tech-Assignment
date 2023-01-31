import { render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import Posters from "./Posters.vue"

import { shows } from "./__mocks__/showMock"

describe("Posters", () => {
  test("should not render posters", () => {
    const { html } = render(Posters, {
      props: {
        images: [],
      },
    })
    expect(html()).toMatchSnapshot()
  })

  test("should render posters", () => {
    const { html } = render(Posters, {
      props: {
        images: shows[0]._embedded.images,
      },
    })
    expect(html()).toMatchSnapshot()
  })
})
