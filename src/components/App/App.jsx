import React from "react"
import Game from "../Game/Game"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <div className="App-container">
          <h1 className="App-header">Tic-tac-toe</h1>
          <Game />
        </div>
      </div>
    </div>
  )
}

export default App
