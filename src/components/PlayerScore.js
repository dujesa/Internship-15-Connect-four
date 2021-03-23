const PlayerScore = ({ username, score }) => {
    return (
        <div className="player-score">
            <span className="player-score__name">Player name:{username}</span>
            <span className="player-score__points">Score: {score}</span>
        </div>
    );
}

export default PlayerScore;