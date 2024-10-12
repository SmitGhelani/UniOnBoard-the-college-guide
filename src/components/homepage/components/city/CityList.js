import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CityList = (props) => {
  return (
    <div>
    
    <Container>
    <Row>
    <Col>
    
    <div className="cities">

     <div className="imgdiv1" style={{backgroundColor: props.color,border:props.border}}>
     <img  className="imgcity" src={props.img} alt="citys"/></div>
     
     <div className="cityh5">
     <h5 >{props.name}</h5>
     </div>

     <div className="cityp">
     <p className="pcity">
     {props.coaching}</p>
     </div>
    
    </div>
    </Col>

    {/* <Col xs="auto city1">
    <div className="cities ms-4 me-4">

    <div className="imgdiv1 mt-2 mb-2 pb-2 pt-2">
    <img src="./imgs/bara-imambara.svg" alt="hawa-mahal"/></div>
    <div className="city"><h5>Lucknow</h5></div>
    <div className="city"><p className="pcity">85 coaching</p></div>
    </div>
    
    </Col>

     <Col xs="auto city1">
     <div className="cities ms-4 me-4">
     
     <div className="imgdiv1 mt-2 mb-2 pb-2 pt-2">
     <img src="./imgs/charminar.svg" alt="charminar"/></div>
     <div className="city"><h5>Dehradun</h5></div>
     <div className="city"><p className="pcity">150 coaching</p></div>
    </div>
    </Col>

    <Col xs="auto city1">
    <div className="cities ms-4 me-4">
    <div className="imgdiv1 mt-2 mb-2 pb-2 pt-2">
    <img src="./imgs/india-gate.svg" alt="Gate"/></div>
   <div className="city"><h5>Delhi</h5></div> 
   <div className="city"><p className="pcity">120 coaching</p></div>
    </div>
    </Col>

    <Col xs="auto city1" >
    <div className="cities ms-4 me-4">
    <div className="imgdiv1 mt-2 mb-2 pb-2 pt-2">
    <img src="./imgs/rs.svg" alt="pune"/></div>
    <div className="city"><h5>Pune</h5></div>
    <div className="city"><p className="pcity">100 coaching</p></div>
    </div>
    </Col> */}
</Row>
</Container></div>
  )
}

export default CityList