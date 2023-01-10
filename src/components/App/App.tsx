import React from "react";
import Controls from "../controls/Controls";
import GameBoard from "../gameBoard/GameBoard";
import "./App.css";

const App = () => {
  return (
    <div id="screen">
      <GameBoard />
      <Controls />
    </div>
  );
};

export default App;
