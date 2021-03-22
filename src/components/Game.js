import { useEffect, useState } from "react";

import Board from "./Board";
import Scoreboad from "./Scoreboard";
import CurrentPlayer from "./CurrentPlayer";
import WinnerModal from "./WinnerModal";
import { constructBoard } from "./../utils/defaults";
import { drop, calculateWinner } from "./../utils/move";

const Game = ({ players: { playerOne, playerTwo }, onGameWin }) => {
  const [winner, setWinner] = useState(null);
  const [nextPlayerOnMove, setNextPlayerOnMove] = useState(playerOne);
  const [squares, setSquares] = useState(constructBoard);

  useEffect(() => {
    const gameWinner = calculateWinner(squares, playerOne, playerTwo);
    if (!gameWinner) return;

    setWinner(gameWinner);
    onGameWin(gameWinner);
  }, [squares]);

  const handleSquareDrop = (clickedSquareNumber) => {
    if (!!winner) return;

    const dropSquareIndex = drop(squares, clickedSquareNumber);
    const updatedSquares = squares.slice();
    if (squares[dropSquareIndex]) return;

    updatedSquares[dropSquareIndex] = nextPlayerOnMove.color;
    setSquares(updatedSquares);

    const nextPlayer = nextPlayerOnMove === playerOne ? playerTwo : playerOne;
    setNextPlayerOnMove(nextPlayer);
  };

  return (
    <div className="game">
      {winner ? (
        <WinnerModal player={winner} />
      ) : (
        <CurrentPlayer player={nextPlayerOnMove} />
      )}
      <Board
        playerOne={playerOne}
        playerTwo={playerTwo}
        onSquareDrop={handleSquareDrop}
        squares={squares}
      />
      <Scoreboad playerOne={playerOne} playerTwo={playerTwo}/>
    </div>
  );
};

export default Game;
