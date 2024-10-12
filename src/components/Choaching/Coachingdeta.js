import React from 'react';
import Coachingdetails from './Coachingdetails';
import Faculty from './Faculty';
import Rankers from './Rankers';
import Review from './Review';
import Footer from '../footer/Footer';
import CoachingListing from './CoachingListing';
import CoachingListingCard from './CoachingListingCard';
import { useState } from 'react';


const Coachingdeta = (props) => {


  return(
   <div>
     
    {/* {(() => {
        if (toggle) {
            return <Coachingdetails />
        }
        else {
          return <CoachingListing />
        }
    })} */}
       {/* <CoachingListing /> */}
       {/* <p>{props.id}</p> */}
       <Coachingdetails ID={props.id}/>
       {/* <Faculty />
       <Rankers /> */}
       <Review />
       
   </div>
  );
};

export default Coachingdeta;
