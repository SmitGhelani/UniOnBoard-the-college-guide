import React from 'react';
import "./blog.css";
import { Card,Button,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./blog.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Blog() {
  return (
      <div>
 <h2 className='pt-4 mt-4 pb-4 mb-4  motiveh1'><b>Latest Blogs</b></h2>
 <p className=' blogp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem
Ipsum has been the industry’s standard dummy text ever since the 1500s</p>
<div className=' blogmain'>
    <MDBCard style={{ maxWidth: '540px' }} className='pt-4 mt-4 pb-4 mb-4 ms-4 me-4 blogcard' >
      <MDBRow className='g-0 '>
        <MDBCol md='4'>
          <MDBCardImage className="imgblog" src='./imgs/motive/girl.png' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle className=' blogtitle'>September 20, 2021</MDBCardTitle>
            <MDBCardText className=' blogtext'>PPDT SSB -What it is all about?<br/>
            PPDT In SSB In the Picture Perception and Discussion Test (PPDT) at SSB
            </MDBCardText>
            <MDBCardText >
              <small className='text-muted'>Navjot Singh</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <Col xs="auto">
     <div className=' pt-1 mt-1 pb-1 mb-1 d-flex justify-content-center align-items-center'>
    <Card style={{ width: '16rem' }} className="cardblog">
  <Card.Img variant="top" src="./imgs/courses/rau.png" alt="rau acadamy" />
  <hr className='greenline'/>
  <Card.Body>
    <Card.Title   ><b>Rau's IAS Study Circle</b></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">New Delhi</Card.Subtitle>
    <Card.Text>
    UPSC | IAS | IAS GS
    </Card.Text>
    <div >
    <Card.Text>
    <span className='bordericon'><StarBorderIcon />4.6</span><span className='bordericon'><PersonOutlineIcon className='ms-2 '/> 25000</span>
    </Card.Text>
    </div>
  </Card.Body>
</Card>
    </div>
    </Col>
    </div>
    </div>
  );
}