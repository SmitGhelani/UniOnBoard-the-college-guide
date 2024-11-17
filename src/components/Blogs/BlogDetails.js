import React from "react";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Container, Row, Col } from "react-bootstrap";
import "./blogdetails.css";
import Addreview from "./Addreview";
import { useParams } from "react-router-dom";

const BlogDetails = (props) => {
  const [blogDetails, setBlogDetails] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  console.log(id);
  const authorid = id;
  // console.log(authorid)
  // const peticulerBlogURL = `/getParticularFacultyBlogs/${authorid}`;

  const peticulerBlogURL = `/getOneBlog/${authorid}`;
  useEffect(() => {
    // window.history.pushState("/");
    axios
      .get(peticulerBlogURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.blog);
        setBlogDetails(response.data.blog);
        setImgURL(response.data.blog.photo.secure_url);
        setTitle(response.data.blog.title);
        setContent(response.data.blog.content);
        setReviews(response.data.blog.reviews);
      });
  }, [peticulerBlogURL]);

  return (
    <>
      {/* {props.author} */}
      <Container className="blogDetContainer">
        {/* <Col xs={12} lg={12} className="blogImgCol"> */}
        <img className="blogImg" src={imgURL} alt="blog"></img>
        {/* </Col> */}
        <Row>
          <Row>
            <h1 className="pBlogTitle">{title}</h1>
          </Row>
          <Row className="blurContent">
            <Col xs={12}>
              <p>
                <span className="pBlogFirstLetter">{content.slice(0, 1)}</span>
                {content.slice(1, 300)}...
              </p>
            </Col>
          </Row>
          <Row className="remainingContent">
            <Col xs={12}>
              <p>{content.slice(300)}</p>
            </Col>
          </Row>
          <hr className="hrDivider" />
          <Row>
            <Row>
              <Col xs={6}>
                {reviews.slice(0, 3).map((reviewObj) => (
                  <Row>
                    <Col xs={12} md={6} className="reviewCard">
                      <Row>
                        <Col xs={6} md={6}>
                          <p className="nameOfReviewer">{reviewObj.name}</p>
                        </Col>
                        <Col xs={6} md={6}>
                          <p className="ratingOfReviewer">
                            Ratings :- {reviewObj.rating}
                          </p>
                        </Col>
                        <Row>
                          <p className="reviewOfReviewer">
                            Review:- {reviewObj.comment}
                          </p>
                        </Row>
                      </Row>
                    </Col>
                  </Row>
                ))}
              </Col>
              <Col xs={6}>
                <Addreview id={authorid} />
              </Col>
            </Row>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default BlogDetails;
