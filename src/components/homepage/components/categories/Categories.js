import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./categories.css";

const Categories = () => {
  return (
    <div>
      <h2 className="pt-4 mt-4 pb-4 mb-4  motiveh1">
        <b>Top Categories</b>
      </h2>
      <div className="cardmain">
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img
            variant="top"
            className="categoryimg me-4"
            src="./imgs/categories/green.png"
            alt="category"
          />
          <Card.Body>
            <Card.Title className="text-center cardtitle">
              <b>Entrance Exam</b>
            </Card.Title>
            <hr className="greenline" />
            <Card.Text className="text-center  pcard">
              The Civil Services Examination (CSE) is a nationwide competitive
              examination in India conducted by the Union Public Service
              Commission for recruitment. Exams like UPSC and GPSC
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="  card2">
          <Card.Img
            variant="top"
            className="categoryimg"
            src="./imgs/categories/pink.png"
            alt="category"
          />
          <Card.Body>
            <Card.Title className="text-center cardtitle">
              <b>College Guidance</b>
            </Card.Title>
            <hr className="pinkline" />
            <Card.Text className="text-center pcard">
              The Civil Services Examination (CSE) is a nationwide competitive
              examination in India conducted by the Union Public Service
              Commission for recruitment. Exams like UPSC and GPSC
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className=" card3">
          <Card.Img
            variant="top"
            className="categoryimg"
            src="./imgs/categories/blue.png"
            alt="category"
          />
          <Card.Body>
            <Card.Title className="text-center cardtitle ">
              <b>Latest Blog</b>
            </Card.Title>
            <hr className="blueline" />
            <Card.Text className="text-center pcard">
              The Civil Services Examination (CSE) is a nationwide competitive
              examination in India conducted by the Union Public Service
              Commission for recruitment. Exams like UPSC and GPSC
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Categories;
