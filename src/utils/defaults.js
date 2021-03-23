export const constructPlayer = (color) => {
  return {
    username: "",
    color: color,
    score: 0,
  };
};

export const constructBoard = () => Array(42).fill(null);
