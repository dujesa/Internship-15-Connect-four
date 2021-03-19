import PlayerScore from "./PlayerScore";

const Scoreboad = () => {
  return (
    <div className="scoreboard">
      <PlayerScore name="Player1" points="11" />
      <PlayerScore name="Player2" points="22" />
      <button className="scoreboard__reset-button">Reset</button>
    </div>
  );
};

export default Scoreboad;
