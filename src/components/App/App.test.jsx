import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("should display div", () => {
  render(<App />)
  expect(screen.getByText(/Header/i)).toBeInTheDocument()
})
