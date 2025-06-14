import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./DashboardHome.css";
const DashboardHome = () => {
  const dashboardURL = "https://unionboard-backend.smitghelani.site/dashboard";
  const [userData, setUserData] = React.useState({});
  const [dp, setDp] = React.useState("");
  useEffect(() => {
    axios
      .get(dashboardURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.user);
        setUserData(response.data.user);
        setDp(response.data.user.photo.secure_url);
      });
  }, [dashboardURL]);
  return (
    <>
      <h1>Home</h1>

      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={dp} alt="url" />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>Web Developer and Designer</h6>
                <p className="proile-rating">
                  RANKINGS : <span>8/10</span>
                </p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item"></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Role</label>
                    </div>
                    <div
                      className="col-md-6"
                      style={{ textTransform: "capitalize" }}
                    >
                      <p>{userData.role}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DashboardHome;
