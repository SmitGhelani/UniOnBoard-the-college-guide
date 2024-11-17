import React from "react";
import "./ExploreMain.css";
import { bg } from "./picex.jpg";
import { Link } from "react-router-dom";
const ExploreMain = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${require("./5570863.jpg")})`,
          backgroundSize: "1640px 800px",
          backgroundRepeat: "no-repeat",
          opacity: "1",
        }}
      >
        <h1 style={{ paddingTop: "80px", opacity: "1", fontSize: "50px" }}>
          Explore This Our Feature Cards
        </h1>

        <div className="container explore">
          <Link to="/RankPredictor" style={{ textDecoration: "none" }}>
            <div className="explorecard">
              <h1 className="exploreheader" style={{ color: "black" }}>
                Predictor
              </h1>
              <div
                className="container"
                style={{
                  backgroundImage: `url(${require("./1605285-200.png")})`,
                  backgroundSize: "150px 150px",
                  width: "150px",
                  height: "150px",
                  alignSelf: "center",
                }}
              ></div>
              <div className="container explorecontent">
                <p style={{ fontWeight: "bolder", color: "black" }}>
                  This Rank Predicor can predict your rank according to your
                  Gujcet and Board merit.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/CollegeRecommender" style={{ textDecoration: "none" }}>
            <div className="explorecard2">
              <h1 className="exploreheader" style={{ color: "black" }}>
                Recommender
              </h1>
              <div
                className="container"
                style={{
                  backgroundImage: `url(${require("./1605285-200.png")})`,
                  backgroundSize: "200px 200px",
                  width: "200px",
                  height: "200px",
                  alignSelf: "center",
                }}
              ></div>
              <div className="container explorecontent">
                <p style={{ fontWeight: "bolder", color: "black" }}>
                  This Rank Predicor can predict your rank according to your
                  Gujcet and Board merit.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/CollegeComaparison" style={{ textDecoration: "none" }}>
            <div className="explorecard">
              <h1 className="exploreheader" style={{ color: "black" }}>
                Comparison
              </h1>
              <div
                className="container"
                style={{
                  backgroundImage: `url(${require("./1605285-200.png")})`,
                  backgroundSize: "150px 150px",
                  width: "150px",
                  height: "150px",
                  alignSelf: "center",
                }}
              ></div>
              <div className="container explorecontent">
                <p style={{ fontWeight: "bolder", color: "black" }}>
                  This Rank Predicor can predict your rank according to your
                  Gujcet and Board merit.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExploreMain;
