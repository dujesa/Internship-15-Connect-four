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
  const [initializerFormErrors, setInitializerFormErrors] = useState([]);
  const [arePlayersEntered, setArePlayersEntered] = useState(false);

  const playerNamesSubmitHandler = (event) => {
    event.preventDefault();
    const { playerOne, playerTwo } = players;

    if (!playerOne.username || !playerTwo.username) {
      setInitializerFormErrors([
        "Players must have usernames inputted to start game!",
      ]);

      return;
    }

    if (playerOne.username === playerTwo.username) {
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

  const scoreResetHandler = () => {
    setPlayers(({ playerOne, playerTwo }) => ({
      playerOne: { ...playerOne, score: 0 },
      playerTwo: { ...playerTwo, score: 0 },
    }));
  };

  return (
    <div className="connect-four-app">
      {arePlayersEntered ? (
        <Game
          players={players}
          onGameWin={gameWinHandler}
          onScoreReset={scoreResetHandler}
        />
      ) : (
        <InitializerForm
          onPlayerNamesSubmit={playerNamesSubmitHandler}
          formErrors={initializerFormErrors}
          players={players}
          setPlayers={setPlayers}
        />
      )}
    </div>
  );
};

export default App;
