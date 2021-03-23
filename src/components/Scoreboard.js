import PlayerScore from "./PlayerScore";

const Scoreboad = ({playerOne, playerTwo, onScoreReset}) => {
  return (
    <div className="scoreboard">
      <PlayerScore username={playerOne.username} score={playerOne.score} />
      <PlayerScore username={playerTwo.username} score={playerTwo.score} />
      <button className="scoreboard__reset-button" onClick={onScoreReset}>Reset</button>
    </div>
  );
};

export default Scoreboad;
