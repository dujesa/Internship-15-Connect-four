const PlayerScore = ({ player: { username, score, color } }) => {
  return (
    <div className="player-score">
      <span className={`current-player__square--${color}`}></span>
      <span className="player-score__name">{username}:</span>
      <span className="player-score__points"> {score}</span>
    </div>
  );
};

export default PlayerScore;
