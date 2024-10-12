
import React,{useState} from 'react';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Citycard } from './Citycard';
import "./feature.css";

const Feature = () => {

  const [Fcity,setFcity] = useState([]);
  const [sIndex,setSindex] = useState(0);
  const [eIndex,setEindex] = useState(12);
  // const[bAuthor,setbAuthor] = useState("");
  const [toggle,setToggle] = useState(false);

  const allcityApiCall = React.useCallback( async () => {
    const res = await fetch("https://unionboard-backend.smitghelani.xyz/getHomeInst", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": 'application/json',
      },
      credentials: "include"
    })

    let data = await res.json();
    setFcity(data);

    // console.log(data)

},[])

React.useEffect(() => {
  allcityApiCall()
},[allcityApiCall])

  return(
    <>
      <h2 className='pt-4 mt-4 pb-4 mb-4  motiveh1'><b>Find Colleges in Your City</b></h2>

      {/* <Row className='navigatePannel' style={{paddingTop:"30px"}}>
                <Col sm={6}></Col>
                <Col className='navigateText' xs={6} lg={2}>Institutes {sIndex + 1} - {eIndex}</Col>

                <Col xs={3} lg={2}>
                    <button className='navigateButton' onClick={() => {
                      if(sIndex >= 3){
                        setSindex(sIndex - 3);
                        setEindex(eIndex - 3);
                    }
                    }}>
                        Previous
                    </button>
                  </Col>

                  <Col xs={3} lg={2}>
                    <button className='navigateButton' onClick={() => {
                      if(eIndex <= 10){
                        setSindex(sIndex + 3);
                        setEindex(eIndex + 3);
                    }
                    }}>
                        Next
                    </button>
                  </Col>
                 
                </Row>
                <hr className='navigateHr'></hr> */}
                <Container>
    <Row  className=' pt-1 mt-1 pb-1 mb-1 d-flex justify-content-center align-items-center'>
    {
      Fcity.slice(sIndex,eIndex).map(
        cityObj => (
        <Col  key={cityObj._id}>
            <Citycard
                key={cityObj._id}
                id={cityObj._id}
                setToggle={setToggle}
                // setbAuthor={setbAuthor}
                citylogo={cityObj.images[0].secure_url}
                name={cityObj.name}
                city={cityObj.city}
                exam={cityObj.acceptedExam}
                website={cityObj.website}
                fee={cityObj.fees}
            />
        </Col>
    ))}
        </Row>
        </Container>
{/* <div style={{ display: toggle ? ' ' : 'none'}}>
          <BlogDetails author= {bAuthor}/>
</div> */}
    </>
 
  );
};

export default Feature;
