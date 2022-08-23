import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App tests", () => {
  test("should display Game", () => {
    render(<App />)
    const btn = screen.getAllByRole("button")
    expect(btn.length).toBe(10)
  })
})
