import React from 'react';
import './coachingListingCard.css';
import { Container } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import Coachingdet from './Coachingdeta';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

 <Routes>
      <Route exact path="/Coachingdet" component={Coachingdet} />
</Routes> 

const CoachingListingCard = (props) => {
    let navigate = useNavigate(); 
    const Id = props.id;
    // console.log(Id);
    // console.log(props.logo);
   
   
  return (
    <>
        <button className='exploreBtn' onClick={() => {
                                props.setToggle(true);
                                // console.log(Id);
                                props.setIid(Id);
                                 navigate(`/CoachingDetailes/${props.id}`);
                            }}>
            <Container className='clcMainContainer'>
                <div className='card-box'>
                    
                        <Row >
                        <Col sm={1}>
                            {/* Institute Image */}
                            
                                <img src={props.logo} alt='BVM' className='instituteImg'/>
                            
                        </Col>

                    <Col sm={10}>
                            {/* <p className='instituteName'>Birla Vishvakarma Mahavidyalaya</p> */}
                            <p className='instituteName'>{props.name}</p>
                        
                            {/* <Row>
                                <Col sm={3}>
                                    <p className='instituteRating'>Ratings : {props.ratings}/5</p>
                                </Col>
                                <Col sm={4}>
                                    <p className='instituteFees'>Fees : {props.fees} </p>
                                </Col>
                                <Col sm={5}>
                                    <p className='instituteEnrolledStundet'>Enrolled Stundet : 45k</p>
                                </Col>
                            </Row> */}
                        </Col>  
                             
                           
                            <Row  > 
                            
                                <Col sm={1} className='LocationLogoCol'>
                                    <img src='https://unionboard.smitghelani.xyz/location.png' alt='LocationLogo' className='instituteLocationImg'/>
                                </Col>
                                <Col className='iAddress' sm={11}>
                                    {/* Opp. Shashtri Ground, Mota Bazaar, Vallabh Vidyanagar, Anand - 388120. */}
                                    {props.address}
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={1} className='LocationLogoCol'>
                                    <img src='https://unionboard.smitghelani.xyz/discount.png' alt='LocationLogo' className='instituteLocationImg'/>
                                </Col>
                                <Col className='iAddress' sm={11}>
                                    {/* Offer for coaching admision : 20% */}
                                    Accepted Exams :- {props.acceptedExam}
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={1} className='LocationLogoCol'>
                                    <img src='https://unionboard.smitghelani.xyz/rupee.png' alt='LocationLogo' className='instituteLocationImg'/>
                                </Col>
                                <Col className='iAddress' sm={11}>
                                    {/* Needed coins to redeem offer : 560 */}
                                    Approved By :- {props.approvedBy}
                                </Col>
                                
                            </Row>
                            <Row>
                                {/* <button className='exploreBtn' onClick={() => {
                                    props.setToggle(true);
                                    // console.log(Id);
                                    props.setIid(Id);
                                }}>
                                Explore
                                </button> */}
                            </Row>
                    
                    
                </Row>
            </div>
        </Container>
    </button>
      
    </>
  );
}

export default CoachingListingCard