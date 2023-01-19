import { PlayerEnum } from "../../../models/playerEnum";
import { TileMetaData } from "../models/TileMetaData";
import { validateTile, getOpposingPlayer } from "../tile/util/Validation";

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

//Check if the new tile being placed is next to a tile of the opposing color
export const isNextPlacementValid = (
  x: number,
  y: number,
  board: TileMetaData[][],
  player: PlayerEnum
): boolean => {
  if (validateTile(board[y][x].value)) {
    return false;
  }

  const isValidY = (y_index: number): boolean => {
    return 0 <= y_index && y_index < board.length;
  };

  const isValidX = (x_index: number, y_index: number): boolean => {
    return (
      0 <= x_index &&
      x_index < board[y_index].length &&
      !(x_index === x && y_index === y)
    );
  };

  const opposingPlayer: PlayerEnum = getOpposingPlayer(player);
  for (let scrollY = y - 1; scrollY <= y + 1; scrollY++) {
    if (!isValidY(scrollY)) continue;

    for (let scrollX = x - 1; scrollX <= x + 1; scrollX++) {
      if (!isValidX(scrollX, scrollY)) continue;

      if (board[scrollY][scrollX].value === opposingPlayer) {
        return true;
      }
    }
  }

  return false;
};
