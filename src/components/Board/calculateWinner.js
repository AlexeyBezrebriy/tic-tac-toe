export default function calculateWinner(squares) {
  const lines = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
  ]
  let winner = ""

  for (let index = 0; index < squares.length; index++) {
    let [a, b, c] = lines[index]
    if (squares[a]) {
      let player = squares[a]
      if (
        squares[a] === player &&
        squares[b] === player &&
        squares[c] === player
      ) {
        winner = `winner is ${player}`
      }
    }
  }
  return winner
}
