import { render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import All from "./[...all].vue"

describe("All", () => {
  test("should render all page", async () => {
    const { html, getByText } = render(All)
    expect(getByText("We didn't find what you were looking for")).toBeTruthy()
    expect(html()).toMatchSnapshot()
  })
})
