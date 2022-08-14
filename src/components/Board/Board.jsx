import React from "react"
import Square from "../Square/Square"

function Board(props) {
  return (
    <>
      <h2 className="Board-head">`Next player`</h2>
      <div className="Board-grid">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

export default Board
