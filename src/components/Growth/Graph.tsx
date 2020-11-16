import React from "react";

import "./styles.css";

interface Props {
  price: number;
  hours: number;
  blueHeight: number;
  darkBlueHeight: number;
  height: number;
  width: number;
}

const Graph: React.FC<Props> = ({
  price,
  hours,
  blueHeight,
  darkBlueHeight,
  height,
  width,
}) => {
  return (
    <div
      id="graph"
      style={{
        height: height,
        width: width,
      }}
    >
      <div
        className="top-container"
        style={{
          height: darkBlueHeight,
        }}
      >
        <h1>$ {price}</h1>
        <h2>{hours} + hours</h2>
      </div>
      <div
        className="bottom-container"
        style={{
          height: blueHeight,
        }}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Graph;
