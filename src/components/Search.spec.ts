import userEvent from "@testing-library/user-event"
import { cleanup, render } from "@testing-library/vue"
import { afterEach, describe, expect, test } from "vitest"
import Search from "./Search.vue"

const searchName = "Under the Dome"

describe("Search", () => {
  afterEach(() => cleanup())

  test("should render search", () => {
    const { html } = render(Search, {
      props: {
        value: "",
      },
    })
    expect(html()).toMatchSnapshot()
  })

  test("should render search with all props", () => {
    const { html } = render(Search, {
      props: {
        id: "search-id",
        name: "search-id",
        value: "Under the Dome",
      },
    })
    expect(html()).toMatchSnapshot()
  })

  test("should emit changed value on input enter", async () => {
    const { emitted, getByRole } = render(Search, {
      props: {
        id: "search-id",
        name: "search-id",
        value: "",
      },
    })

    const search = await getByRole("searchbox")
    await userEvent.type(search, `${searchName}`)
    await userEvent.type(search, "{enter}")

    expect((search as HTMLInputElement).value).toEqual(searchName)
    expect(emitted<string>("update:value").at(-1)?.[0]).toEqual(searchName)
    expect(emitted<string>("enter")[0][0]).toEqual(searchName)
  })

  test("should emit changed value on button click", async () => {
    const { emitted, getByRole } = render(Search, {
      props: {
        id: "search-id",
        name: "search-id",
        value: "",
      },
    })

    const search = await getByRole("searchbox")
    const button = await getByRole("button")

    await userEvent.type(search, `${searchName}`)
    await userEvent.click(button)

    expect((search as HTMLInputElement).value).toEqual(searchName)
    expect(emitted<string>("enter")[0][0]).toEqual(searchName)
  })
})
