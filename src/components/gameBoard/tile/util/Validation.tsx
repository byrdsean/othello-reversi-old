import { PlayerEnum } from "../../../../models/playerEnum";

export const validateTile = (validate: number) => {
  return (
    validate == PlayerEnum.PLAYER_BLACK || validate == PlayerEnum.PLAYER_WHITE
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
