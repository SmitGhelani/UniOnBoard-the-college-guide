// import React from 'react';
// import { Container,Row,Col } from 'react-bootstrap';
// import { Link, Route } from 'react-router-dom';
// import BlogDetails from './BlogDetails';
// import './BlogListingCard.css';





// const BlogListingCard = (props) => {

//   // console.log(props.blogAuthor);
  
//   return (
//     <>

      
//        <Container className='BlgLstContainer'>
            
  
//                <div className='BlgLstCardDiv'>
//                     <div className='blogImgDiv'>
//                         <img className='blogImg' src={props.blogImgURL} alt='Demo'></img>
//                     </div>
//                     <hr className='hr'/>
//                     <div className='blogContentDiv'>
//                         <h4>Title : {props.blogTitle}</h4>
//                         <h6>Ratings :- {props.blogRating}</h6>
//                         <h6>No. of reviews :- {props.blogReviews}</h6>
//                         <button className='blogBtn' onClick={() => {
//                           // props.setbAuthor(props.blogAuthor);
//                           props.setbAuthor(props.id);
//                           props.setToggle(true);
//                         }}>
//                           Read more
//                         </button>
//                     </div>
//                 </div>
            
              
//        </Container>
      
//     </>
//   );
// }

// export default BlogListingCard

import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import BlogDetails from './BlogDetails';
import './BlogListingCard.css';





const BlogListingCard = (props) => {

    // var ratings = props.blogRating
    //   ratings = ratings.toFixed(2);
    //   console.log(ratings);
  // console.log(props.blogAuthor);
  let navigate = useNavigate(); 
  return (
    <>

      
      
       <Container className='BlgLstContainer'>
            
                <div className='MainBlgLstCardDiv'>
               <div className='BlgLstCardDiv'>
               <h5 className='blogTitle'> {props.blogTitle}</h5>
                    <div className='blogImgDiv'>
                        <img className='blogImg' src={props.blogImgURL} alt='Demo'></img>
                    </div>
                    {/* <hr className='hr'/> */}
                    <div className='blogContentDiv'>
                        <p className='blogContent'>{props.blogContent.slice(0,100)}...</p>
                        <Row className='ratingRow'>
                          <Col xs={6}>
                            <h6>Ratings :- {props.blogRating.toFixed(2)}</h6>
                          </Col>
                          <Col xs={6}>
                            <h6>No. of reviews :- {props.blogReviews}</h6>
                          </Col>
                        </Row>
                       <div className='d-flex justify-content-center'>
                        <button className='blogBtn' onClick={()=>{
                          props.setbAuthor(props.id);
                          // props.setToggle(true);
                          navigate(`/BlogDetails/${props.id}`);
                        }}>
                          Read more
                        </button>
                        </div>
                    </div>
                </div>
                </div>
              
       </Container>
      
    </>
  );
}

export default BlogListingCard