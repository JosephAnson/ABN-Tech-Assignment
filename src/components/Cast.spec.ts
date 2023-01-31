import { render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import Cast from "./Cast.vue"

import { shows } from "./__mocks__/showMock"

describe("Cast", () => {
  test("should not render cast", () => {
    const { html } = render(Cast, {
      props: {
        cast: [],
      },
    })
    expect(html()).toMatchSnapshot()
  })

  test("should render cast", () => {
    const { html } = render(Cast, {
      props: {
        cast: shows[0]._embedded.cast,
      },
    })
    expect(html()).toMatchSnapshot()
  })
})
