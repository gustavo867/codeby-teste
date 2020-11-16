import React from "react";
import Graph from "./Graph";

import "./styles.css";

const Growth: React.FC = () => {
  return (
    <div id="growth-container">
      <h1 className="absolute">growth plans</h1>
      <p>take your business to the next level</p>
      <div className="bottom">
        <Graph
          blueHeight={101}
          darkBlueHeight={101}
          height={202}
          hours={100}
          price={100}
          width={180}
        />
        <Graph
          blueHeight={150}
          darkBlueHeight={100}
          height={250}
          hours={180}
          price={150}
          width={200}
        />
        <Graph
          blueHeight={200}
          darkBlueHeight={100}
          height={300}
          hours={260}
          price={200}
          width={210}
        />
        <Graph
          blueHeight={250}
          darkBlueHeight={100}
          height={350}
          hours={380}
          price={250}
          width={210}
        />
        <Graph
          blueHeight={320}
          darkBlueHeight={100}
          height={420}
          hours={420}
          price={300}
          width={210}
        />
        <Graph
          blueHeight={400}
          darkBlueHeight={100}
          height={500}
          hours={520}
          price={350}
          width={210}
        />
      </div>
    </div>
  );
};

export default Growth;
