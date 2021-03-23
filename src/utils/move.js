import { boardColumns, winningLines, playerColors } from "./../constants";

export const drop = (squares, squareNumber) => {
  const droppingSquareCandidates = boardColumns.find(
    (boardColumn) => boardColumn.column === squareNumber % 7
  ).squares;

  return droppingSquareCandidates.find((id) => squares[id] === null);
};

export const calculateWinner = (squares, playerOne, playerTwo) => {
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c, d] = winningLines[i];

    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d]
    ) {
      return squares[a] === playerColors.playerOne ? playerOne : playerTwo;
    }
  }
};
