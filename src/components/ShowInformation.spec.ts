import { cleanup, render } from "@testing-library/vue"
import { afterEach, describe, expect, test } from "vitest"
import ShowInformation from "./ShowInformation.vue"
import { shows } from "~/components/__mocks__/showMock"

function createRenderShowInformation(props: any) {
  return render(ShowInformation, {
    props,
  })
}

describe("ShowInformation", () => {
  afterEach(() => cleanup())

  test("should render show information", () => {
    const { html } = createRenderShowInformation({
      show: shows[0],
    })
    expect(html()).toMatchSnapshot()
  })
})
