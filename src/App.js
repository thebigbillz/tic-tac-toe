import React, { useState, useEffect } from "react";
import "./App.scss";
import Square from "./Square";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  const [turn, setTurn] = useState("x");

  const [winner, setWinner] = useState("");

  const newGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setTurn("x");
    setWinner("");
  };

  const checkWinner = (bd) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const winningCombo = winningCombos.some((combo) => {
      const [a, b, c] = combo;
      return bd[a] && bd[a] === bd[b] && bd[a] === bd[c];
    });
    if (winningCombo) {
      setWinner(turn);
    }
  };

  const handleClick = (index) => {
    if (board[index] === "" && winner === "") {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      checkWinner(newBoard);
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
          <p className="winner">
            Player{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              "{winner.toUpperCase()}"
            </span>{" "}
            Wins
          </p>
          <h3
            style={{
              backgroundColor: "#c74848",
              color: "whitesmoke",
              padding: "1.5rem",
              cursor: "pointer",
            }}
            onClick={newGame}
          >
            New Game
          </h3>
        </div>
      )}
      {!winner && board.every((bg) => bg || false) && (
        <div className="new-game">
          <p className="winner">Tie Game</p>
          <h3
            style={{
              backgroundColor: "#c74848",
              color: "whitesmoke",
              padding: "1.5rem",
              cursor: "pointer",
            }}
            onClick={newGame}
          >
            New Game
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
