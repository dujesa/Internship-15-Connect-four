const PlayerScore = ({ username, score }) => {
    return (
        <div className="player-score">
            <span className="player-score__name">{username}</span>
            <span className="player-score__points">{score}</span>
        </div>
    );
}

export default PlayerScore;