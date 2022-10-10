import React from "react";
import { IPlayerScoreProps } from "./models/IPlayerScoreProps";

const PlayerScore: React.FC<IPlayerScoreProps> = ({ type }) => {
  return (
    <div className="playerScore">
      <div className={`disc ${type}`}></div> x 10
    </div>
  );
};

export default PlayerScore;
