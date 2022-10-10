import React from "react";
import PlayerScore from "./playerScore/PlayerScore";

const ScoreBoard = () => {
  return (
    <div id="score" className="boardItem">
      <div id="scoreBoard">
        <h2>Score:</h2>
        <PlayerScore type="black" />
        <PlayerScore type="white" />
      </div>
    </div>
  );
};

export default ScoreBoard;
