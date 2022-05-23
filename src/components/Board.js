import React, { useState } from "react";
import Buttons from "./Buttons";
import Grid from "./Grid";

const Board = () => {
  const [gridSize, setGridSize] = useState(16);
  const [color, setColor] = useState("black");

  const clearGrid = () => {
    var elements = document.getElementsByClassName("square");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "white";
    }
    setColor("black");
  };

  const resetBoard = () => {
    const newGridSize = prompt("Enter a number in range from 16 to 100!");

    if (newGridSize !== null) {
      if (newGridSize < 16 || newGridSize > 100 || Number.isNaN(newGridSize)) {
        alert("Enter a number in range from 16 to 100!");
      } else if (newGridSize % 1 !== 0) {
        alert("The number must be an integer in range from 16 to 100!");
      } else {
        setGridSize(newGridSize);
      }
    }
    clearGrid();
  };

  const paintBlack = () => {
    setColor("black");
  };

  const paintColor = () => {
    setColor("");
  };

  return (
    <div className="board-wrapper">
      <Buttons
        resetBoard={resetBoard}
        clearGrid={clearGrid}
        paintBlack={paintBlack}
        paintColor={paintColor}
      />
      <div className="grid-container">
        <Grid gridSize={gridSize} color={color} />
      </div>
    </div>
  );
};

export default Board;
