import React from "react";
import { ITileValue } from "./models/ITileValue";
import { validateTile, setDiscType } from "./util/Validation";

const Tile: React.FC<ITileValue> = ({
  value,
  xCoord,
  yCoord,
  setTile: setNewTile,
}) => {
  const setTile = () => {
    setNewTile(xCoord, yCoord);
  };

  return (
    <div className="tile" onClick={setTile}>
      {validateTile(value) && (
        <div className={`disc ${setDiscType(value)}`}></div>
      )}
    </div>
  );
};

export default Tile;
