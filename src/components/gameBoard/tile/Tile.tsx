import React from "react";
import { ITileValue } from "./models/ITileValue";
import {
  validateTile,
  setDiscType,
  setValidTileCallout,
} from "./util/Validation";

const Tile: React.FC<ITileValue> = ({
  data,
  xCoord,
  yCoord,
  setTile: setNewTile,
}) => {
  const setTile = () => {
    setNewTile(xCoord, yCoord);
  };

  return (
    <div
      onClick={setTile}
      className={`tile ${setValidTileCallout(data.isValidPlacement)}`}
    >
      {validateTile(data.value) && (
        <div className={`disc ${setDiscType(data.value)}`}></div>
      )}
    </div>
  );
};

export default Tile;
