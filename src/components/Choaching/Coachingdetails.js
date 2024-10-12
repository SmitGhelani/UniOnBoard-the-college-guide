import React from 'react';
import { useEffect, useState } from 'react';
import './coachingdetails.css';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from '../api/axios';
import { useParams } from "react-router-dom";


// const coachingDetails_URL = '/displayCoachingDetails';

const Coachingdetails = (props) => {

  // console.log(props.ID)
  const instId = props.ID;
  console.log(props.ID);
  const { id } = useParams();
  const coachingDetails_URL = `/getParticularInstitute/${id}`;

  const [cDetails,setCDetails] = useState("");
  const [Iname,setIName] = useState(" ");
  const [Iaddress,setIAddress] = useState(" ");
  const [Irating,setIRating] = useState(0);
  const [Iwebsite,setIWebsite] = useState(" ");
  const [Iimg,setIImg] = useState(" ");
  const [Imail,setIMail] = useState(" ");
  const [Ifees,setIFees] = useState();
  const [Ilogo,setILogo] = useState(" ");
  const [Ifacilities,setIFacilities] = useState("");
  const [IApprovedBy,setIApprovedBy] = useState("");
  const [IAcceptedExam,setIAcceptedExam] = useState("");
  const [IBranchList,setIBranchList] = useState([]);
  const [branchList,setBranchList] = useState([]);

  useEffect(() => {
         axios.get(coachingDetails_URL,{
         }).then((response => {
            // console.log(response.data.result);
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
            if(response.data.institute.facilities == ""){
                setIFacilities("Not Specified");
            }
            setIApprovedBy(response.data.institute.approvedBy);
            setIAcceptedExam(response.data.institute.acceptedExam);
            setBranchList(response.data.institute.branches);
            setIBranchList(response.data.branchList);
          }))
       },[coachingDetails_URL])

      // console.log(cDetails);
      // console.log(IBranchList);
      

       
  return(
   <>
    {/* <p>{props.ID}</p> */}
    <Container fluid className='cdHeadingContainer' >
    <img className='cdContactImg1' />
        <h1 className='cdHeading'>{Iname}</h1>
        <p className='cdAddress'>{Iaddress}</p>
        <p className='cdRatings'>{Irating}/5</p>
        <p className='cdVisitSite'>Visit their site <a target="_blank" href={Iwebsite} className='cdSiteLink'> &nbsp; {Iwebsite}</a> </p> 
    </Container>


    <Container className='cdInfoContainer'>
        <Row>
          <Col sm={12} lg={4}>
            {/* <div className='cdCourceBox'>
              <div className='cdCourceHeading'>
                <p className='cdCourceHeading1'>Available Courses in Engineering</p>
              </div>
              <Button target="_blank" href="https://www.bvmengineering.ac.in/dashboard.aspx?branch_id=9" variant="light" className='cdCoursesBtn'>Information TechnologyT</Button>
              <Button target="_blank" href="https://www.bvmengineering.ac.in/dashboard.aspx?branch_id=3" variant="light" className='cdCoursesBtn'>Computer Science</Button>
              <Button target="_blank" href="https://www.bvmengineering.ac.in/dashboard.aspx?branch_id=1" variant="light" className='cdCoursesBtn'>Civil Enginerring</Button>
              <Button target="_blank" href="https://www.bvmengineering.ac.in/dashboard.aspx?branch_id=8" variant="light" className='cdCoursesBtn'>Electronics and Communication</Button>
              <Button target="_blank" href="https://www.bvmengineering.ac.in/dashboard.aspx?branch_id=6" variant="light" className='cdCoursesBtn'>Mechanical</Button>
              <Button target="_blank" href="https://www.bvmengineering.ac.in/dashboard.aspx?branch_id=5" variant="light" className='cdCoursesBtn'>Electrical</Button>
              <Button target="_blank" href="https://www.bvmengineering.ac.in/dashboard.aspx?branch_id=2" variant="light" className='cdCoursesBtn'>Structural</Button>
              <Button target="_blank" href="https://www.bvmengineering.ac.in/dashboard.aspx?branch_id=4" variant="light" className='cdCoursesBtn'>Electronics</Button>
              <Button target="_blank" href="https://www.bvmengineering.ac.in/dashboard.aspx?branch_id=7" variant="light" className='cdCoursesBtn'>Production</Button>
              <Button target="_blank" href="https://www.bvmengineering.ac.in/dashboard.aspx?branch_id=7" variant="light" className='cdCoursesBtn'>Mathematics</Button>
            </div> */}

          
            <div className='couponCard'>
              <img className='cdInfoCouponGradient' src='http://unionboard.smitghelani.xyz/cdInfoCoupon.png' alt='Gradient img'/>
              <img className='cdInfoCouponGradient2' src='http://unionboard.smitghelani.xyz/cdInfoCouponDesignBG.png' alt='Gradient img2'/>
              <img className='cdInfoCouponLogo' src='http://unionboard.smitghelani.xyz/cdInfoCouponLogo.png' alt='Gradient img3'/>
              <p className='cdInfoCouponText1'>INPORTANT INFORMATION</p>
              <p className='cdInfoCouponText2'>Facilities:- {Ifacilities}</p>
              <p className='cdInfoCouponText3'>Email Id:- {Imail}</p>
              <p className='cdInfoCouponText4'>Fees:- {Ifees}</p>
              <p className='cdInfoCouponText5'><a href='https://www.google.com/maps/place/Birla+Vishvakarma+Mahavidyalaya+(BVM)/@22.5525185,72.9216363,17z/data=!3m1!4b1!4m5!3m4!1s0x395e4e74c03b7749:0xab364c66fd4834c!8m2!3d22.5525136!4d72.923825' target="_blank" style={{color:"white"} }>Address on Google Map</a></p>
              <Button href={Iwebsite} target='_blank' variant="secondary" className='cdInfoCouponBtn'>GET ADMISSION</Button>
            </div>
            
           
            {/* <div className='cdContact'>
                <img className='cdContactImg' src='http://unionboard.smitghelani.xyz/elonmusk.jpg' alt='coaching contact' />
                <div className='cdContactText'>Contact Us for learning</div>
                <div className='cdContactNumber1'>CALL US ANYTIME</div>
                <div className='cdContactNumber2'>+92 666 888 0000</div>
            </div> */}
          </Col>


          <Col sm={12} lg={8}>
              <img className='cdInfoTitleImg' src={Iimg} alt='Demo Img' />
            </Col>


            {/* <Row>
              <p className='cdInfoWelcome'>
                WELCOME TO {Iname}
              </p>
              <p className='cdInfoDetails'>
              Birla Vishvakarma Mahavidyalaya is a grant-aided engineering
              institution located in the educational town of Vallabh 
              Vidyanagar, Gujarat, India. It is affiliated to Gujarat 
              Technological University and became an autonomous institution in 
              August 2015.
              </p>
              
              <p className='cdInfoDetails2'>
                  A PREMIER INSTITUTION OF CVM
                  <br /> FOUNDED IN 1948
                  <br />Motto: Work is Worship
                  <br />First Approved by Government as grant-in-aid College
                  <br />More than 20000 engineers Graduated.
                  <br />Degrees offered – B.Tech., M.Tech.
              </p>
              
                <Col sm={6}>
                  <p className='cdInfoDetails' style={{fontWeight: "bold"}}>
                    OUR ACTIVITIES
                  </p>
                  <p className='cdInfoDetails'>
                    Birla Vishvakarma is always been a well recognised College
                    when it comes to the activities such as Cultural,Sports,Technical,Reasearched based
                    and many more.
                    <br /> Here is the glipmse of some activities...
                  </p>
                  <p className='cdInfoDetails' style={{fontWeight: "bold",textDecoration : "none"}}>
                    <a href="https://www.bvmengineering.ac.in/misc/ncrtet.html" target="_blank">NCRTET</a> 
                  </p>
                  <p className='cdInfoDetails' style={{fontWeight: "bold"}}>
                  <a href="bvmengineering.ac.in/Vishvakarma%20Magazine/vishvakarma'20/" target="_blank">Vishvakarma Magazine</a> 
                  </p>
                  <p className='cdInfoDetails' style={{fontWeight: "bold"}}>
                  <a href="http://www.udaan18.com/" target="_blank">UDAAN</a> 
                  </p>
                  <p className='cdInfoDetails' style={{fontWeight: "bold"}}>
                  <a href="http://www.bvmengineering.ac.in/comman_page1.aspx?page_id=84" target="_blank">NSS/NCC Events</a> 
                  </p>
                </Col> */}
                {/* <Col sm={6}>
                    <img className='cdInfoDetailsImg' src={Ilogo} alt='Company Profile'/>
                </Col> */}
              {/* </Row> */}

              <Row>

                <Col sm={12} lg={5}>
                  <h4 className='BIHeading'>Basic Information</h4>
                  <p className='paddingClassBasic'> Institute is approved by :- {IApprovedBy}</p>
                  <p>Accepted exams for an admission :- {IAcceptedExam}</p>
                  <p>Facilities provided by the institute :- {Ifacilities}</p>
                  <p>Fees :- {Ifees}</p>
                  <p>Institute is located at :- {Iaddress}</p>
                </Col>

                <Col lg={1}>
                  <div className='verticleLine'></div>
                </Col>

                <Col sm={12} lg={6}>
                  <h4 className='CBIHeading'>Courses Provided by the Institute</h4>
                  {/* <p className='paddingClassBasic'>IT Engineering</p>
                  <p>Computer Engineering</p>
                  <p>Civil Engineering</p> */}
                  <table className='istTbl'>
                          <tr className="branchHeadRow">
                            <td className="branchTblHeadData">Branches</td>
                            <td className="branchTblHeadData">Total University Seats</td>
                            <td className="branchTblHeadData">Total State Seats</td>
                            <td className="branchTblHeadData">Management Quota(GUJCET)</td>
                            <td className="branchTblHeadData">Management Quota(JEE)</td>
                            <td className="branchTblHeadData">NRI Seats</td>
                            <td className="branchTblHeadData">TFWS Seats</td>
                            <td className="branchTblHeadData">Total</td>
                          </tr>
                    {
                    IBranchList.map(

                      branches => (
                          <tr className="branchRow">
                            <td key={branches} className="branchTblData">{branches}</td>
                            <td key={branches} className="branchTblData">{branchList[branches].universitySeatsFromTotal}</td>
                            <td key={branches} className="branchTblData">{branchList[branches].stateSeatsFromTotal}</td>
                            <td key={branches} className="branchTblData">{branchList[branches].managementQuotaOnGujcet}</td>
                            <td key={branches} className="branchTblData">{branchList[branches].managementQuotaOnJee}</td>
                            <td key={branches} className="branchTblData">{branchList[branches].nriSeats}</td>
                            <td key={branches} className="branchTblData">{branchList[branches].tfwsSeats}</td>
                            <td key={branches} className="branchTblData">{branchList[branches].totalSeats}</td>
                            {console.log(branchList[branches])}
                          </tr>
                        
                      )
                          
                    )
                    
                    }
                    </table>
                  
                    
            
                </Col>
                
              </Row>

              <Row style={{marginTop : "50px"}}>
                <p className='moreInfoText'>For the futher inquiries please visit to the {Iwebsite} or write an email to the {Imail} .</p>
              </Row>
          
        </Row>
    </Container>
  </>
  );
};

