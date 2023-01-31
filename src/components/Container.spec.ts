import { render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import Container from "./Container.vue"

describe("Container", () => {
  test("should render container", () => {
    const { html } = render(Container, {
      slots: {
        default: "Contained Content",
      },
    })
    expect(html()).toMatchSnapshot()
  })
})
