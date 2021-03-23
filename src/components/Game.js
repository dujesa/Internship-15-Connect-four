import { useEffect, useState } from "react";

import Board from "./Board";
import Scoreboad from "./Scoreboard";
import CurrentPlayer from "./CurrentPlayer";
import WinnerModal from "./WinnerModal";
import { constructBoard } from "./../utils/defaults";
import { drop, calculateWinner } from "./../utils/move";

const Game = ({
  players: { playerOne, playerTwo },
  onGameWin,
  onScoreReset,
}) => {
  const [gameDetails, setGameDetails] = useState({
    isOver: false,
    winner: null,
  });
  const [nextPlayerOnMove, setNextPlayerOnMove] = useState(playerOne);
  const [squares, setSquares] = useState(constructBoard);

  useEffect(() => {
    const gameWinner = calculateWinner(squares, playerOne, playerTwo);
    if (!gameWinner) return;

    setGameDetails((prevGameDetails) => ({
      isOver: true,
      winner: gameWinner.color === playerOne.color ? "playerOne" : "playerTwo",
    }));
    onGameWin(gameWinner);
  }, [squares]);

  const handleSquareDrop = (clickedSquareNumber) => {
    if (gameDetails.isOver) return;

    const dropSquareIndex = drop(squares, clickedSquareNumber);
    const updatedSquares = squares.slice();
    if (squares[dropSquareIndex]) return;

    updatedSquares[dropSquareIndex] = nextPlayerOnMove.color;
    setSquares(updatedSquares);

    const nextPlayer = nextPlayerOnMove === playerOne ? playerTwo : playerOne;
    setNextPlayerOnMove(nextPlayer);
  };

  const newGameHandler = () => {
    setSquares(constructBoard);
    setGameDetails({
      isOver: false,
      winner: null,
    });
  };

  return (
    <div className="game">
      {gameDetails.isOver ? (
        <WinnerModal
          player={gameDetails.winner === "playerOne" ? playerOne : playerTwo}
          onNewGame={newGameHandler}
        />
      ) : (
        <CurrentPlayer player={nextPlayerOnMove} />
      )}
      <Board
        playerOne={playerOne}
        playerTwo={playerTwo}
        onSquareDrop={handleSquareDrop}
        squares={squares}
      />
      <Scoreboad
        playerOne={playerOne}
        playerTwo={playerTwo}
        onScoreReset={onScoreReset}
      />
    </div>
  );
};

export default Game;
