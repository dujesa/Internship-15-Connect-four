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
      <div className="initializer-form__players-container">
        <input
          value={playerOne.username}
          name="playerOne"
          onChange={handleChange}
          className="player-name-input player-one"
          placeholder="Player one name"
        />

        <input
          value={playerTwo.username}
          name="playerTwo"
          onChange={handleChange}
          className="player-name-input player-two"
          placeholder="Player two name"
        />

        {formErrors.length > 0 && (
          <div className="initializer-form__errors">
            {formErrors.map((error) => (
              <p className="errors__message">{error}</p>
            ))}
          </div>
        )}
      </div>
      <input
        type="submit"
        value="Start game!"
        className="initializer-form__start-button"
      />
    </form>
  );
};

export default InitializerForm;
