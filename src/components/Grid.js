import React from "react";
import Square from "./Square";

const Grid = ({ color, gridSize }) => {
  const dimension = 400 / gridSize;

  const createSquares = [];

  for (let i = 0; i < gridSize * gridSize; i++) {
    createSquares.push(<Square key={i} dimension={dimension} color={color} />);
  }

  const gridStyle = {
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
  };

  return (
    <div className="grid" style={gridStyle}>
      {createSquares}
    </div>
  );
};

export default Grid;
