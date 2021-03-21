import { useState } from "react";

import Board from "./Board";
import Scoreboad from "./Scoreboard";

const Game = ({ players }) => {
  const [score, setScore] = useState(null);
  /*const [squares, setSquares] = useState(constructBoard);

  const handleSquareDrop = (clickedSquareNumber) => {
    if (!!winner) return;

    const dropSquareIndex = drop(squares, clickedSquareNumber);

    const updatedSquares = squares.slice();
    if (updatedSquares[dropSquareIndex] !== null) return;

    setSquares((previousSquares) => {
      const newSquare = previousSquares.map((square, index) => (
      index === droppingSquare && nextPlayerOnMove.color;
      ));
    });

    updatedSquares[dropSquareIndex] = nextPlayerOnMove.color;
    setSquares(updatedSquares);

    calculateWinner();

    const nextPlayerIndex = nextPlayerOnMove === players[0] ? 1 : 0;
    setNextPlayerOnMove(players[nextPlayerIndex]);
  };*/

  return (
    <div className="game">
      <Board players={players} />
      <Scoreboad />
    </div>
  );
};

export default Game;
