import React from "react";
import "./rankers.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rankercards from "./Rankercards";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Rankers(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="rankerHeading">OUR ACHIEVERS</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel
              breakPoints={breakPoints}
              itemPadding={[0, 15]}
              itemsToShow={3}
              easing="cubic-bezier(1,.15,.55,1.54)"
              tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
              transitionMs={500}
            >
              <Item>
                <Rankercards
                  title="Sneh Trivedi"
                  designation="IT DEPT."
                  description="Web Lead - IEEE (2020-21) || Event Organiser - IEEE (2020)"
                  imgsrc="https://unionboard.smitghelani.site/snehPic.jpg"
                />
              </Item>
              <Item>
                <Rankercards
                  title="Anuj Gajjar"
                  designation="CP DEPT."
                  description="Stood first in the all India robotics event"
                  imgsrc="https://unionboard.smitghelani.site/anujPic.jpeg"
                />
              </Item>
              <Item>
                <Rankercards
                  title="Kalp Gohil"
                  designation="EC DEPT."
                  description="University Topper"
                  imgsrc="https://unionboard.smitghelani.site/kalpPic.png"
                />
              </Item>
              <Item>Four</Item>
              <Item>Five</Item>
              <Item>Six</Item>
              <Item>Seven</Item>
              <Item>Eight</Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Rankers;
