export const playerColors = {
  playerOne: "yellow",
  playerTwo: "red",
};

export const boardRows = [
  { start: 0, stop: 6 },
  { start: 7, stop: 13 },
  { start: 14, stop: 20 },
  { start: 21, stop: 27 },
  { start: 28, stop: 34 },
  { start: 35, stop: 41 },
];

export const boardColumns = [
  { column: 0, squares: [35, 28, 21, 14, 7, 0] },
  { column: 1, squares: [36, 29, 22, 15, 8, 1] },
  { column: 2, squares: [37, 30, 23, 16, 9, 2] },
  { column: 3, squares: [38, 31, 24, 17, 10, 3] },
  { column: 4, squares: [39, 32, 25, 18, 11, 4] },
  { column: 5, squares: [40, 33, 26, 19, 12, 5] },
  { column: 6, squares: [41, 34, 27, 20, 13, 6] },
];

export const winningLines = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],

  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],

  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],

  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],

  [28, 29, 30, 31],
  [29, 30, 31, 31],
  [30, 31, 32, 33],
  [31, 32, 33, 34],

  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],

  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],

  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],

  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16, 23, 30, 37],

  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17, 24, 31, 38],

  [4, 11, 18, 25],
  [11, 18, 25, 32],
  [18, 25, 32, 39],

  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [19, 26, 33, 40],

  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],

  [3, 9, 15, 21],
  [3, 11, 19, 27],
  [14, 22, 30, 38],
  [20, 26, 32, 38],

  [4, 10, 16, 22],
  [10, 16, 22, 28],
  [13, 19, 25, 31],
  [19, 25, 31, 37],
  [7, 15, 23, 31],
  [15, 23, 31, 39],
  [2, 10, 18, 26],
  [10, 18, 26, 34],

  [5, 11, 17, 23],
  [11, 17, 23, 29],
  [17, 23, 29, 35],
  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [18, 24, 30, 36],
  [0, 8, 16, 24],
  [8, 16, 24, 32],
  [16, 24, 32, 40],
  [1, 9, 17, 25],
  [9, 17, 25, 33],
  [17, 25, 33, 41],
];
