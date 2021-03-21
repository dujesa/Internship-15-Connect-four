import { useState } from "react";
import { players } from "../constants";

const InitializerForm = ({ onPlayerNamesSubmit, players, setPlayers }) => {
  const handleChange = ({ target: { name, value } }) => {
    setPlayers((prevPlayers) => ({ [name]: { ...[name], name: value } }));
  };

  return (
    <form
      className="initializer-form"
      className="initializer"
      onSubmit={onPlayerNamesSubmit}
    >
      <input
        value={players.playerOne.name}
        name="playerOne"
        onChange={handleChange}
        className="player-name-input"
        placeholder="Player one name"
      />
      <input
        value={players.playerTwo.name}
        name="playerTwo"
        onChange={handleChange}
        className="player-name-input"
        placeholder="Player two name"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default InitializerForm;
