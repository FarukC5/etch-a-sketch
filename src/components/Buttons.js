import React from "react";

const Buttons = ({ resetBoard, color, clearGrid, paintBlack, paintColor }) => {
  return (
    <div className="buttons">
      <button id="button" onClick={resetBoard}>
        Reset Board
      </button>

      <button id="button" onClick={paintBlack}>
        Black
      </button>

      <button id="button" onClick={paintColor}>
        Random Color
      </button>

      <button id="button" onClick={clearGrid}>
        Clear Board
      </button>
    </div>
  );
};

export default Buttons;
