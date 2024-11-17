import React from "react";
import { useState, useEffect } from "react";
import CoachingListingCard from "./CoachingListingCard";
import "./coachingListing.css";
import { Range, getTrackBackground } from "react-range";
import {
  Row,
  Col,
  ListGroup,
  Card,
  Form,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import axios from "../api/axios";

const CoachingListing = () => {
  const iListing_URL = "/getAllInstitute";
  const [iDetails, setIDetails] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [Iid, setIid] = useState(" ");
  const [sIndex, setSindex] = useState(0);
  const [eIndex, setEindex] = useState(10);
  const [curcat, setCurcat] = useState([]);
  const [allI, setAllI] = useState([]);
  const [values, setValues] = useState([0, 100000]);
  const [menuItems, setMenuItems] = useState([]);
  const [exam, setexams] = useState([]);

  const filterCity = (Val) => {
    if (curcat.includes(Val)) {
      const index = curcat.indexOf(Val);
      if (index > -1) {
        curcat.splice(index, 1);
      }
      console.log("cat", curcat);
      if (curcat.length === 0) {
        return setIDetails(allI);
      }
    } else {
      curcat.push(Val);
      console.log("add", curcat);
    }

    const newItem = allI.filter((newVal) => {
      return curcat.includes(newVal.city);
    });
    setIDetails(newItem);
  };

  const filterexam = (Values) => {
    if (curcat.includes(Values)) {
      const index = curcat.indexOf(Values);
      if (index > -1) {
        curcat.splice(index, 1);
      }
      console.log("cat", curcat);
      if (curcat.length === 0) {
        return setIDetails(allI);
      }
    } else {
      curcat.push(Values);
      console.log("add", curcat);
    }

    const newItem = allI.filter((newVal) => {
      // return newVal.city === curcat;
      return curcat.includes(newVal.acceptedExam);
    });
    setIDetails(newItem);
  };
  const filterFee = () => {
    if (curcat.length === 0) {
      const newItem = allI.filter((newVal) => {
        return (
          parseInt(newVal.fees) >= parseInt(values[0]) &&
          parseInt(newVal.fees) <= parseInt(values[1])
        );
      });
      setIDetails(newItem);
    } else {
      const temp_details = allI.filter((newVal) => {
        return curcat.includes(newVal.city);
      });
      const newItem = temp_details.filter((newVal) => {
        return (
          parseInt(newVal.fees) >= parseInt(values[0]) &&
          parseInt(newVal.fees) <= parseInt(values[1])
        );
      });
      setIDetails(newItem);
    }
  };
  useEffect(() => {
    axios.get(iListing_URL, {}).then((response) => {
      setIDetails(response.data.institutes);
      setAllI(response.data.institutes);
      setMenuItems([
        ...new Set(response.data.institutes.map((Val) => Val.city)),
      ]);
      setexams([
        ...new Set(
          response.data.institutes.map((Values) => Values.acceptedExam)
        ),
      ]);
    });
  }, []);

  return (
    <>
      <Container
        className="cListingContainer"
        style={{ display: toggle ? "none" : " " }}
      >
        <Row>
          <Col sm={12} lg={4}>
            <Card className="form-main" style={{ width: "20rem" }}>
              <Form className="filter-main">
                <ListGroup variant="flush">
                  <h4
                    style={{
                      marginTop: "5px",
                      fontWeight: "bold",
                      alignSelf: "center",
                    }}
                  >
                    Quick Search
                  </h4>
                  <hr />

                  <h5 style={{ marginTop: "18px", fontWeight: "bold" }}>
                    Location
                  </h5>
                  <ListGroup.Item style={{ height: "200px", overflow: "auto" }}>
                    {menuItems.map((Val, id) => {
                      return (
                        <>
                          <Form.Check
                            type="checkbox"
                            label={Val}
                            value={Val}
                            onChange={() => filterCity(Val)}
                          />
                        </>
                      );
                    })}
                    {/* </div> */}
                  </ListGroup.Item>
                  <h5 style={{ marginTop: "18px", fontWeight: "bold" }}>
                    Fee Range
                  </h5>
                  <ListGroup.Item>
                    <Range
                      values={values}
                      step="1"
                      min="0"
                      max="100000"
                      onChange={(values) => {
                        console.log(values);
                        setValues(values);
                        filterFee();
                      }}
                      renderTrack={({ props, children }) => (
                        <div
                          style={{
                            ...props.style,
                            height: "36px",
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <div
                            ref={props.ref}
                            style={{
                              height: "5px",
                              width: "100%",
                              borderRadius: "4px",
                              background: getTrackBackground({
                                values,
                                colors: ["#ccc", "#548BF4", "#ccc"],
                                min: "0",
                                max: "100000",
                              }),
                              alignSelf: "center",
                            }}
                          >
                            {children}
                          </div>
                        </div>
                      )}
                      renderThumb={({ props, isDragged }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: "42px",
                            width: "42px",
                            borderRadius: "4px",

                            backgroundColor: "#FFF",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0px 2px 6px #AAA",
                          }}
                        >
                          <div
                            style={{
                              height: "16px",
                              width: "5px",
                              backgroundColor: isDragged ? "#548BF4" : "#CCC",
                            }}
                          />
                        </div>
                      )}
                    />
                    <br />
                    <label>
                      {values[0]}-{values[1]}
                    </label>
                    <br />
                  </ListGroup.Item>
                  <h5 style={{ marginTop: "18px", fontWeight: "bold" }}>
                    Accepted Exams
                  </h5>
                  <ListGroup.Item>

                    {exam.map((Values, id) => {
                      return (
                        <>
                          <Form.Check
                            type="checkbox"
                            label={Values}
                            value={Values}
                            onChange={() => filterexam(Values)}
                          />
                        </>
                      );
                    })}
                  </ListGroup.Item>
                </ListGroup>
              </Form>
            </Card>
          </Col>

          <Col sm={12} lg={8}>
            <Row className="navigatePannel ">

              <Col xs={3} lg={2}>
                <button
                  className="navigateButton "
                  onClick={() => {
                    if (sIndex >= 10) {
                      setSindex(sIndex - 10);
                      setEindex(eIndex - 10);
                    }
                  }}
                >
                  Previous
                </button>
              </Col>
              <Col className="navigateText" xs={6} lg={2}>
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{sIndex + 1} - {eIndex}
              </Col>
              <Col xs={3} lg={2}>
                <button
                  className="navigateButton"
                  onClick={() => {
                    if (eIndex <= 196) {
                      setSindex(sIndex + 10);
                      setEindex(eIndex + 10);
                    }
                  }}
                >
                  Next
                </button>
              </Col>
            </Row>
            <div>
              {iDetails.slice(sIndex, eIndex).map((iObj) => (
                <CoachingListingCard
                  setToggle={setToggle}
                  setIid={setIid}
                  key={iObj._id}
                  id={iObj._id}
                  name={iObj.name}
                  address={iObj.address}
                  ratings={iObj.rating}
                  fees={iObj.fees}
                  logo={iObj.logo[0].secure_url}
                  acceptedExam={iObj.acceptedExam}
                  approvedBy={iObj.approvedBy}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CoachingListing;
