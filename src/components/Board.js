import { useState } from "react";

import Square from "./Square";
import { winningLines, boardRows, boardColumns } from "./../constants";


const Board = ({ onSquareDrop, squares }) => {

  /*const handleClick = (clickedSquareNumber) => {
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

    setWinner(calculateWinner(squares, players));

    const nextPlayerIndex = nextPlayerOnMove === players[0] ? 1 : 0;
    setNextPlayerOnMove(players[nextPlayerIndex]);
  };*/

  const renderSquare = (value, rowNumber, columnNumber) => {
    const squareNumber = rowNumber * 7 + columnNumber;

    return (
      <Square
        key={squareNumber}
        color={value}
        onClick={() => onSquareDrop(squareNumber)}
      />
    );
  }

  return (
    <div className="board">
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
