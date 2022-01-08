import React, { useState, useEffect } from "react";
import "./App.scss";
import Square from "./Square";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  const [turn, setTurn] = useState("x");

  const [winner, setWinner] = useState("x");

  const newGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setTurn("x");
  };

  const handleClick = (index) => {
    if (board[index] === "") {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      setTurn(turn === "x" ? "o" : "x");
    }
  };

  useEffect(() => {}, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
      }}
      className="App"
    >
      <div className="board">
        <div className="board-row">
          {board.map((square, index) => (
            <Square
              key={index}
              value={square}
              handleClick={(e) => handleClick(index, e)}
            />
          ))}
        </div>
      </div>
      {winner && (
        <div className="new-game">
          <button onClick={newGame}>New Game</button>
          <p className="winner">{`${winner} wins`}</p>
        </div>
      )}
    </div>
  );
}

export default App;
