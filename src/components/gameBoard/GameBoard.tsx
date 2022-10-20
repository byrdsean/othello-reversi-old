import React, { useEffect, useState } from "react";
import HelpCenter from "../helpCenter/HelpCenter";
import Tile from "./tile/Tile";
import InitialGameBoard from "../../api/initialGameBoard.json";
import { PlayerEnum } from "../../models/playerEnum";
import { expandBoard, flattenBoard } from "./util/BoardUtilities";
import { validateTile } from "./tile/util/Validation";

const GameBoard = () => {
  const [boardData, setBoardData] = useState<number[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);

  const setTile = (x: number, y: number) => {
    //Expand the board into a 2D array
    let fullBoard: number[][] = expandBoard(boardData);

    //Only set the tile if it is currently invalid
    if (!validateTile(fullBoard[y][x])) {
      fullBoard[y][x] = currentPlayer;
      setBoardData(flattenBoard(fullBoard));
    }
  };

  useEffect(() => {
    setCurrentPlayer(PlayerEnum.PLAYER_BLACK);

    //Load the game board
    setBoardData(flattenBoard(InitialGameBoard.initialBoard));
  }, []);

  return (
    <div id="board" className="boardItem">
      <HelpCenter />
      <div id="gameBoard">
        {expandBoard(boardData).map((row, rIndex) => (
          <div key={`r${rIndex}`} className="row">
            {row.map((tileValue, cIndex) => (
              <Tile
                key={`r${rIndex}c${cIndex}`}
                value={tileValue}
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
