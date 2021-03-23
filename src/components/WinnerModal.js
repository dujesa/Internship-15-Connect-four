import PlayerScore from "./PlayerScore";

const WinnerModal = ({ player, onNewGame }) => {
  return (
    <div className="winner-modal">
      <div className="winner-modal__title">Pobjednik je:</div>
      <div className="winner-modal__player">
        <PlayerScore player={player} />
      </div>
      <button className="winner-modal__new-game" onClick={onNewGame}>
        New game
      </button>
    </div>
  );
};

export default WinnerModal;
