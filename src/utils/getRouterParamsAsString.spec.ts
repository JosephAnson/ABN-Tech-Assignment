import { describe, expect, test } from "vitest"
import { getRouterParamsAsString } from "~/utils/getRouterParamsAsString"

describe("getRouterParamsAsString", () => {
  const title = "Under the Dome"

  test("expect it to run a string when passed a string", () => {
    expect(getRouterParamsAsString(title)).toEqual(title)
  })

  test("expect it to run a string when passed a string array", () => {
    expect(getRouterParamsAsString([title])).toEqual(title)
  })
})
