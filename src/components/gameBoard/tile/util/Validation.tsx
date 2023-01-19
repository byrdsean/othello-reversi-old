import { PlayerEnum } from "../../../../models/playerEnum";

export const validateTile = (validate: number) => {
  return (
    validate === PlayerEnum.PLAYER_BLACK || validate === PlayerEnum.PLAYER_WHITE
  );
};

export const setDiscType = (value: number) => {
  switch (value) {
    case PlayerEnum.PLAYER_BLACK:
      return "black";
    case PlayerEnum.PLAYER_WHITE:
      return "white";
    default:
      return "";
  }
};

export const setValidTileCallout = (isValidPlacement: boolean): String => {
  return isValidPlacement ? "isValid" : "";
};

export const getOpposingPlayer = (currentPlayer: PlayerEnum): PlayerEnum => {
  return currentPlayer === PlayerEnum.PLAYER_BLACK
    ? PlayerEnum.PLAYER_WHITE
    : PlayerEnum.PLAYER_BLACK;
};
