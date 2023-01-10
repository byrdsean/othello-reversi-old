import { PlayerEnum } from "../../../models/playerEnum";
import { TileMetaData } from "../models/TileMetaData";
import { validateTile } from "../tile/util/Validation";

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

// export const isNextPlacementValid = (
//   board: TileMetaData[][],
//   player: PlayerEnum
// ): TileMetaData[][] => {
//   for (let r = 0; r < MAX_BOARD_LENGTH; r++) {
//     for (let c = 0; c < MAX_BOARD_LENGTH; c++) {
//       if (validateTile(board[r][c].value) && board[r][c].value === player) {
//         checkSurroundingTiles(r - 1, c - 1, board);
//       } else {
//         board[r][c].isValidPlacement = false;
//       }
//     }
//   }
//   return board;
// };

// export const checkSurroundingTiles = (
//   startRow: number,
//   startColumn: number,
//   board: TileMetaData[][]
// ): void => {
//   for (let r = startRow; r < startRow + 3; r++) {
//     for (let c = startColumn; c < startColumn + 3; c++) {
//       if (
//         0 <= r &&
//         r <= MAX_BOARD_LENGTH &&
//         0 <= c &&
//         c <= MAX_BOARD_LENGTH &&
//         !validateTile(board[r][c].value)
//       ) {
//         board[r][c].isValidPlacement = true;
//       }
//     }
//   }
// };
