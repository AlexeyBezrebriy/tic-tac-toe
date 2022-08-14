import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import Board from "./Board"

describe("Display board", () => {
  test("should display next player", () => {
    render(<Board />)
    const linkElement = screen.getByText(/Next player/)
    expect(linkElement).toBeInTheDocument()
  })
  test("should display Square", () => {
    render(<Board />)
    const btn = screen.getAllByRole("button")
    expect(btn.length).toBe(9)
  })
})
