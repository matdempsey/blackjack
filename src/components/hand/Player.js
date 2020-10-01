import React from "react";
import Hand from "./Hand.js";

const Player = ({ cards }) => {
  return (
    <div>
      <Hand cards={cards} />
    </div>
  );
};

export default Player;
