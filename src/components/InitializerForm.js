import { useState } from "react";

const InitializerForm = ({
  onPlayerNamesSubmit,
  players: {playerOne, playerTwo},
  setPlayers,
}) => {
  const handleChange = ({ target: { name, value } }) => {
    setPlayers(
      (prevPlayers) => (
        { ...prevPlayers ,  [name]: { ...prevPlayers[name], username: value } }
      )
    );
  };

  return (
    <form
      className="initializer-form"
      className="initializer"
      onSubmit={onPlayerNamesSubmit}
    >
      <input
        value={playerOne.username}
        name="playerOne"
        onChange={handleChange}
        className="player-name-input"
        placeholder="Player one name"
      />
      <input
        value={playerTwo.username}
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
