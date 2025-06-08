import React from "react";
import "./faculty.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Facultycards from "./Facultycards";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Faculty(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="Facultyheading">MEET OUR FACULTY</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel
              breakPoints={breakPoints}
              itemPadding={[0, 22]}
              itemsToShow={3}
              easing="cubic-bezier(1,.15,.55,1.54)"
              tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
              transitionMs={500}
            >
              <Item>
                <Facultycards
                  title="Dr.Keyur Brahmbhatt"
                  description="AI & DATA ANALYSIS"
                  imgsrc="https://unionboard.smitghelani.site/keyurSir.jpg"
                />
              </Item>
              <Item>
                <Facultycards
                  title=" Dr.Zankhana Shah"
                  description="THEORY OF COMPUTATION"
                  imgsrc="https://unionboard.smitghelani.site/zankhanaMam.jpg"
                />
              </Item>
              <Item>
                <Facultycards
                  title=" Mr.Vishal Polara"
                  description="PYTHON PROGRAMMING"
                  imgsrc="https://unionboard.smitghelani.site/vishalSir.jpg"
                />
              </Item>
              <Item>
                <Facultycards
                  title=" Prachi Shah"
                  description="OPERATING SYSTEMS"
                  imgsrc="https://unionboard.smitghelani.site/prachiMam.jpg"
                />
              </Item>
              <Item>
                <Facultycards
                  title=" Mr.Priyank Bhojak"
                  description=".NET TECHNOLOGY"
                  imgsrc="https://unionboard.smitghelani.site/priyankSir.jpg"
                />
              </Item>
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

export default Faculty;
