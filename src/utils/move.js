import { boardColumns, winningLines } from "./../constants";

export const drop = (squares, squareNumber) => {
  const droppingSquareCandidates = boardColumns.find(
    (boardColumn) => boardColumn.column === squareNumber % 7
  ).squares;

  return droppingSquareCandidates.find((id) => squares[id] === null);
};

export const calculateWinner = (squares, players) => {
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c, d] = winningLines[i];

    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d]
    ) {
      return players.find((player) => player.color === squares[a]);
    }
  }
};
