import React from "react";

import "./styles.css";

interface Props {
  cardWidth?: number;
  cardHeight?: number;
  text: string;
  description: string;
  position: "left" | "right";
  imgUri: string;
}

const Card: React.FC<Props> = ({
  cardHeight,
  cardWidth,
  text,
  description,
  position,
  imgUri,
}) => {
  return (
    <div
      id="card"
      style={{
        height: cardHeight ? cardHeight : 300,
        width: cardWidth ? cardWidth : 400,
        alignItems: position === "left" ? "flex-start" : "flex-end",
        justifyContent: position === "left" ? "flex-start" : "right",
      }}
    >
      <img
        style={{
          height: cardHeight ? cardHeight : 300,
          width: cardWidth ? cardWidth : 400,
        }}
        src={imgUri}
        alt="img"
      />
      <h1 className="title">{text}</h1>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
