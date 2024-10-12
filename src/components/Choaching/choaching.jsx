// import React from "react";
// import { Link, useNavigate } from "react-router-dom";


// function Coaching(){

//     // const navigate = useNavigate()

//     // React.useEffect(() => {
//     //     if(!(localStorage.getItem('token'))){
//     //         navigate('/')
//     //     }
//     // })

//     return(
//         <>
//             <h2>Coaching </h2>
//         </>
//     )
// }

// export default Coaching;

import React from 'react';
import Coachingdetails from './Coachingdetails';
import Faculty from './Faculty';
import Rankers from './Rankers';
import Review from './Review';
import Footer from '../footer/Footer';
import CoachingListing from './CoachingListing';
import CoachingListingCard from './CoachingListingCard';


const Coaching = () => {


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
       <CoachingListing />
       {/* <Coachingdetails /> */}
       {/* <Faculty />
       <Rankers />
       <Review />*/}
       {/* <Footer />  */}
   </div>
  );
};

export default Coaching;
