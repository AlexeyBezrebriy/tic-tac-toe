import { useState } from "react"
import Square from "../Square/Square"
import "./Board.css"

function Board(props) {
  const [state, setState] = useState({
    xIsNext: true,
    squares: Array(9).fill(null),
  })
  function clickChange(i) {
    const squares = state.squares.slice()
    if (!squares[i]) {
      squares[i] = state.xIsNext ? "X" : "O"
      setState({ xIsNext: !state.xIsNext, squares: squares })
    }
  }

  function renderSquare(i) {
    return <Square move={state.squares[i]} onClick={() => clickChange(i)} />
  }
  return (
    <>
      <h2 className="Board-head">Next player {state.xIsNext ? "X" : "O"}</h2>
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
