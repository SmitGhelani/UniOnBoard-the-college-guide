// import axios from "axios";
// import React from "react";


// function Blog(){


//     // React.useCallback(() => {
//     //     const apicall = () => {
//     //         axios.get('http://unionboard-backend.smitghelani.xyz/getAllBlog').then((res) =>{
//     //             console.log(res);
//     //         }).catch((err) => console.log(err))
//     //     }
//     // },[apicall])

//     // React.useEffect(() => {
//     //     apicall()
//     // },[apicall])

//     // React.useEffect(() => {
//     //     if(!(localStorage.getItem('token'))){
//     //         alert("Not login go for login")
//     //     }
//     // })

//     return(
//         <>
//             <h2>Blogs Page</h2>
//         </>
//     )
// }

// export default Blog;

import React from 'react';
import axios from '../api/axios';
import { useState, useEffect } from 'react';
import BlogListing from './BlogListing';
import Footer from '../footer/Footer'

const Blog = () => {

  return(
   <>
      
      <BlogListing />
      {/* <Footer /> */}
      
   </>
  );
};

export default Blog;
