import React, { useEffect, useState } from "react";
import HelpCenter from "../helpCenter/HelpCenter";
import Tile from "./tile/Tile";
import InitialGameBoard from "../../api/initialGameBoard.json";
import { PlayerEnum } from "../../models/playerEnum";
import { expandBoard, flattenBoard } from "./util/BoardUtilities";
import { validateTile } from "./tile/util/Validation";
import { TileMetaData } from "./models/TileMetaData";

const GameBoard = () => {
  const [boardData, setBoardData] = useState<TileMetaData[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);

  const setTile = (x: number, y: number) => {
    //Expand the board into a 2D array
    let fullBoard: TileMetaData[][] = expandBoard(boardData);

    //Only set the tile if it is currently invalid
    if (!validateTile(fullBoard[y][x].value)) {
      fullBoard[y][x].value = currentPlayer;
      setBoardData(flattenBoard(fullBoard));
    }
  };

  useEffect(() => {
    setCurrentPlayer(PlayerEnum.PLAYER_BLACK);

    //Initialize the 2d game board to store metadata for each tile
    let initialBoard = InitialGameBoard.initialBoard.map<TileMetaData[]>(
      (row) => {
        return row.map<TileMetaData>((col) => {
          return {
            value: col,
            isValidPlacement: Math.floor(Math.random() * 10) / 2 === 0,
          };
        });
      }
    );
    setBoardData(flattenBoard(initialBoard));
  }, []);

  return (
    <div id="board" className="boardItem">
      <HelpCenter />
      <div id="gameBoard">
        {expandBoard(boardData).map((row, rIndex) => (
          <div key={`r${rIndex}`} className="row">
            {row.map((tileData, cIndex) => (
              <Tile
                key={`r${rIndex}c${cIndex}`}
                data={tileData}
                xCoord={cIndex}
                yCoord={rIndex}
                setTile={setTile}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
