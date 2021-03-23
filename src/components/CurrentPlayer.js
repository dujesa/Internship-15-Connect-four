const CurrentPlayer = ({ player: { username, color } }) => {
  return <div className="current-player">Current player: {username}<span className={`current-player__square--${color}`}></span></div>;
};

export default CurrentPlayer;
