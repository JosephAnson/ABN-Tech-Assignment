import { render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import Button from "./Button.vue"

describe("Button", () => {
  test("should render button", () => {
    const buttonText = "Test Button"
    const { html, getByText } = render(Button, {
      slots: {
        default: buttonText,
      },
    })
    expect(getByText(buttonText)).toBeTruthy()
    expect(html()).toMatchSnapshot()
  })
})
