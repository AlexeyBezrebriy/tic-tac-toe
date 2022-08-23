import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import Board from "./Board"

describe("Display board", () => {
  const testSquares = Array(9).fill(null)
  test("should display next player", () => {
    render(<Board squares={testSquares} status={"Next player"} />)
    const linkElement = screen.getByText(/Next player/)
    expect(linkElement).toBeInTheDocument()
  })
  test("should display Square", () => {
    render(<Board squares={testSquares} />)
    const btn = screen.getAllByRole("button")
    expect(btn.length).toBe(9)
  })
})
