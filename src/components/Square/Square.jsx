import React from "react"

function Square(props) {
  const { value } = props
  return <button className="square">{value}</button>
}

export default Square
