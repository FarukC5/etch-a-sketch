import React from "react";

const Square = ({ dimension, color }) => {
  const style = {
    margin: "auto",
    border: "1px solid black",
    width: dimension,
    height: dimension,
  };

  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);

  let randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  const painting = (e) => {
    color
      ? (e.target.style.backgroundColor = color)
      : (e.target.style.backgroundColor = randomColor);
  };

  return <div className="square" style={style} onMouseOver={painting}></div>;
};

export default Square;
