import React from "react";

import "./Card.css";

const Card = ({ name, src }) => {
  return <img className="card-img" src={src} alt={name} />;
};

export default Card;
