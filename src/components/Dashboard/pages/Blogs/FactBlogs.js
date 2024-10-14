import React from "react";
import {useState,useEffect} from "react";
import { Card, Container,Grid,Button } from "@mui/material";
import axios from "axios";
import BlogListingCard from '../../../Blogs/BlogListingCard';
import { Row, Col} from 'react-bootstrap';
import {Tabs, Tab, AppBar} from '@material-ui/core';
import {  TabContext  } from '@mui/lab';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Alert } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const FactBlogs = () => {
  const [sIndex,setSindex] = useState(0);
  const [eIndex,setEindex] = useState(3);
  const facultyPersonalBlogs = "https://unionboard-backend.smitghelani.xyz/faculty/getFacultyPersonalBlogs";
  const [viewBlog, setViewBlog] = useState(true);
  const [BbtnText,setBbtnText] = useState("My Blogs");
  const [dltBlog,setDltBlog] = useState(false);
  const [blogID,setBlogID] = useState(0);
  const [open,setOpen] = useState(false);
  const [bDialogOpen,setBDialogOpen] = useState(false);
  const [dltSnackbar,setDltSnackbar] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState(null);
  
  const [blogsArray,setBlogsArray] = useState([]);

  const submitData = async (event) => {
		
    event.preventDefault();

    let formData = new FormData(); 

    formData.append("title", title); 
    formData.append("content", content);
    formData.append("photo", photo);

    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true
    };
    
     axios
        .put(`https://unionboard-backend.smitghelani.xyz/faculty/blog/${blogID}`, formData, config)
        .then(async(res) => {
            setTitle('')
            setContent('')
            setPhoto({})
        })
        .catch((error) => {
            console.log(error);
        });
        
    
};

  
  useEffect(() => {

    if(viewBlog){
      axios.get(facultyPersonalBlogs,{
          headers: {
                     "Accept": "application/json",
                     "Content-Type": 'application/json',
                   },
                   withCredentials: true
        }).then((response => {
          //  console.log(response.data.blogs);
           setBlogsArray(response.data.blogs);
           setBbtnText("Close");
         }))
  } else if(!viewBlog){ setBlogsArray([]); setBbtnText("My Blogs")}
  
  if(dltBlog){
    const blogDltURL = `https://unionboard-backend.smitghelani.xyz/faculty/blog/${blogID}`;
    axios.delete(blogDltURL,{
        headers: {
                   "Accept": "application/json",
                   "Content-Type": 'application/json',
                 },
                 withCredentials: true
      }).then((response => {
         console.log(response.data);
         setDltBlog(false);
         if(response.data.success){
             setDltSnackbar(true);
         }
       }))
}
  }
,[viewBlog,blogID,dltBlog])

  return (
    <div>
    <h1>Blogs</h1>
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

                
    <Row sm={12} md={3} >
                    <Col sm={12} md={2}></Col>
                    {
                        blogsArray.slice(sIndex,eIndex) .map(
                        blogObj => (                    
                        <Col sm={12} md={4} key={blogObj._id}>
                            <BlogListingCard 
                                key={blogObj._id}
                                id={blogObj._id}
                                // setToggle={setToggle}
                                blogAuthor={blogObj.author}
                                // setbAuthor={setbAuthor}
                                blogImgURL={blogObj.photo.secure_url}
                                blogTitle={blogObj.title}
                                blogRating={blogObj.ratings}
                                blogReviews={blogObj.numberOfReviews}
                                blogContent={blogObj.content}
                            />
                            <Row style={{marginBottom : "20px"}}>
                                <Col sm={6} md={6}><button style={{background : "grey",color : "white",height : "30px",width : "150px",borderRadius : "5px"}}
                                onClick={() => {
                                    setBlogID(blogObj._id);
                                    setOpen(true);
                                }}> Edit Blog</button></Col>
                                <Col sm={6} md={6}><button style={{background : "red",color : "white",height : "30px",width : "150px",borderRadius : "5px"}}
                                onClick={() => {
                                    setBlogID(blogObj._id);
                                    // setDltBlog(true);
                                    setBDialogOpen(true);
                                }}> Delete Blog</button></Col>
                            </Row>
                        </Col>
                    ))}
                        </Row>
            <Dialog open={bDialogOpen} onClose={() => setBDialogOpen(false)}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this blog?
                        <p>
                        <button style={{background : "red",color : "white",height : "30px",width : "150px",borderRadius : "5px"}}
                        onClick={() => {
                            setDltBlog(true);
                            setBDialogOpen(false)
                        }}>Yes</button>
                        <button style={{background : "grey",color : "white",height : "30px",width : "150px",borderRadius : "5px"}}
                        onClick={() => {
                            setBDialogOpen(false)
                        }}>No</button>
                        </p>
                    </DialogContentText>
                </DialogContent>
            </Dialog>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Update Blog</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    <div className="ArticleContainer">
                            <div className="AddArticle">
                                <form method="POST" encType="multipart/form-data">
                                    {/* <h2> Update Blog</h2> */}
                                    <input
                                        type="text"
                                        value={title}
                                        placeholder="Title"
                                        name="title"
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <textarea
                                        onChange={(e) => setContent(e.target.value)}
                                        name="content"
                                        placeholder="Enter Content"
                                        value={content}
                                    ></textarea>
                                    <input
                                        
                                        type="file"
                                       
                                        onChange={(e) => setPhoto(e.target.files[0])}
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-style w-100"
                                        onClick={submitData}
                                    >
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>

            <Snackbar
             open={dltSnackbar}
             autoHideDuration={6000}
            //  message="Blog has been deleted successfully"
             onClose={() => setDltSnackbar(false)}
            >
            <Alert onClose={() => setDltSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                Blog has been deleted successfully
            </Alert>
            </Snackbar>
    </div>
  )
}

export default FactBlogs