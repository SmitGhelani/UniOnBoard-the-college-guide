import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="container"
          style={{ width: "100vw", margin: "0", maxWidth: "100%" }}
        >
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-6">
                  <img
                    src="./uniFooterLogo2.png"
                    alt="footerLogo"
                    className="footerLogo"
                  />
                </div>

                <div className="col-6 col-lg-6">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i className="fab fa-facebook fa-sm fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-instagram fa-sm fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-youtube fa-xs fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-twitter fa-xs fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-1">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 UniOnBoard. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
