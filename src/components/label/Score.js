import React from "react";
import { Label } from "reactstrap";

const Score = ({ name, points }) => {
  return (
    <div>
      <Label>{`${name} Score: ${points}`}</Label>
    </div>
  );
};

export default Score;
