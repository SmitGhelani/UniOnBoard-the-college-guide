import React from "react";
import "./city.css";
import CityList from "./CityList";
import Carousel from 'react-elastic-carousel'



 const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];
const City = () => {
  const name="Find Coaching in Your City";


  return(
       <div className="pt-2 mt-2 pb-4 mb-4 ">
        <h2 className='pt-4 mt-4 pb-2 mb-2  motiveh1'><b>{name}</b></h2>

        <div className="city">

        <Carousel 
                    breakPoints={breakPoints} 
                    itemPadding={[0, 22]} 
                    itemsToShow={3}
                    easing="cubic-bezier(1,.15,.55,1.54)"
                    tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                    transitionMs={500}
                    >

        <CityList name="Chandigarh" coaching="94 coaching" img="./imgs/city/hawa-mahal.png" color="#F78FB326" border="3px solid #F78FB3"/>
        <CityList name="Lucknow" coaching="87 coaching" img="./imgs/city/bara.png" color="#f3f17526" border="3px solid #ddda35"/>
        <CityList name="Dehradun" coaching="45 coaching" img="./imgs/city/charminar.png" color="#59ee4b26" border="3px solid #56ce3e" />
        <CityList name="Delhi" coaching="89 coaching" img="./imgs/city/india-gate.png" color="#da2dda26" border="3px solid #cb41ee"/>
        <CityList name="Pune" coaching="55 coaching" img="./imgs/city/chennai.png" color="#33c8f526" border="3px solid #62dff0"/>
       <CityList name="Chandigarh" coaching="94 coaching" img="./imgs/city/hawa-mahal.png" color="#F78FB326" border="3px solid #F78FB3"/>
        <CityList name="Lucknow" coaching="87 coaching" img="./imgs/city/bara.png" color="#f3f17526" border="3px solid #ddda35"/>
        <CityList name="Dehradun" coaching="45 coaching" img="./imgs/city/charminar.png" color="#59ee4b26" border="3px solid #56ce3e" />
        <CityList name="Delhi" coaching="89 coaching" img="./imgs/city/india-gate.png" color="#da2dda26" border="3px solid #cb41ee"/>
        <CityList name="Pune" coaching="55 coaching" img="./imgs/city/chennai.png" color="#33c8f526" border="3px solid #62dff0"/> 
        </Carousel>
        </div>

</div>
       );
};

export default City;
