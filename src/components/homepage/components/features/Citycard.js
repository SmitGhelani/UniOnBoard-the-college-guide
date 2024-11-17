import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./feature.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "bootstrap/dist/css/bootstrap.min.css";

export const Citycard = (props) => {
  return (
    <div>
      <div className="pb-4">
        <Container>
          <Row>
            <Col>
              <div className=" pt-1 mt-1 pb-1 mb-1 d-flex justify-content-center align-items-center ">
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src={props.citylogo}
                    className="cardimgs"
                    alt="SVNIT"
                  />
                  <hr className="greenline" />
                  <Card.Body>
                    <Card.Title className="cardname">
                      <b>{props.name}</b>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {props.city}
                    </Card.Subtitle>
                    <Card.Text>{props.exam}</Card.Text>
                    <div>
                      <Card.Text>
                        <span className="bordericon">
                          <StarBorderIcon />
                          {props.website}
                        </span>
                        <br />
                        <span className="bordericon">
                          <CurrencyRupeeIcon className="ms-2 " /> {props.fee}
                        </span>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
