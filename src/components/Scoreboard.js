import PlayerScore from "./PlayerScore";

const Scoreboad = ({playerOne, playerTwo}) => {
  return (
    <div className="scoreboard">
      <PlayerScore username={playerOne.username} score={playerOne.score} />
      <PlayerScore username={playerTwo.username} score={playerTwo.score} />
      <button className="scoreboard__reset-button">Reset</button>
    </div>
  );
};

export default Scoreboad;
