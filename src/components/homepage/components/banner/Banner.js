import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./banner.css";

const Banner = () => {
  
  const name ="Earn Coins and Get Offer";

  return(
    <div className = "bannermain">
  <Container >
  <Row >
    <Col>
    <img className="bannerleftimg " src='./imgs/banner/coins.png' alt='coins'/>
    </Col>
    <Col xs={6}>
     <h2 className='pt-2 mt-2   bannername'><b>{name}</b></h2>
       <p className='pbanner'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
      but also the leap</p>
      </Col>
    <Col>
    <img className="bannerrightimg " src='./imgs/banner/Offers.png' alt='offers'/>
    </Col>
  </Row>
  </Container>
  </div>
  );
};

export default Banner;
{/* <img className="startimg d-flex justify-content-left align-items-center " src='./imgs/banner/coins.png' alt='coins'/>
      <div className='h2banner mt-2 mb-2 me-2 ms-2 pt-2 pb-2'>
      <h2 className='pt-2 mt-2 pb-4 mb-4'><b>Earn Coins and Get Offer</b> <br/>
      <p className='pbanner pt-4 mt-4 pb-4 mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
      but also the leap</p></h2></div>
     
      <img className="d-flex justify-content-end align-items-center endimg " src='./imgs/banner/Offers.png' alt='offers'/> */}