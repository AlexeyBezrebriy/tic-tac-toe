import Square from "../Square/Square"
import "./Board.css"

function Board({ squares, onClick, status }) {
  function renderSquare(i) {
    return <Square move={squares[i]} onClick={() => onClick(i)} />
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
