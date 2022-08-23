import { useState } from "react"
import Board from "../Board/Board"
import calculateWinner from "./calculateWinner"
import "./Game.css"

function Game() {
  const [state, setState] = useState({
    history: [
      {
        squares: Array(9).fill(null),
        xIsNext: true,
      },
    ],
    move: 0,
  })

  function clickChange(i) {
    const history = state.history.slice(0, state.move + 1)
    const currentSquares = state.history[history.length - 1].squares
    const currentPlayer = state.history[history.length - 1].xIsNext
    const squares = currentSquares.slice()
    if (winner || squares[i]) {
      return
    }
    squares[i] = currentPlayer ? "X" : "O"

    setState({
      history: history.concat([{ squares: squares, xIsNext: !currentPlayer }]),
      move: history.length,
    })
  }

  function moveHistory(move) {
    setState({ ...state, move: move })
  }

  const showHistory = state.history.map((item, move) => {
    return (
      <li key={move}>
        <button onClick={() => moveHistory(move)}>
          {move ? "Go to step" : "Go to start"}
        </button>
      </li>
    )
  })

  const currentSquares = state.history[state.move].squares
  const currentMove = state.history[state.move].xIsNext

  const winner = calculateWinner(currentSquares)
  let status = ""
  if (winner) {
    status = winner
  } else {
    status = `Next player ${currentMove ? "X" : "O"}`
  }

  return (
    <div className="Game-board">
      <Board
        status={status}
        squares={currentSquares}
        onClick={(i) => clickChange(i)}
      />

      <ol>{showHistory}</ol>
    </div>
  )
}

export default Game
