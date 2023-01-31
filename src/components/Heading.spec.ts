import { cleanup, render } from "@testing-library/vue"
import { afterEach, describe, expect, test } from "vitest"
import Heading from "./Heading.vue"

function createRenderHeading(props = {}, text = "Heading") {
  return render(Heading, {
    props,
    slots: {
      default: text,
    },
  })
}

describe("Heading", () => {
  afterEach(() => cleanup())

  test("should render default heading", () => {
    const { html } = render(Heading)
    expect(html()).toMatchSnapshot()
  })

  const headings = ["h1", "h2", "h3", "h4"]
  for (const headingTag of headings) {
    for (const styled of headings) {
      test(`Should display heading ${headingTag} styled as ${styled}`, () => {
        const { html, getByRole } = createRenderHeading(
          {
            styled,
            h1: headingTag === "h1",
            h2: headingTag === "h2",
            h4: headingTag === "h4",
          },
          `Heading: ${headingTag}, Styled: ${styled}`
        )
        expect(
          getByRole("heading", { level: parseInt(headingTag.replace("h", "")) })
        )
        expect(html()).toMatchSnapshot()
      })
    }
  }

  test("should render bold heading", () => {
    const { html, getByText } = createRenderHeading({
      bold: true,
    })
    expect(getByText("Heading").classList.value).toContain("font-bold")
    expect(html()).toMatchSnapshot()
  })
})
