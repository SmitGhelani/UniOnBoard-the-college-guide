import React from 'react';
import './footer.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Footer = () => {
  return(
      <>
        {/* <Container fluid className='footerFluidContainer'>
            <Row>
                <Col sm={12} lg={8} className="footerLogoCol">
                    <img src='./uniFooterLogo2.png' alt='footerLogo' className='footerLogo' />
                </Col>
                <Col sm={12} lg={2}>
                    <p className='footerCompanyText'>Company</p>
                    <p className='footerAboutusText'>AboutUs</p>
                </Col>
                <Col sm={12} lg={2}>
                    <p className='footerSupportText'>Support</p>
                    <p className='footerHelpText'>Help</p>
                    <p className='footerContactusText'>ContactUs</p>
                    <p className='footerSocialLogo'>
                        <img src='http://unionboard.smitghelani.xyz/facebookLogo1.png' alt='facebbokLogo'></img>
                        <img src='http://unionboard.smitghelani.xyz/twitterLogo1.png' alt='twitterLogo' style={{paddingLeft : "10px"}}></img>
                    </p>
                </Col>
            </Row>
            <div className='footerLine'></div>
            <p className='footerCopyrightText'>@2022 - UniOnBoard. All rights reserved</p>
        </Container> */}

        <footer>
        <div className="container" style={{width:"100vw",margin:"0",maxWidth:"100%"}}>
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                

                

                <div className="col-6 col-lg-6">
                  
                  <img src='./uniFooterLogo2.png' alt='footerLogo' className='footerLogo' />
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
