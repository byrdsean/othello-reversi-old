import React from "react";
import HelpCenter from "../helpCenter/HelpCenter";

const GameBoard = () => {
  return (
    <div id="board" className="boardItem">
      <HelpCenter />
      <div id="gameBoard">
        <div className="row">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
        <div className="row">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
        <div className="row">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
        <div className="row">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile">
            <div className="disc white"></div>
          </div>
          <div className="tile">
            <div className="disc black"></div>
          </div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
        <div className="row">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile">
            <div className="disc black"></div>
          </div>
          <div className="tile">
            <div className="disc white"></div>
          </div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
        <div className="row">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
        <div className="row">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
        <div className="row">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
