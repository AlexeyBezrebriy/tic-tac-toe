import { useState } from "react"
import Square from "../Square/Square"
import "./Board.css"
import calculateWinner from "./calculateWinner"

function Board(props) {
  const [state, setState] = useState({
    xIsNext: true,
    squares: Array(9).fill(null),
  })

  function clickChange(i) {
    const squares = state.squares.slice()
    if (winner || squares[i]) {
      return
    }
    squares[i] = state.xIsNext ? "X" : "O"
    setState({ xIsNext: !state.xIsNext, squares: squares })
  }

  function renderSquare(i) {
    return <Square move={state.squares[i]} onClick={() => clickChange(i)} />
  }

  const winner = calculateWinner(state.squares)
  let status = ""
  if (winner) {
    status = winner
  } else {
    status = `Next player ${state.xIsNext ? "X" : "O"}`
  }

  return (
    <>
      <h2 className="Board-head">{status}</h2>
      <div className="Board-grid">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  )
}

export default Board
