import { useState } from "react";

const Square = ({ color, onClick}) => {
  return (
    <button
      className={`square ${!!color ? color : ""}`}
      onClick={() => onClick()}
    >
        O
    </button>
  );
};

export default Square;
