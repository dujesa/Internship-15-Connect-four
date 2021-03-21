import { useState } from "react";

import { constructPlayer } from "./utils/defaults";
import Game from "./components/Game";
import InitializerForm from "./components/InitializerForm";

const initialState = {
    playerOne: constructPlayer("yellow"),
    playerTwo: constructPlayer("red"),
};

const App = () => {
  const [players, setPlayers] = useState(initialState);

  const playerNamesSubmitHandler = (event) => {
    event.preventDefault();

    console.log(players);/*
    if (playerOneName === playerTwoName) {
      playerOneName += "-1";
      playerOneName += "-2";
    }

    setPlayers((prev) => {

      return {
        playerOne: { ...prev.players.playerOne, name: playerOneName },
        playerTwo: { ...prev.players.playerTwo, name: playerTwoName },
        valid: true,
      };
    });
*/
  };
  return (
    <div>
      <InitializerForm
        onPlayerNamesSubmit={
          (playerOneName, playerTwoName) => playerNamesSubmitHandler(playerOneName, playerTwoName)
        }
        playerOneName={players.playerOne.name}
        playerTwoName={players.playerTwo.name}
        setPlayers={setPlayers}
      />
    </div>
  );
};

export default App;
