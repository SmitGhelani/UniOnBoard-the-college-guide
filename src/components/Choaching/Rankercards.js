import React from "react";
import "./rankers.css";
import Card from "react-bootstrap/Card";

function Rankercards(props) {
  return (
    <>
      <Card className="rankerCard">
        <Card.Img variant="top" src={props.imgsrc} />
        <Card.Body className="rankerCardBody">
          <Card.ImgOverlay>
            <Card.Title className="rankerCardTitle">{props.title}</Card.Title>
          </Card.ImgOverlay>
          <Card.ImgOverlay>
            <Card.Text className="rankerCardTextdsg">
              {props.designation}
            </Card.Text>
          </Card.ImgOverlay>
          <Card.ImgOverlay>
            <Card.Text className="rankerCardTextdsc">
              {props.description}
            </Card.Text>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    </>
  );
}

export default Rankercards;
