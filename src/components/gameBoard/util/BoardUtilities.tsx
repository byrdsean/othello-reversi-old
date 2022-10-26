import { TileMetaData } from "../models/TileMetaData";

const MAX_BOARD_LENGTH: number = 8;

export const flattenBoard = (board: TileMetaData[][]): TileMetaData[] => {
  return board.flat();
};

export const expandBoard = (flat: TileMetaData[]): TileMetaData[][] => {
  //Create the multidimensional array to build the board
  let board: TileMetaData[][] = [];
  for (let r = 0; r < MAX_BOARD_LENGTH; r++) {
    let newRow = flat.slice(
      r * MAX_BOARD_LENGTH,
      r * MAX_BOARD_LENGTH + MAX_BOARD_LENGTH
    );
    board = [...board, newRow];
  }
  return board;
};
