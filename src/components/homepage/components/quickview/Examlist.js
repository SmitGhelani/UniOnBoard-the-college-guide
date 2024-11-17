import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import "./quickview.scss";

const Examlist = (props) => {
  return (
    <div>
      <div className="viewlist">
        <img className=" img me-2 viewimg " src={props.img} />
        <h6 className="name">{props.name}</h6>
      </div>
    </div>
  );
};

export default Examlist;
