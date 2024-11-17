import React from "react";
import Coachingdetails from "./Coachingdetails";
import Faculty from "./Faculty";
import Rankers from "./Rankers";
import Review from "./Review";
import Footer from "../footer/Footer";
import CoachingListing from "./CoachingListing";
import CoachingListingCard from "./CoachingListingCard";
import { useState } from "react";

const Coachingdeta = (props) => {
  return (
    <div>
      <Coachingdetails ID={props.id} />
      <Review />
    </div>
  );
};

export default Coachingdeta;
