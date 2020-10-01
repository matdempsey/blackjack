import React from "react";
import { Alert, Button } from "reactstrap";

import "./AlertMessage.css";

const AlertMesage = ({ message }) => {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <Alert className="alert" color="secondary">
        {message}
        <Button className="alert-btn" onClick={refresh}>
          Play Again
        </Button>
      </Alert>
    </div>
  );
};

export default AlertMesage;
