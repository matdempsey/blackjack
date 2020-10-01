import React from "react";

import "./Card.css";
import cardBack from "../../images/cards/back/regular_back.png";

const Card = ({ name, src, flipped }) => {
  if (flipped) {
    src = cardBack;
  }

  return <img className="card-img" src={src} alt={name} />;
};

export default Card;
