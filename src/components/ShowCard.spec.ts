import { cleanup, render } from "@testing-library/vue"
import { afterEach, describe, expect, test } from "vitest"
import ShowCard from "./ShowCard.vue"
import { notFoundImage } from "~/utils/constants"

function createRenderShowCard(props: any) {
  return render(ShowCard, {
    props,
    global: {
      components: {
        RouterLink: {
          template: `<a><slot /></a>`,
        },
      },
    },
  })
}

describe("ShowCard", () => {
  const name = "Under the Dome"
  const rating = {
    average: 23,
  }
  const summary =
    "Under the Dome is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome."
  const image = "http://thisisanimage.com/"

  afterEach(() => cleanup())

  test("should render show card", () => {
    const { html, getByText } = createRenderShowCard({
      id: 23,
      name,
    })
    expect(getByText(name)).toBeTruthy()
    expect(html()).toMatchSnapshot()
  })

  test("should render show card rating", () => {
    const { html, getByText } = createRenderShowCard({
      id: 23,
      name,
      rating,
    })
    expect(getByText(rating.average)).toBeTruthy()
    expect(html()).toMatchSnapshot()
  })

  test("should render show card summary", () => {
    const { html, getByText } = createRenderShowCard({
      id: 23,
      name,
      summary: `<p>${summary}</p>`,
    })
    expect(getByText(summary)).toBeTruthy()
    expect(html()).toMatchSnapshot()
  })

  test("should render show card image not found", () => {
    const { html, getByRole } = createRenderShowCard({
      id: 23,
      name,
    })
    expect(getByRole("img")).toBeTruthy()
    expect(getByRole<HTMLImageElement>("img").src).toBe(notFoundImage)
    expect(html()).toMatchSnapshot()
  })

  test("should render show card image", () => {
    const { html, getByRole } = createRenderShowCard({
      id: 23,
      name,
      image,
    })
    expect(getByRole("img")).toBeTruthy()
    expect(getByRole<HTMLImageElement>("img").src).toBe(image)
    expect(html()).toMatchSnapshot()
  })

  test("should render full card image", () => {
    const { html } = createRenderShowCard({
      id: 23,
      name,
      rating,
      image,
      summary,
    })
    expect(html()).toMatchSnapshot()
  })
})
