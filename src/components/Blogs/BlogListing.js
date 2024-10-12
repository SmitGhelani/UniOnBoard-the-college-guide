import React from 'react';
import axios from '../api/axios';
import BlogListingCard from './BlogListingCard';
import { useEffect,useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './BlogListingCard.css';
import BlogDetails from './BlogDetails';
import { BrowserRouter, Link, Outlet, useNavigate } from 'react-router-dom';


const BlogListing = () => {

    const navigate = useNavigate();

    const BListing_URL= "/getAllBlog";

    const [bDetails,setBDetails] = useState([]);
    const [sIndex,setSindex] = useState(0);
    const [eIndex,setEindex] = useState(3);
    const[bAuthor,setbAuthor] = useState("");
    // const [toggle,setToggle] = useState(false);

    

    // useEffect(() => {
    //     // logoutCall()
    //     axios.get(BListing_URL,{
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": 'application/json',
    //       },
    //       credentials: "include"
    //     })
    //     .then((response => {
    //         //  console.log(response.data);
    //          setBDetails(response.data.blogs);
    //     }))
    // },[])

    const allBlogsApiCall = React.useCallback( async () => {
      const res = await fetch("https://unionboard-backend.smitghelani.xyz/getAllBlog", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": 'application/json',
        },
        credentials: "include"
      })
  
      let data = await res.json();
      setBDetails(data.blogs);

      // console.log(data)
  
  },[])

  React.useEffect(() => {
    allBlogsApiCall()
  },[allBlogsApiCall])

    // console.log(bDetails)
    // console.log(bDetails[0].title);
    // console.log(bDetails[0].reviews[0].user);
    
  return (
    <>
        <Container className='BlogListingContainer'>

        <Row className='navigatePannel' style={{paddingTop:"30px"}}>
                
                

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
                  <Col className='navigateText' xs={6} lg={2}>{sIndex + 1} - {eIndex}</Col>
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
                {/* <hr className='navigateHr'></hr> */}

            <Row sm={12} md={3}>
            {
                bDetails.slice(sIndex,eIndex).map(
                blogObj => (
                <Col sm={12} md={4} key={blogObj._id}>
                    <BlogListingCard 
                        key={blogObj._id}
                        id={blogObj._id}
                        // setToggle={setToggle}
                        blogAuthor={blogObj.author}
                        setbAuthor={setbAuthor}
                        blogImgURL={blogObj.photo.secure_url}
                        blogTitle={blogObj.title}
                        blogRating={blogObj.ratings}
                        blogReviews={blogObj.numberOfReviews}
                        blogContent={blogObj.content}
                    />
                </Col>
            ))}
                </Row>
                <Container style={{paddingInline:"580px", marginBottom:"110px"}}>
                 <Link to="/AddBlog" className="addblogbtn" style={{textDecoration:"none"}}>
          Add Blog
        </Link>
        </Container>
        </Container>
        {/* <div style={{ display: toggle ? ' ' : 'none'}}>
                  <BlogDetails author= {bAuthor}/>
        </div> */}
    </>
  );
}

export default BlogListing