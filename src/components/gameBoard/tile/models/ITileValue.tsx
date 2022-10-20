export interface ITileValue {
  value: number;
  xCoord: number;
  yCoord: number;
  setTile: (x: number, y: number) => void;
}
