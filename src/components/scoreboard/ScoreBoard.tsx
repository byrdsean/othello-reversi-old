import React from "react";
import PlayerScore from "./playerScore/PlayerScore";
import { ScoreMetaData } from "./models/ScoreMetaData";
import { PlayerEnum } from "../../models/playerEnum";

const ScoreBoard: React.FC<ScoreMetaData> = ({ currentTurn }) => {
  return (
    <div id="score" className="boardItem">
      <div id="scoreBoard">
        <h2>Score:</h2>
        <PlayerScore type="black" />
        <PlayerScore type="white" />
      </div>
      <div id="turn" className="turnPanel">
        <h2>
          {`${currentTurn === PlayerEnum.PLAYER_BLACK ? "Your" : "Computer"}`}{" "}
          Turn
        </h2>
      </div>
    </div>
  );
};

export default ScoreBoard;
