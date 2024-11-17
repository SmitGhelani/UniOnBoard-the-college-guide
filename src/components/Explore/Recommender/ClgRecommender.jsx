import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import "./ClgRecommender.css";
const ClgRecommender = () => {
  const [rank, setRank] = useState(null);
  const [cat, setCat] = useState(null);
  const [loc, setLoc] = useState(null);
  const [branch, setBranch] = useState(null);
  const [pref, setPref] = useState(null);
  const [maxfee, setMaxfee] = useState(null);
  const [cities, setCities] = useState([]);
  const [branches, setBranches] = useState([]);
  const [clgs, setClgs] = useState([]);
  const [data, setData] = useState([]);
  const OnRecommender = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        rank: rank,
        location: loc,
        category: cat,
        branch: branch,
        collegePreference: pref,
        maxFee: maxfee,
      }),
    };
    fetch(
      "https://unionboard-backend.smitghelani.xyz/collegeRecommander",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setData(data.result));
    setBranch(null);
    setCat(null);
    setLoc(null);
    setPref(null);
    setRank(null);
    setMaxfee(null);

    const container = document.getElementsByClassName(
      "mainPanelRecommander"
    )[0];

    container.style.height = "100%";
  };
  useEffect(() => {
    axios
      .get("https://unionboard-backend.smitghelani.xyz/getCityList")
      .then((response) => {
        console.log(response.data.cities);
        setCities(response.data.cities);
      });
    axios
      .get("https://unionboard-backend.smitghelani.xyz/getBranchList")
      .then((response) => {
        console.log(response.data.branches);
        setBranches(response.data.branches);
      });
    axios
      .get("https://unionboard-backend.smitghelani.xyz/getCollegeList")
      .then((response) => {
        setClgs(response.data.colleges);
      });
  }, []);
  return (
    <>
      {/* rank, location, category, branch, collegePreference, maxFee */}
      <div
        className="container mainPanelRecommander"
        style={{
          height: "100vh",
          alignContent: "center",
          marginTop: "20px",
          marginBottom: "0px",
        }}
      >
        {/* <h3>College Recommander</h3> */}
        <form style={{ marginTop: "10px" }}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Your Rank</label>
              <input
                type="number"
                className="form-control"
                id="inputEmail4"
                placeholder="Enter Your ACPC Rank"
                name="rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
              />
            </div>
            <div className="form-group col-md-2">
              <label for="inputState">Category</label>
              <select
                id="inputState"
                className="form-control"
                name="cat"
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              >
                <option selected>Choose...</option>
                {/* OPEN/SC/ST/SEBC/EWS/AIOP */}
                <option value="OPEN">Open</option>
                <option value="EWS">EWS</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="SEBC">SEBC</option>
                <option value="AIOP">AIOP</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">Location</label>
              <select
                id="inputState"
                className="form-control"
                name="loc"
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
              >
                <option selected>Choose...</option>
                {cities.map((val, i) => {
                  return (
                    <>
                      <option value={val}>{val}</option>
                    </>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputState">Branch</label>
              <select
                id="inputState"
                className="form-control"
                name="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <option selected>Choose...</option>
                {branches.map((val, i) => {
                  return (
                    <>
                      <option value={val}>{val}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="form-group col-md-4 px-4">
              <label for="formControlRange">Max Fee</label>
              <input
                type="number"
                className="form-control"
                id="inputEmail4"
                placeholder="Enter Your ACPC Rank"
                name="maxfee"
                value={maxfee}
                onChange={(e) => setMaxfee(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">College Preference</label>
              <select
                id="inputState"
                className="form-control"
                name="pref"
                value={pref}
                onChange={(e) => setPref(e.target.value)}
              >
                <option selected>Choose...</option>
                {clgs.map((val, i) => {
                  return (
                    <>
                      <option value={val}>{val}</option>
                    </>
                  );
                })}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="btn-lg btn-primary"
            onClick={(e) => OnRecommender(e)}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="container" style={{ backgroundColor: "white" }}>
        <Carousel>
          {data.map((val, id) => {
            return (
              <>
                <div className="container">
                  <div className="clgcard">
                    <div className="row my-4 mx-2 d-flex justify-content-center">
                      <div className="col-2">
                        <img
                          src={val.CollegeLogo}
                          alt="img"
                          style={{
                            width: "45px",
                            borderRadius: "5px",
                          }}
                        ></img>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <h4>{val.CollegeName}</h4>
                      </div>
                    </div>
                    <hr />
                    <div className="row d-flex justify-content-center">
                      <img
                        src={val.CollegeImg}
                        alt="img"
                        style={{
                          width: "500px",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <hr />
                    <div className="row">
                      <p>
                        College Location : {val.CollegeLocation}
                        <br />
                        Accepted Exams : {val.AcceptedExams}
                        <br />
                        Approved By : {val.ApprovedBy}
                        <br />
                        Recommanded Branch : {val.RecommandedBranch}
                        <br />
                        College Fee: {val.CollegeFee}
                        <br />
                        College Website : {val.CollegeWebsite}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default ClgRecommender;
