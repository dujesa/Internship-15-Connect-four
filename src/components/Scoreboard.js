import PlayerScore from "./PlayerScore";

const Scoreboad = ({ playerOne, playerTwo, onScoreReset }) => {
  return (
    <div className="scoreboard">
      Score:
      <PlayerScore player={playerOne} />
      <PlayerScore player={playerTwo} />
      <button className="scoreboard__reset-button" onClick={onScoreReset}>
        Reset
      </button>
    </div>
  );
};

export default Scoreboad;
