import React from "react";
import { ITileValue } from "./models/ITileValue";
import { PlayerEnum } from "../../../models/playerEnum";

const Tile: React.FC<ITileValue> = ({ value }) => {
  const validateTile = (validate: number) => {
    return (
      validate == PlayerEnum.PLAYER_BLACK || validate == PlayerEnum.PLAYER_WHITE
    );
  };

  const setDiscType = (value: number) => {
    switch (value) {
      case PlayerEnum.PLAYER_BLACK:
        return "black";
      case PlayerEnum.PLAYER_WHITE:
        return "white";
      default:
        return "";
    }
  };

  return (
    <div className="tile">
      {validateTile(value) && (
        <div className={`disc ${setDiscType(value)}`}></div>
      )}
    </div>
  );
};

export default Tile;
