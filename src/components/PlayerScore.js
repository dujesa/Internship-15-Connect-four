const PlayerScore = ({ name, points }) => {
    return (
        <div className="player-score">
            <span className="player-score__name">{name}</span>
            <span className="player-score__points">{points}</span>
        </div>
    );
}

export default PlayerScore;