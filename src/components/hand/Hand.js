import React from "react";
import Card from "../card/Card.js";

const Hand = ({ cards }) => {
  return (
    <div>
      {cards.map((card, idx) => {
        return (
          <Card
            key={idx}
            name={card.name}
            src={card.src}
            points={card.points}
          />
        );
      })}
    </div>
  );
};

export default Hand;
