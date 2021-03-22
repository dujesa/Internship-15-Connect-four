export const constructPlayer = (color) => {
  return {
    username: "",
    color: color,
    score: null,
  };
};

export const constructBoard = () => Array(42).fill(null);
