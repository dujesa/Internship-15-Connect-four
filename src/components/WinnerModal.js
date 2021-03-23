import PlayerScore from "./PlayerScore";

const WinnerModal = ({ player: { username, score }, onNewGame }) => {
  return (
    <div className="winner-modal">
      <div className="winner-modal__title">Pobjednik je:</div>
      <div className="winner-modal__player">
        <PlayerScore username={username} score={score} />
      </div>
      <button className="winner-modal__new-game" onClick={onNewGame}>New game</button>
    </div>
  );
};

export default WinnerModal;
