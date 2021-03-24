import { useEffect, useState } from "react";

import Board from "./Board";
import Scoreboad from "./Scoreboard";
import CurrentPlayer from "./CurrentPlayer";
import WinnerModal from "./WinnerModal";
import { constructBoard } from "./../utils/defaults";
import { drop, calculateWinner, isDraw } from "./../utils/move";
import { newGameDetails } from "./../constants";

const Game = ({
  players: { playerOne, playerTwo },
  onGameWin,
  onScoreReset,
}) => {
  const [gameDetails, setGameDetails] = useState(newGameDetails);
  const [nextPlayerOnMove, setNextPlayerOnMove] = useState(playerOne);
  const [squares, setSquares] = useState(constructBoard);

  useEffect(() => {
    const gameWinner = calculateWinner(squares, playerOne, playerTwo);
    const isGameDraw = isDraw(squares);

    if (!gameWinner && !isGameDraw) return;

    if (isGameDraw) {
      setGameDetails({
        isOver: true,
        isDraw: true,
        winner: null,
      });

      return;
    }

    setGameDetails({
      isOver: true,
      isDraw: false,
      winner: gameWinner.color === playerOne.color ? "playerOne" : "playerTwo",
    });

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
    setGameDetails(newGameDetails);
  };

  return (
    <div className="game">
      {gameDetails.isOver && (
        <WinnerModal
          player={gameDetails.winner === "playerOne" ? playerOne : playerTwo}
          isDraw={gameDetails.isDraw}
          onNewGame={newGameHandler}
        />
      )}
      <CurrentPlayer player={nextPlayerOnMove} />

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
