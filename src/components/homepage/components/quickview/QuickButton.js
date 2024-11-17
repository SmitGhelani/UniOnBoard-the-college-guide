import React from "react";
import { Button } from "react-bootstrap";

const QuickButton = (props) => {
  return (
    <div>
      <div>
        <Button className="quickviewbutton" size="lg" active>
          {props.btn1}
        </Button>
      </div>
    </div>
  );
};

export default QuickButton;
