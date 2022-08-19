import "./Square.css"

function Square({ move, onClick }) {
  return (
    <button className="square" onClick={() => onClick()}>
      {move}
    </button>
  )
}

export default Square
