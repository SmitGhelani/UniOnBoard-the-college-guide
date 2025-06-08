import React from "react";
import "./coachingListingCard.css";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Coachingdet from "./Coachingdeta";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

<Routes>
  <Route exact path="/Coachingdet" component={Coachingdet} />
</Routes>;

const CoachingListingCard = (props) => {
  let navigate = useNavigate();
  const Id = props.id;

  return (
    <>
      <button
        className="exploreBtn"
        onClick={() => {
          props.setToggle(true);
          props.setIid(Id);
          navigate(`/CoachingDetailes/${props.id}`);
        }}
      >
        <Container className="clcMainContainer">
          <div className="card-box">
            <Row>
              <Col sm={1}>
                {/* Institute Image */}

                <img src={props.logo} alt="BVM" className="instituteImg" />
              </Col>

              <Col sm={10}>
                <p className="instituteName">{props.name}</p>
              </Col>

              <Row>
                <Col sm={1} className="LocationLogoCol">
                  <img
                    src="https://unionboard.smitghelani.site/location.png"
                    alt="LocationLogo"
                    className="instituteLocationImg"
                  />
                </Col>
                <Col className="iAddress" sm={11}>
                  {props.address}
                </Col>
              </Row>
              <Row>
                <Col sm={1} className="LocationLogoCol">
                  <img
                    src="https://unionboard.smitghelani.site/discount.png"
                    alt="LocationLogo"
                    className="instituteLocationImg"
                  />
                </Col>
                <Col className="iAddress" sm={11}>
                  Accepted Exams :- {props.acceptedExam}
                </Col>
              </Row>
              <Row>
                <Col sm={1} className="LocationLogoCol">
                  <img
                    src="https://unionboard.smitghelani.site/rupee.png"
                    alt="LocationLogo"
                    className="instituteLocationImg"
                  />
                </Col>
                <Col className="iAddress" sm={11}>
                  Approved By :- {props.approvedBy}
                </Col>
              </Row>
              <Row></Row>
            </Row>
          </div>
        </Container>
      </button>
    </>
  );
};

export default CoachingListingCard;
