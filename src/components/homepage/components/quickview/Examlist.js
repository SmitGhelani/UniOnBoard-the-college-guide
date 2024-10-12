import React from 'react'
import { Button,Container,Col,Row } from 'react-bootstrap';
import "./quickview.scss";

const Examlist = (props) => {
  return (
    <div>
      <div className='viewlist'>
      <img className=" img me-2 viewimg " src={props.img}/>
      <h6 className='name'>{props.name}</h6>
      </div>
      
      
      {/* <Col xs="auto" className=""> <div className='d-flex justify-content-left align-items-center pt-2 mt-2 pb-2 mb-2 me-2 ps-3 '>
      <img className="img-fluid viewimg " src="./imgs/interview.png" alt="Interviewer"/>
      <h6><b>Best coatching for NDA</b></h6>
      </div></Col>
    </Row>
    <Row className="d-flex justify-content-center align-items-center">
      <Col xs="auto" className="ms-2"> <div className='d-flex justify-content-end align-items-center pt-2 mt-2 pb-2 mb-2 me-2'>
      <img className=" img-fluid viewimg " src="./imgs/newspaper.png" alt="newspaper"/>
      <h6><b>Important exam material</b></h6>
      </div>
      </Col>
      <Col>
      <div className='d-flex justify-content-left align-items-center pt-2 mt-2 pb-2 mb-2 me-2 ps-4'>
      <img className=" img-fluid viewimg " src="./imgs/webinar.png" alt="webinar"/>
      <h6><b>NDA exam success stories</b></h6>
      </div>
      </Col>
      */}
    </div>
  )
}

export default Examlist;