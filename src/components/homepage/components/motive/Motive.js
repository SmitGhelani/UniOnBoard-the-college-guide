import React from "react";
import "./motive.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Motive = () => {
  return (
    <div>
      <Container>
        <h2 className="  pb-4 mb-4  motiveh1">
          <b>Our Motive & Services</b>
        </h2>
        <Row>
          <Col md={6} className="colsmall">
            <div className="wrapper"></div>
            <div>
              <img
                className="motiveimg"
                src={"imgs/motive/Girl.png"}
                alt="picture"
              />
            </div>
          </Col>

          <Col md={6} className="colsmall">
            <div className="motivep">
              <p className="pt-4 mt-4 pb-4 mb-4 ">
                Our motive is mainly use for college admission dilemma of
                engineering.we have mentions all the colleges of Gujarat and
                their all details related to admissions. we have blogs and
                courses part so from that students can read their blog and watch
                their courses.We have also one interesting part that Blog and
                courses only uploaded by faculty only right now.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="pt-4 mt-4 pb-4 mb-4 ms-4 me-4">
          <Col md={4}>
            <div className="imgdiv">
              <img
                src="./imgs/motive/Search.png"
                alt="search button"
                className="motivesearch"
              />
            </div>
            <h5 className="h3heading text-center">
              <b>Search & get best Colleges</b>
            </h5>
            <p className="h3heading text-center">
              Get the best Colleges list by searching your dedicated exam name
            </p>
          </Col>

          <Col md={4}>
            <div className="imgdiv">
              <img
                src="./imgs/motive/Advantage.png"
                alt="offer button"
                className="motiveoffer"
              />
            </div>
            <h5 className="h3heading text-center">
              <b>
                Take advantage of
                <br />
                Admission{" "}
              </b>
            </h5>
            <p className="h3heading text-center">
              Get admission in one of the best Colleges through our platform
            </p>
          </Col>

          <Col md={4}>
            <div className="imgdiv">
              <img
                src="./imgs/motive/Coins.png"
                alt="coin button"
                className="motivecoin"
              />
            </div>
            <h5 className="h3heading text-center">
              <b>Use our site & Earn Offers</b>
            </h5>
            <p className="h3heading text-center">
              Your activity in our site will lead you and great offers
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Motive;
