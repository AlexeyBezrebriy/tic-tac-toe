import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import renderer from "react-test-renderer"
import Game from "./Game"

describe("Game test", () => {
  test("should display Board with history", () => {
    render(<Game />)
    const btn = screen.getAllByRole("button")
    expect(btn.length).toBe(10)
  })
  test("Game is render correctly", () => {
    const domTree = renderer.create(<Game />).toJSON()
    expect(domTree).toMatchSnapshot()
  })
})
