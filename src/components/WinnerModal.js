import PlayerScore from "./PlayerScore";

const WinnerModal = ({ player: { name, points } }) => {
  return (
    <div className="winner-modal">
      <div className="winner-modal__title">Pobjednik je:</div>
      <div className="winner-modal__player">
        <PlayerScore name={name} points={points} />
      </div>
      <button className="winner-modal__new-game">New game</button>
    </div>
  );
};

export default WinnerModal;
