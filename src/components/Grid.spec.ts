import { render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import Grid from "./Grid.vue"

describe("Grid", () => {
  test("should render grid", () => {
    const { html } = render(Grid)
    expect(html()).toMatchSnapshot()
  })
})
