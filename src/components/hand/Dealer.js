import React from "react";
import Hand from "./Hand.js";

const Dealer = ({ cards, flipped }) => {
  return (
    <div>
      <Hand cards={cards} flipped={flipped} />
    </div>
  );
};

export default Dealer;
