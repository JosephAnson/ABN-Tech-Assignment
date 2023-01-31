import { render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import Footer from "./Footer.vue"

describe("Footer", () => {
  test("should render footer", () => {
    const { html } = render(Footer)
    expect(html()).toMatchSnapshot()
  })
})
