export const constructPlayer = (color) => {
  return {
    name: null,
    color: color,
    points: null,
  };
};

export const constructBoard = () => Array(42).fill(null);
