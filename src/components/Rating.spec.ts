import { render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import Rating from "./Rating.vue"

describe("Rating", () => {
  test("should render rating", () => {
    const { html } = render(Rating, {
      slots: {
        default: "4.7",
      },
    })
    expect(html()).toMatchSnapshot()
  })
})
