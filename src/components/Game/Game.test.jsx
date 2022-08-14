import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import Game from "./Game"

describe("Game test", () => {
  test("should display Board", () => {
    render(<Game />)
    const btn = screen.getAllByRole("button")
    expect(btn.length).toBe(9)
  })
})
