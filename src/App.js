import { useState } from "react";

import { constructPlayer } from "./utils/defaults";
import Game from "./components/Game";
import InitializerForm from "./components/InitializerForm";
import { playerColors } from "./constants";

const initialState = {
  playerOne: constructPlayer("yellow"),
  playerTwo: constructPlayer("red"),
};

const App = () => {
  const [players, setPlayers] = useState(initialState);
  const [arePlayersEntered, setArePlayersEntered] = useState(false);

  const playerNamesSubmitHandler = (event) => {
    event.preventDefault();
    const { playerOne, playerTwo } = players;
    let [playerOneName, playerTwoName] = [
      playerOne.username,
      playerTwo.username,
    ];

    if (playerOneName === playerTwoName) {
      playerOneName += "-1";
      playerTwoName += "-2";

      setPlayers((prevPlayers) => {
        return {
          playerOne: {
            ...prevPlayers.playerOne,
            username: playerOne.username + "-1",
          },
          playerTwo: {
            ...prevPlayers.playerTwo,
            username: playerTwo.username + "-2",
          },
        };
      });
    }

    setArePlayersEntered(true);
  };

  const gameWinHandler = (gameWinner) => {
    setPlayers((prevPlayers) => {
      const prevScore = gameWinner.score;
      const playerId =
        gameWinner.color === playerColors.playerOne ? "playerOne" : "playerTwo";

      return {
        ...prevPlayers,
        [playerId]: { ...gameWinner, score: prevScore + 1 },
      };
    });
  };

  return (
    <div>
      {arePlayersEntered ? (
        <Game players={players} onGameWin={gameWinHandler} />
      ) : (
        <InitializerForm
          onPlayerNamesSubmit={playerNamesSubmitHandler}
          players={players}
          setPlayers={setPlayers}
        />
      )}
    </div>
  );
};

export default App;
