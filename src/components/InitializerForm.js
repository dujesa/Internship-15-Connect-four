const InitializerForm = ({
  onPlayerNamesSubmit,
  players: { playerOne, playerTwo },
  setPlayers,
  formErrors,
}) => {
  const handleChange = ({ target: { name, value } }) => {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [name]: { ...prevPlayers[name], username: value },
    }));
  };

  return (
    <form className="initializer-form" onSubmit={onPlayerNamesSubmit}>
      {formErrors.length > 0 && (
        <div className="initializer-form__errors">
          {formErrors.map((error) => (
            <p className="errors__message">{error}</p>
          ))}
        </div>
      )}
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