export default Coachingdetails;




// import React from 'react';
// import { useState, useEffect } from 'react';
// import './coachingdetails.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'
// import axios from '../api/axios';

// const coachingDetails_URL = '/displayCoachingDetails'; 

// const Coachingdetails = () => {

//   const [cDetails,setCDetails] = useState("")

//   useEffect(() => {
//     axios.post(coachingDetails_URL,{
//       coachingName : "earth"
//     }).then((response => {
//       //  console.log(response.data.Co.coachingAddress);
//       console.log(response.data.Co);
//       setCDetails(response.data.Co);
//      }))
//   },[])

//   return(
//    <>
//     <Container fluid className='cdHeadingContainer' >
//         <h1 className='cdHeading'>{cDetails.coachingName}</h1>
//         <p className='cdAddress'>{cDetails.coachingAddress}</p>
//         <p className='cdRatings'>4.6</p>
//         <p className='cdVisitSite'>Visit their site <a href="www.earth.com" className='cdSiteLink'> &nbsp; {cDetails.coachingSite}</a> </p> 
//     </Container>
    
// <Container className='cdInfoContainer'>
// <Row>
//   <Col sm={12} lg={4}>
//     <div className='cdCourceBox'>
//       <div className='cdCourceHeading'>
//         <p className='cdCourceHeading1'>Available Courses in Coaching</p>
//       </div>
//       <Button href="#" variant="light" className='cdCoursesBtn'>NDA</Button>
//       <Button href="#" variant="light" className='cdCoursesBtn'>AFCAT</Button>
//       <Button href="#" variant="light" className='cdCoursesBtn'>CDS</Button>
//       <Button href="#" variant="light" className='cdCoursesBtn'>SSB</Button>
//     </div>


