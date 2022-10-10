import React from "react";
import Controls from "../controls/Controls";
import ScoreBoard from "../scoreboard/ScoreBoard";
import GameBoard from "../gameBoard/GameBoard";
import "./App.css";

const App = () => {
  return (
    <div id="screen">
      <ScoreBoard />
      <GameBoard />
      <Controls />
    </div>
  );
};

export default App;
