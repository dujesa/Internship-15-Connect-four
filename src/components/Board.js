import Square from "./Square";
import { boardRows } from "./../constants";

const Board = ({ onSquareDrop, squares }) => {
  const renderSquare = (value, rowNumber, columnNumber) => {
    const squareNumber = rowNumber * 7 + columnNumber;

    return (
      <Square
        key={squareNumber}
        color={value}
        onClick={() => onSquareDrop(squareNumber)}
      />
    );
  };

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
