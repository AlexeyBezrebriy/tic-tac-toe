import "@testing-library/jest-dom/extend-expect"
import calculateWinner from "./calculateWinner"

describe("testing winner", () => {
  test("tested empty array should return empty string", () => {
    const testArr = [null, null, null, null, null, null, null, null, null]
    expect(calculateWinner(testArr)).toBe("")
  })
  test("tested filled array should return empty string", () => {
    const testArr = ["X", "O", "X", "O", "X", "O", "O", "X", "O"]
    expect(calculateWinner(testArr)).toBe("")
  })
  test("should return winner on diagonal", () => {
    const testArr = ["X", "O", null, null, "X", null, null, null, "X"]
    expect(calculateWinner(testArr)).toBe("winner is X")
  })
  test("should return winner on vertical line", () => {
    const testArr = ["O", "X", null, "O", "X", null, "O", null, "X"]
    expect(calculateWinner(testArr)).toBe("winner is O")
  })
  test("should return winner on horizontal line", () => {
    const testArr = ["O", "O", "O", "X", "X", null, null, null, null]
    expect(calculateWinner(testArr)).toBe("winner is O")
  })
})
