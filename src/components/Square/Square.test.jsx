import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import Square from "./Square"

const x = "X"

describe("Square Test", () => {
  test("should display square with X", () => {
    render(<Square move={x} />)
    expect(screen.getByText(/X/)).toBeInTheDocument()
  })
  test("should display square with className square", () => {
    render(<Square />)

    expect(screen.getByRole("button")).toHaveClass("square")
  })
})
