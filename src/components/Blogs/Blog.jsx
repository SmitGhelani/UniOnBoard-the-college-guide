import React from "react";
import axios from "../api/axios";
import { useState, useEffect } from "react";
import BlogListing from "./BlogListing";
import Footer from "../footer/Footer";

const Blog = () => {
  return (
    <>
      <BlogListing />
      {/* <Footer /> */}
    </>
  );
};

export default Blog;
