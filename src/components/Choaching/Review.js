import React from "react";
import "./review.css";
import { Container, Row, Col } from "react-bootstrap";
import Reviewcard from "./Reviewcard";

const Review = () => {
  return (
    <>
      <Container fluid className="reviewHeadingContainer">
        <Container>
          <h1 className="reviewHeading">REVIEWS FROM OUR STUDENTS</h1>
          <Row className="reviewCardRow">
            <Col className="reviewCradColumn" sm={12} md={9} lg={4}>
              <Reviewcard
                name="Sneh Trivedi"
                designation="IT DEPT."
                src="https://unionboard.smitghelani.site/snehPic.jpg"
                description="One of the best college of Gujarat for pursuing an engineering. All Faculties are knowledgeable and supportive. College's infrastructur is also top-notch."
              />
            </Col>
            <Col className="reviewCradColumn" sm={12} md={9} lg={4}>
              <Reviewcard
                name="Anuj Gajjar"
                designation="CP DEPT."
                src="https://unionboard.smitghelani.site/anujPic.jpeg"
                description="One of the best college of Gujarat for pursuing an engineering. All Faculties are knowledgeable and supportive. College's infrastructur is also top-notch."
              />
            </Col>
            <Col className="reviewCradColumn" sm={12} md={9} lg={4}>
              <Reviewcard
                name="Kalp Gohil"
                designation="EC DEPT."
                src="https://unionboard.smitghelani.site/kalpPic.png"
                description="One of the best college of Gujarat for pursuing an engineering. All Faculties are knowledgeable and supportive. College's infrastructur is also top-notch."
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Review;
