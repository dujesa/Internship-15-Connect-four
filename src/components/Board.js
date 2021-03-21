import { useState } from "react";

import Square from "./Square";
import { players, winningLines, boardRows, boardColumns } from "./../constants";
import { constructBoard } from "./../utils/defaults";
import { drop, calculateWinner } from "./../utils/move";
import CurrentPlayer from "./CurrentPlayer";
import WinnerModal from "./WinnerModal";

const Board = ({ players }) => {
  const [squares, setSquares] = useState(constructBoard);
  const [nextPlayerOnMove, setNextPlayerOnMove] = useState(players[0]);
  const [winner, setWinner] = useState(null);

  const handleClick = (clickedSquareNumber) => {
    if (!!winner) return;

    const dropSquareIndex = drop(squares, clickedSquareNumber);

    const updatedSquares = squares.slice();
    if (updatedSquares[dropSquareIndex] !== null) return;

    /*setSquares((previousSquares) => {
      const newSquare = previousSquares.map((square, index) => (
      index === droppingSquare && nextPlayerOnMove.color;
      ));
    });*/

    updatedSquares[dropSquareIndex] = nextPlayerOnMove.color;
    setSquares(updatedSquares);

    setWinner(calculateWinner(squares, players));

    const nextPlayerIndex = nextPlayerOnMove === players[0] ? 1 : 0;
    setNextPlayerOnMove(players[nextPlayerIndex]);
  };

  function renderSquare(value, rowNumber, columnNumber) {
    const squareNumber = rowNumber * 7 + columnNumber;

    return (
      <Square
        key={squareNumber}
        color={value}
        onClick={handleClick}
        onClick={() => {
          handleClick(squareNumber);
        }}
      />
    );
  }

  return (
    <div className="board">
      {winner ? (
        <WinnerModal player={winner} />
      ) : (
        <CurrentPlayer player={nextPlayerOnMove} />
      )}

      {boardRows.map((row, i) => (
        <div className="board-row">
          {squares
            .slice(row.start, row.stop + 1)
            .map((squareValue, j) => renderSquare(squareValue, i, j))}
        </div>
      ))}
    </div>
  );
};

export default Board;
