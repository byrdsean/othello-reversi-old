import React, { useEffect, useState } from "react";
import HelpCenter from "../helpCenter/HelpCenter";
import Tile from "./tile/Tile";
import InitialGameBoard from "../../api/initialGameBoard.json";

const GameBoard = () => {
  const [boardData, setBoardData] = useState<number[][]>([]);

  useEffect(() => {
    //Load the game board
    setBoardData(InitialGameBoard.initialBoard);
  }, []);

  return (
    <div id="board" className="boardItem">
      <HelpCenter />
      <div id="gameBoard">
        {boardData.map((row) => (
          <div className="row">
            {row.map((tileValue) => (
              <Tile value={tileValue} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
