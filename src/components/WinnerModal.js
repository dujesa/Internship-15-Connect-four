import PlayerScore from "./PlayerScore";

const WinnerModal = ({ player, isDraw, onNewGame }) => {
  return (
    <div className="winner-modal">
      {isDraw ? (
        <div className="winner-modal__result">
          <h3 className="result__title">Game ended draw!</h3>
        </div>
      ) : (
        <div className="winner-modal__result">
          <h3 className="result__title">Winner:</h3>
          <div className="result__winner">
            <PlayerScore player={player} />
          </div>
        </div>
      )}
      <button className="winner-modal__new-game" onClick={onNewGame}>
        New game
      </button>
    </div>
  );
};

export default WinnerModal;
