import { useState } from "react";
import Board from "./Board";
import CurrentPlayer from "./CurrentPlayer";
import Scoreboad from "./Scoreboard";
import WinnerModal from "./WinnerModal";

const Game = ({ players }) => {
  return (
    <div className="game">
      <Board players={players} />
      <Scoreboad />
    </div>
  );
};

export default Game;
