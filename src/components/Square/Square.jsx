import React from "react"

function Square(props) {
  const { value } = props
  return (
    <button role={"btn"} className="square">
      {value}
    </button>
  )
}

export default Square
