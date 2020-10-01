import React from "react";
import { Label } from "reactstrap";

import "./Score.css";

const Score = ({ name, points, hidden }) => {
  return (
    <div>
      <Label hidden={hidden}>{`${name} Score: ${points}`}</Label>
    </div>
  );
};

export default Score;
