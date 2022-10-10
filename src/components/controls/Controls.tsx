import React from "react";

const Controls = () => {
  return (
    <div id="controls" className="boardItem">
      <button id="startGame">Start!</button>
      <button id="reset" disabled>
        Reset
      </button>
    </div>
  );
};

export default Controls;