//     <div className='couponCard'>
//       <img className='cdInfoCouponGradient' src='http://unionboard.smitghelani.xyz/cdInfoCoupon.png' alt='Gradient img'/>
//       <img className='cdInfoCouponGradient2' src='http://unionboard.smitghelani.xyz/cdInfoCouponDesignBG.png' alt='Gradient img2'/>
//       <img className='cdInfoCouponLogo' src='http://unionboard.smitghelani.xyz/cdInfoCouponLogo.png' alt='Gradient img3'/>
//       <p className='cdInfoCouponText1'>20% OFF ON NDA BOOKS AND 10% OFF ON ADMISSION</p>
//       <p className='cdInfoCouponText2'>By redeeming this offer you will get 20% discount on NDA materials and 10% off in CAVALIER admission. Grab Offers Now</p>
//       <Button variant="secondary" className='cdInfoCouponBtn'>Redeem Offer</Button>
//     </div>

//     <div className='cdContact'>
//         <img className='cdContactImg' src='http://unionboard.smitghelani.xyz/elonmusk.jpg' alt='coaching contact' />
//         <div className='cdContactText'>Contact Us for learning</div>
//         <div className='cdContactNumber1'>CALL US ANYTIME</div>
//         <div className='cdContactNumber2'>+92 666 888 0000</div>
//     </div>
//   </Col>
//   <Col sm={12} lg={8}>
//       <img className='cdInfoTitleImg' src='http://unionboard.smitghelani.xyz/elonmusk.jpg' alt='Demo Img' />
//       <p className='cdInfoWelcome'>
//         WELCOME TO THE CAVALIER
//       </p>
//       <p className='cdInfoDetails'>
//       {cDetails.coachingDesc}
//       </p>
//       <p className='cdInfoDetails2'>
//         We have our training techniques evolved over last 17 years of 
//         experience to improve individual’s communication skills, effective 
//         participation in Group Activities thereby improving Group 
//         Effectiveness and correct each individual’s weaknesses in written 
//         exam subjects and SSB Interview
//       </p>
//       <Row>
//         <Col sm={6}>
//           <p className='cdInfoDetails' style={{fontWeight: "bold"}}>
//             OUR BENEFITS
//           </p>
//           <p className='cdInfoDetails'>
//             We have the latest training aids like interactive projection
//             system, Online exams everyday and also provide test series Online
//             to our candidates.
//           </p>
//           <p className='cdInfoDetails' style={{fontWeight: "bold"}}>
//             {cDetails.coachingBenefits}
//           </p>
//           <p className='cdInfoDetails' style={{fontWeight: "bold"}}>
//             {cDetails.coachingBenefits} 
//           </p>
//           <p className='cdInfoDetails' style={{fontWeight: "bold"}}>
//             {cDetails.coachingBenefits} 
//           </p>
//           <p className='cdInfoDetails' style={{fontWeight: "bold"}}>
//             {cDetails.coachingBenefits}
//           </p>
//         </Col>
//         <Col sm={6}>
//             {/* <img className='cdInfoDetailsImg' src={cDetails.coachingBenefitsImage.secure_url} alt='Company Profile'/> */}
//         </Col>
//       </Row>
//   </Col>
// </Row>
// </Container>
// </>
// );
// };

// export default Coachingdetails;
