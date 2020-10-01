import React from "react";
import Card from "../card/Card.js";

const Hand = ({ cards, flipped }) => {
  return (
    <div>
      {cards.map((card, idx) => {
        return <Card key={idx} src={card.src} flipped={flipped} />;
      })}
    </div>
  );
};

export default Hand;
