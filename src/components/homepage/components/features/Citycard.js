import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import "./feature.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Citycard = (props) => {
  return (
    <div>
     
    
     <div className='pb-4'>
   
    <Container >

     <Row  >
    <Col  >
     <div className=' pt-1 mt-1 pb-1 mb-1 d-flex justify-content-center align-items-center '>
    <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={props.citylogo} className='cardimgs' alt="SVNIT" />
  <hr className='greenline'/>
  <Card.Body>
    <Card.Title className="cardname"><b>{props.name}</b></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{props.city}</Card.Subtitle>
    <Card.Text>
    {props.exam}
    </Card.Text>
    <div >
    <Card.Text>
    <span className='bordericon' ><StarBorderIcon />{props.website}</span><br/><span className='bordericon'><CurrencyRupeeIcon className='ms-2 '/> {props.fee}</span>
    </Card.Text>
    </div>
  </Card.Body>
</Card>
    </div>
    </Col>
{/* 
    <Col xs="auto"> 
    <div className=' pt-1 mt-1 pb-1 mb-1 d-flex justify-content-center align-items-center'>
    <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src="https://scet.ac.in/wp-content/uploads/2014/07/scet.jpg" className='cardimgs'  alt="SCET" />
  <hr className='greenline'/>
  <Card.Body>
    <Card.Title><b>Sarvajanik College Of Engineering And Technology</b></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Surat</Card.Subtitle>
    <Card.Text>
    BE | B.Tech | M.Tech
    </Card.Text>
    <div >
    <Card.Text>
    <span className='bordericon'><StarBorderIcon />4.5</span>   <span className='bordericon'><PersonOutlineIcon className='ms-2 '/> 22500</span>
    </Card.Text>
    </div>
  </Card.Body>
</Card>
    </div>
    </Col> 
    <Col xs="auto"> 
    <div className='pt-1 mt-1 pb-1 mb-1 d-flex justify-content-center align-items-center'>
    <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/0/0c/BVM-Logo-1.png" className='cardimgs'  alt="BVM " />
  <hr className='greenline'/>
  <Card.Body>
    <Card.Title><b>Birla Vishvakarma Mahavidyalaya</b></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Anand</Card.Subtitle>
    <Card.Text>
    BE | B.Tech | M.Tech
    </Card.Text>
    <div >
    <Card.Text>
    <span className='bordericon'><StarBorderIcon />4.0</span>   <span className='bordericon'><PersonOutlineIcon className='ms-2 '/> 18800</span>
    </Card.Text>
    </div>
  </Card.Body>
</Card>
    </div>
    </Col> */}

    
  {/* </Row> */}




  {/* <Row className=' pt-1 mt-1 pb-1 mb-1 d-flex justify-content-center align-items-center'> */}

{/*    
    <Col xs="auto"> 
    <div className=' pt-1 mt-1 pb-1 mb-1 d-flex justify-content-center align-items-center'>
    <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/a/a2/IIT_Gandhinagar_Logo.svg" className='cardimgs'  alt="IIT Gandhinagar" />
  <hr className='greenline'/>
  <Card.Body>
    <Card.Title><b>IIT Gandhinagar</b></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Gandhinagar</Card.Subtitle>
    <Card.Text>
    BE | B.Tech | M.Tech
    </Card.Text>
    <div >
    <Card.Text>
    <span className='bordericon'><StarBorderIcon />4.6</span>   <span className='bordericon'><PersonOutlineIcon className='ms-2 '/> 25300</span>
    </Card.Text>
    </div>
  </Card.Body>
    </Card>
    </div>
    </Col> */}

    {/* <Col xs="auto">
    <div className=' pt-1 mt-1 pb-1 mb-1 d-flex justify-content-center align-items-center'>
    <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" className='cardimgs'  src="https://upload.wikimedia.org/wikipedia/en/b/b1/Dhirubhai_Ambani_Institute_of_Information_and_Communication_Technology_logo.png" alt="Dhirubhai Ambani" />
  <hr className='greenline'/>
  <Card.Body>
    <Card.Title><b>DAIICT</b></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Ghandhinagar</Card.Subtitle>
    <Card.Text>
    BE | B.Tech | M.Tech
    </Card.Text>
    <div >
    <Card.Text>
    <span className='bordericon'><StarBorderIcon />4.5</span>   <span className='bordericon'><PersonOutlineIcon className='ms-2 '/> 22,500</span>
    </Card.Text>
    </div>
  </Card.Body>
</Card>
    </div>
    
    </Col> */}
    
    
    {/* <Col xs="auto">
    <div className=' pt-1 mt-1 pb-1 mb-1 d-flex justify-content-center align-items-center'>
    <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/8/83/Nirma_University_Logo.png"  className='cardimgs'  alt="Nirma" />
  <hr className='greenline'/>
  <Card.Body>
    <Card.Title><b>Nirma University</b></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Ahmedabad</Card.Subtitle>
    <Card.Text>
    UPSC | IAS | IAS GS
    </Card.Text>
    <div >
    <Card.Text>
    <span className='bordericon'><StarBorderIcon />4.6</span>   <span className='bordericon'><PersonOutlineIcon className='ms-2 '/>10500</span>
    </Card.Text>
    </div>
  </Card.Body>
</Card>
    </div>
    </Col> */}
  </Row>
</Container>
    {/* <div className=' d-flex justify-content-center align-items-center me-4'>
    <Button  className='btncate me-4' size="lg" active >
    View More
  </Button>
    </div>  */}
  </div> 
  </div>
  )
}
