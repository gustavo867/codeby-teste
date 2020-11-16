import React from "react";

import "./styles.css";

import logo from "../../images/escalator.png";
import bgImg from "../../images/background-image.jpg";

const Escalator: React.FC = () => {
  return (
    <div id="container">
      <img className="background-image" src={bgImg} alt="background" />
      <div className="opacity" />
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h2>Escalator</h2>
      </div>
      <h1 className="ideas">we have ideas to growth your business</h1>
      <button className="btn-container">
        <h3>See now</h3>
      </button>
    </div>
  );
};

export default Escalator;
