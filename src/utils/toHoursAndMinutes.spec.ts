import { describe, expect, test } from "vitest"
import { toHoursAndMinutes } from "~/utils/toHoursAndMinutes"

describe("toHoursAndMinutes", () => {
  test.each([
    { minutes: 1, expected: "1m" },
    { minutes: 59, expected: "59m" },
    { minutes: 60, expected: "1h" },
    { minutes: 61, expected: "1h 1m" },
    { minutes: 300, expected: "5h" },
    { minutes: 3000, expected: "50h" },
  ])("toHoursAndMinutes($minutes) -> $expected", ({ minutes, expected }) => {
    expect(toHoursAndMinutes(minutes)).toBe(expected)
  })
})
