import { TileMetaData } from "../../models/TileMetaData";

export interface ITileValue {
  data: TileMetaData;
  xCoord: number;
  yCoord: number;
  setTile: (x: number, y: number) => void;
}
