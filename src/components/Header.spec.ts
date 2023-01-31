import userEvent from "@testing-library/user-event"
import { cleanup, render } from "@testing-library/vue"
import { afterEach, describe, expect, test, vi } from "vitest"
import { useRoute, useRouter } from "vue-router"
import Header from "./Header.vue"

vi.mock("vue-router")

function createRenderHeader(name = "DefaultName") {
  vi.mocked(useRoute, { partial: true }).mockReturnValue({
    params: {
      name,
    },
  })

  vi.mocked(useRouter, { partial: true }).mockReturnValue({
    push: vi.fn().mockImplementation((name) => name),
  })

  return render(Header, {
    global: {
      components: {
        RouterLink: {
          template: `<a><slot /></a>`,
        },
      },
    },
  })
}

describe("Header", () => {
  afterEach(() => cleanup())

  test("should render header", () => {
    const { html } = createRenderHeader()
    expect(html()).toMatchSnapshot()
  })

  test("should not search title", async () => {
    const { getByRole } = createRenderHeader("")
    await userEvent.click(getByRole(/button/i))

    expect(useRouter().push).not.toHaveBeenCalled()
  })

  test("should search title", async () => {
    const { getByRole } = createRenderHeader("")

    const name = "Test Search 1"

    const textBox = getByRole(/searchbox/i)
    await userEvent.type(textBox, name)
    await userEvent.click(getByRole(/button/i))

    expect(useRouter().push).toHaveBeenCalledWith(`/find/${name}`)
  })
})
