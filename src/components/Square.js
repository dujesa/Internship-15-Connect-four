const Square = ({ color, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      <span className={`current-player__square--${color ? color : "white"}`}></span>
    </button>
  );
};

export default Square;
