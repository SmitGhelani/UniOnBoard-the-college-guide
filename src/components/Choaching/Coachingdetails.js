import React from "react";
import { useEffect, useState } from "react";
import "./coachingdetails.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "../api/axios";
import { useParams } from "react-router-dom";


const Coachingdetails = (props) => {
  const instId = props.ID;
  console.log(props.ID);
  const { id } = useParams();
  const coachingDetails_URL = `/getParticularInstitute/${id}`;

  const [cDetails, setCDetails] = useState("");
  const [Iname, setIName] = useState(" ");
  const [Iaddress, setIAddress] = useState(" ");
  const [Irating, setIRating] = useState(0);
  const [Iwebsite, setIWebsite] = useState(" ");
  const [Iimg, setIImg] = useState(" ");
  const [Imail, setIMail] = useState(" ");
  const [Ifees, setIFees] = useState();
  const [Ilogo, setILogo] = useState(" ");
  const [Ifacilities, setIFacilities] = useState("");
  const [IApprovedBy, setIApprovedBy] = useState("");
  const [IAcceptedExam, setIAcceptedExam] = useState("");
  const [IBranchList, setIBranchList] = useState([]);
  const [branchList, setBranchList] = useState([]);

  useEffect(() => {
    axios.get(coachingDetails_URL, {}).then((response) => {
      setCDetails(response.data);
      setIName(response.data.institute.name);
      setIAddress(response.data.institute.address);
      setIRating(response.data.institute.rating);
      setIWebsite(response.data.institute.website);
      setIImg(response.data.institute.images[0].secure_url);
      setIMail(response.data.institute.mail);
      setIFees(response.data.institute.fees);
      setILogo(response.data.institute.logo[0].secure_url);
      setIFacilities(response.data.institute.facilities);
      if (response.data.institute.facilities == "") {
        setIFacilities("Not Specified");
      }
      setIApprovedBy(response.data.institute.approvedBy);
      setIAcceptedExam(response.data.institute.acceptedExam);
      setBranchList(response.data.institute.branches);
      setIBranchList(response.data.branchList);
    });
  }, [coachingDetails_URL]);

  // console.log(cDetails);
  // console.log(IBranchList);

  return (
    <>
      {/* <p>{props.ID}</p> */}
      <Container fluid className="cdHeadingContainer">
        <img className="cdContactImg1" />
        <h1 className="cdHeading">{Iname}</h1>
        <p className="cdAddress">{Iaddress}</p>
        <p className="cdRatings">{Irating}/5</p>
        <p className="cdVisitSite">
          Visit their site{" "}
          <a target="_blank" href={Iwebsite} className="cdSiteLink">
            {" "}
            &nbsp; {Iwebsite}
          </a>{" "}
        </p>
      </Container>

      <Container className="cdInfoContainer">
        <Row>
          <Col sm={12} lg={4}>
            <div className="couponCard">
              <img
                className="cdInfoCouponGradient"
                src="https://unionboard.smitghelani.xyz/cdInfoCoupon.png"
                alt="Gradient img"
              />
              <img
                className="cdInfoCouponGradient2"
                src="https://unionboard.smitghelani.xyz/cdInfoCouponDesignBG.png"
                alt="Gradient img2"
              />
              <img
                className="cdInfoCouponLogo"
                src="https://unionboard.smitghelani.xyz/cdInfoCouponLogo.png"
                alt="Gradient img3"
              />
              <p className="cdInfoCouponText1">INPORTANT INFORMATION</p>
              <p className="cdInfoCouponText2">Facilities:- {Ifacilities}</p>
              <p className="cdInfoCouponText3">Email Id:- {Imail}</p>
              <p className="cdInfoCouponText4">Fees:- {Ifees}</p>
              <p className="cdInfoCouponText5">
                <a
                  href="https://www.google.com/maps/place/Birla+Vishvakarma+Mahavidyalaya+(BVM)/@22.5525185,72.9216363,17z/data=!3m1!4b1!4m5!3m4!1s0x395e4e74c03b7749:0xab364c66fd4834c!8m2!3d22.5525136!4d72.923825"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  Address on Google Map
                </a>
              </p>
              <Button
                href={Iwebsite}
                target="_blank"
                variant="secondary"
                className="cdInfoCouponBtn"
              >
                GET ADMISSION
              </Button>
            </div>
          </Col>

          <Col sm={12} lg={8}>
            <img className="cdInfoTitleImg" src={Iimg} alt="Demo Img" />
          </Col>

          <Row>
            <Col sm={12} lg={5}>
              <h4 className="BIHeading">Basic Information</h4>
              <p className="paddingClassBasic">
                {" "}
                Institute is approved by :- {IApprovedBy}
              </p>
              <p>Accepted exams for an admission :- {IAcceptedExam}</p>
              <p>Facilities provided by the institute :- {Ifacilities}</p>
              <p>Fees :- {Ifees}</p>
              <p>Institute is located at :- {Iaddress}</p>
            </Col>

            <Col lg={1}>
              <div className="verticleLine"></div>
            </Col>

            <Col sm={12} lg={6}>
              <h4 className="CBIHeading">Courses Provided by the Institute</h4>
              <table className="istTbl">
                <tr className="branchHeadRow">
                  <td className="branchTblHeadData">Branches</td>
                  <td className="branchTblHeadData">Total University Seats</td>
                  <td className="branchTblHeadData">Total State Seats</td>
                  <td className="branchTblHeadData">
                    Management Quota(GUJCET)
                  </td>
                  <td className="branchTblHeadData">Management Quota(JEE)</td>
                  <td className="branchTblHeadData">NRI Seats</td>
                  <td className="branchTblHeadData">TFWS Seats</td>
                  <td className="branchTblHeadData">Total</td>
                </tr>
                {IBranchList.map((branches) => (
                  <tr className="branchRow">
                    <td key={branches} className="branchTblData">
                      {branches}
                    </td>
                    <td key={branches} className="branchTblData">
                      {branchList[branches].universitySeatsFromTotal}
                    </td>
                    <td key={branches} className="branchTblData">
                      {branchList[branches].stateSeatsFromTotal}
                    </td>
                    <td key={branches} className="branchTblData">
                      {branchList[branches].managementQuotaOnGujcet}
                    </td>
                    <td key={branches} className="branchTblData">
                      {branchList[branches].managementQuotaOnJee}
                    </td>
                    <td key={branches} className="branchTblData">
                      {branchList[branches].nriSeats}
                    </td>
                    <td key={branches} className="branchTblData">
                      {branchList[branches].tfwsSeats}
                    </td>
                    <td key={branches} className="branchTblData">
                      {branchList[branches].totalSeats}
                    </td>
                    {console.log(branchList[branches])}
                  </tr>
                ))}
              </table>
            </Col>
          </Row>

          <Row style={{ marginTop: "50px" }}>
            <p className="moreInfoText">
              For the futher inquiries please visit to the {Iwebsite} or write
              an email to the {Imail} .
            </p>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Coachingdetails;
