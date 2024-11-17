import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CityList = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="cities">
              <div
                className="imgdiv1"
                style={{ backgroundColor: props.color, border: props.border }}
              >
                <img className="imgcity" src={props.img} alt="citys" />
              </div>

              <div className="cityh5">
                <h5>{props.name}</h5>
              </div>

              <div className="cityp">
                <p className="pcity">{props.coaching}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CityList;
