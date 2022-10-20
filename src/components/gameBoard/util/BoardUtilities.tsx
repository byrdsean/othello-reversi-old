const MAX_BOARD_LENGTH: number = 8;

export const flattenBoard = (board: number[][]): number[] => {
  //   return board.flat().map((v) => {
  //     return {
  //       value: v,
  //       isOriginal: v !== 0,
  //     };
  //   });
  return board.flat();
};

export const expandBoard = (flat: number[]): number[][] => {
  //Create the multidimensional array to build the board
  let board: number[][] = [];
  for (let r = 0; r < MAX_BOARD_LENGTH; r++) {
    let newRow = flat.slice(
      r * MAX_BOARD_LENGTH,
      r * MAX_BOARD_LENGTH + MAX_BOARD_LENGTH
    );
    board = [...board, newRow];
  }
  return board;
};
