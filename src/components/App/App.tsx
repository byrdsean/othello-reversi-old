import React from "react";
import "./App.css";

function App() {
  return (
    <div id="screen">
      <div id="score" className="boardItem">
        <div id="scoreBoard">
          <h2>Score:</h2>
          <div className="playerScore">
            <div className="disc black"></div> x 10
          </div>
          <div className="playerScore">
            <div className="disc white"></div> x 5
          </div>
        </div>
      </div>
      <div id="board" className="boardItem">
        <div id="helpCenter">
          <button id="instruction" className="btn">
            ?
          </button>
          <button id="a-btn" className="btn">
            A
          </button>
        </div>
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
      <div id="controls" className="boardItem">
        <button id="startGame">Start!</button>
        <button id="reset" disabled>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
