// import React from "react";
// import {useState,useEffect} from "react";
// import { Card, Container,Grid,Button } from "@mui/material";
// import axios from "axios";
// import "../Choaching/review.css";
// import BlogListingCard from '../Blogs/BlogListingCard';
// import { Row, Col} from 'react-bootstrap';



// function Profile(){

//     const dashboardURL = "https://unionboard-backend.smitghelani.xyz/dashboard";
//     // email id:- kalpgohil9@gmail.com || Password :- 123456
//     const facultyPersonalBlogs = "https://unionboard-backend.smitghelani.xyz/faculty/getFacultyPersonalBlogs";
//     const changePassword = "https://unionboard-backend.smitghelani.xyz/password/update";

//     const[userData, setUserData] = React.useState('');
//     const [blogBtn, setBlogBtn] = useState("none");
//     const [viewBlog, setViewBlog] = useState(false);
//     const [blogsArray,setBlogsArray] = useState([]);
//     const [BbtnText,setBbtnText] = useState("My Blogs");
//     const [CPbtnText,setCPbtnText] = useState("Change Password");
//     const [changePswd,setChangePswd] = useState(false);
//     const [displayCpswd,setDisplayCpswd] = useState("none");
//     const initialValues = {opswd: "", npswd: ""};
//     const [formValues, setFormValues] = useState(initialValues);
    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//           setFormValues({ ...formValues, [name]: value });
//       };
//     //   function LFormSubmit (suc){
//     //     if(suc === "Successfull"){
//     //       setHeading("Successfull");
//     //     }
//     //     else if(suc === "Fialed"){
//     //       setHeading("Failed");
//     //     }
//     //   }

     

//     // Faculty 1 password:- 123456 => abc123
//     // const dashboardApiCall = React.useCallback( async () => {
//     //     const res = await fetch("https://unionboard-backend.smitghelani.xyz/userdashboard", {
//     //       method: "GET",
//     //       headers: {
//     //         "Accept": "application/json",
//     //         "Content-Type": 'application/json',
//     //       },
//     //       credentials: "include"
//     //     })
    
//     //     let data = await res.json();
//     //     setUserData(data.user)
//     //     console.log(userData)
    
//     // },[])

//     // React.useEffect(() => {
//     //     dashboardApiCall()
//     // },[dashboardApiCall])

//     useEffect(() => {
//         axios.get(dashboardURL,{
//           headers: {
//                      "Accept": "application/json",
//                      "Content-Type": 'application/json',
//                    },
//                    withCredentials: true
//         }).then((response => {
//         //    console.log(response.data.user);
//         setUserData(response.data.user)
//         if(response.data.user.role === "faculty"){
//             setBlogBtn("");
//         }
//          }))
//          if(viewBlog){
//             axios.get(facultyPersonalBlogs,{
//                 headers: {
//                            "Accept": "application/json",
//                            "Content-Type": 'application/json',
//                          },
//                          withCredentials: true
//               }).then((response => {
//                  console.log(response.data.blogs);
//                  setBlogsArray(response.data.blogs);
//                  setBbtnText("Close");
//                }))
//         } else if(!viewBlog){ setBlogsArray([]); setBbtnText("My Blogs")}
//         if(changePswd){
//             axios.post(changePassword,{
//                 "oldPassword": formValues.opswd,
//                 "newPassword": formValues.npswd,
               
//               },{
//                 headers: {
//                     "Accept": "application/json",
//                     "Content-Type": 'application/json',
//                   },
//                   withCredentials: true
//               }).then((response => {
//                  console.log(response.data);
//                }))
//         }
//       },[dashboardURL,viewBlog,changePswd])

//     //  console.log(formValues.opswd);
    

//     return(
//         <>
//             <Container maxWidth="md" style={{display:'flex',justifyContent:'center',alignItem:'center'}}>
//                 <Card elevation={4} style={{marginTop:'20px',marginBottom:'20px',padding:'20px'}}>
//                     <Grid item container xs={12}>
//                         <Grid item xs={12}>
//                             <div style={{ textAlign:'center',fontSize: '30px',color:'grey' }}> Profile Details</div>
//                         </Grid>
//                         <Grid item xs={12}>
//                             <div className="d-flex" style={{margin : "10px"}}>
//                                 <div>Name:</div>
//                                 <div style={{marginLeft: '5px',color: 'grey'}}>{userData.name}</div>
//                             </div>
//                         </Grid>
//                         <Grid item xs={12}>
//                             <div className="d-flex" style={{margin : "10px"}}>
//                                 <div>Email:</div>
//                                 <div style={{marginLeft: '5px',color: 'grey'}}>{userData.email}</div>
//                             </div>
//                         </Grid>
//                         <Grid item xs={12}>
//                             <div className="d-flex" style={{margin : "10px"}}> 
//                                 <div>Role:</div>
//                                 <div style={{marginLeft: '5px',color: 'grey'}}>{userData.role}</div>
//                             </div>
//                         </Grid>
//                         <Grid item xs={6}>
//                             <div className="d-flex">
//                             <Button variant="contained"
//                             onClick={() => {
//                                 if(displayCpswd === "none"){
//                                     setDisplayCpswd("");
//                                     setCPbtnText("close");
                                    
//                                 }else if(displayCpswd === ""){
//                                     setDisplayCpswd("none");
//                                     setCPbtnText("Change Password");
//                                 }
                                
//                             }}>{CPbtnText}</Button>
//                             {/* <div style={{marginLeft: '5px',color: 'grey'}}>{userData.role}</div> */}
//                             <Button style={{marginLeft: '5px', display:blogBtn}} variant="contained" color="success"
//                             onClick={() => {
//                                 // setViewBlog(true);
//                                 viewBlog ? setViewBlog(false) : setViewBlog(true)
//                             }}>{BbtnText}</Button>
//                             </div>
//                         </Grid>
//                     </Grid>
//                 </Card>
//             </Container>


//             <Container style={{width : "880px" , display:displayCpswd}}>
//                 <Row>
//                     <div style={{border : "2px solid black"}}>
//                        <form>
//                        <label>Existing Password</label>
//                         <p>
//                             <input
//                                 type="text"
//                                 name="opswd"
//                                 placeholder="Enter Your existing Password"
//                                 value={formValues.opswd}
//                                 onChange={handleChange}
//                             />
//                         </p>
//                         <label>New Password</label>
//                         <p>
//                             <input
//                                 type="text"
//                                 name="npswd"
//                                 placeholder="Enter new Password"
//                                 value={formValues.npswd}
//                                 onChange={handleChange}
//                             />
//                         </p>
//                         <Button variant="contained" color="success" onClick={() => {
//                             setChangePswd(true);
                            
//                         }}>
//                             Change Password
//                         </Button>
//                        </form>
//                     </div>
//                 </Row>
//             </Container>


//             <Container>
//                 <Row sm={12} md={3}>
//                 {
//                     blogsArray.map(
//                     blogObj => (
//                     <Col sm={12} md={6} key={blogObj._id}>
//                         <BlogListingCard 
//                             key={blogObj._id}
//                             id={blogObj._id}
//                             // setToggle={setToggle}
//                             blogAuthor={blogObj.author}
//                             // setbAuthor={setbAuthor}
//                             blogImgURL={blogObj.photo.secure_url}
//                             blogTitle={blogObj.title}
//                             blogRating={blogObj.ratings}
//                             blogReviews={blogObj.numberOfReviews}
//                             blogContent={blogObj.content}
//                         />
//                     </Col>
//                 ))}
//                     </Row>
//                 </Container>
//         </>
//     )
// }

// export default Profile;

import React from "react";
import {useState,useEffect} from "react";
import { Card, Container,Grid,Button } from "@mui/material";
import axios from "axios";
import "../Choaching/review.css";
import BlogListingCard from '../Blogs/BlogListingCard';
import { Row, Col} from 'react-bootstrap';
import {Tabs, Tab, AppBar} from '@material-ui/core';
import {  TabContext  } from '@mui/lab';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Alert } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
         
            <Typography>{children}</Typography>
          
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


function Profile(){

    const dashboardURL = "https://unionboard-backend.smitghelani.xyz/dashboard";
    // email id:- kalpgohil9@gmail.com || Password :- 123456
    const facultyPersonalBlogs = "https://unionboard-backend.smitghelani.xyz/faculty/getFacultyPersonalBlogs";
    const changePassword = "https://unionboard-backend.smitghelani.xyz/updatePassword";

    const[userData, setUserData] = React.useState('');
    const [blogBtn, setBlogBtn] = useState("none");
    const [viewBlog, setViewBlog] = useState(true);
    const [blogPanel , setBlogPanel] = useState("");
    const [blogsArray,setBlogsArray] = useState([]);
    const [BbtnText,setBbtnText] = useState("My Blogs");
    const [CPbtnText,setCPbtnText] = useState("Change Password");
    const [changePswd,setChangePswd] = useState(false);
    const [displayCpswd,setDisplayCpswd] = useState("none");
    const initialValues = {opswd: "", npswd: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [cPassword, setCPassword] = useState(true);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
          setFormValues({ ...formValues, [name]: value });
      };
   
    useEffect(() => {
        axios.get(dashboardURL,{
          headers: {
                     "Accept": "application/json",
                     "Content-Type": 'application/json',
                   },
                   withCredentials: true
        }).then((response => {
        //    console.log(response.data.user);
        setUserData(response.data.user)
        if(response.data.user.role !== "faculty"){
            // setBlogBtn("");
            setViewBlog(false);
            setBlogPanel("none");
        }
         }))
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
        if(changePswd){
            axios.post(changePassword,{
                "oldPassword": formValues.opswd,
                "newPassword": formValues.npswd,
               
              },{
                headers: {
                    "Accept": "application/json",
                    "Content-Type": 'application/json',
                  },
                  withCredentials: true
              }).then((response => {
                 console.log(response.data);
            }))
        }
      },[dashboardURL,viewBlog,changePswd])

   

    //  console.log(formValues.opswd);
    
    const [value, setValue] = React.useState(0);

    const handleChangeT = (event, newValue) => {
        setValue(newValue);
    };
    
    

    return(
        <>

        
            <Container className="profile-main" maxWidth="md" style={{display:'flex',justifyContent:'center',alignItem:'center'}}>
                <Card elevation={4} style={{marginTop:'20px',marginBottom:'20px',padding:'20px'}}>
                    <Grid item container xs={12}>
                        <Grid item xs={12}>
                            <div style={{ textAlign:'center',fontSize: '30px',color:'grey' }}> Profile Details</div>
                            <Tabs
                            value={value}
                            onChange={handleChangeT}
                            variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                            style={{marginTop : "25px" , marginBottom : "25px"}}
                        >
                            <Tab label="Profile" {...a11yProps(0)} />
                            <Tab label="Change Password" {...a11yProps(1)}/>
                            <Tab label="My Blogs" {...a11yProps(2)} style={{ display : blogPanel}}/>
                            <Tab label="Update Profile" {...a11yProps(3)}/>
                        </Tabs>
                        </Grid>
                        
                        
                        
                        <TabPanel value={value} index={0} style={{textAlign : "justify"}}>
                        <Grid item xs={12}>
                            <div className="d-flex" style={{margin : "10px"}}>
                                <div>Name:</div>
                                <div style={{marginLeft: '5px',color: 'grey'}}>{userData.name}</div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="d-flex" style={{margin : "10px"}}>
                                <div>Email:</div>
                                <div style={{marginLeft: '5px',color: 'grey'}}>{userData.email}</div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="d-flex" style={{margin : "10px"}}> 
                                <div>Role:</div>
                                <div style={{marginLeft: '5px',color: 'grey'}}>{userData.role}</div>
                            </div>
                        </Grid>
                        {/* <Grid item xs={6}>
                            <div className="d-flex"  style={{margin : "20px"}}>
                            <Button variant="contained"
                            style={{width : "500px"}}
                            onClick={() => {
                                if(displayCpswd === "none"){
                                    setDisplayCpswd("");
                                    setCPbtnText("close");
                                    
                                }else if(displayCpswd === ""){
                                    setDisplayCpswd("none");
                                    setCPbtnText("Change Password");
                                }
                                
                            }}>{CPbtnText}</Button>
                            
                            <Button style={{marginLeft: '5px', display:blogBtn}} variant="contained" color="success"
                            onClick={() => {
                            
                                viewBlog ? setViewBlog(false) : setViewBlog(true)
                            }}>{BbtnText}</Button>
                            </div>
                        </Grid> */}
                        </TabPanel>


                        <TabPanel value={value} index={1} style={{textAlign : "justify"}}>
                <Row>
                    <div style={{}}>
                       <form>
                       <label>Existing Password</label>
                        <p>
                            <input
                                type="text"
                                name="opswd"
                                placeholder="Enter Your existing Password"
                                value={formValues.opswd}
                                onChange={handleChange}
                                style={{width : "250px"}}
                            />
                        </p>
                        <label>New Password</label>
                        <p>
                            <input
                                type="text"
                                name="npswd"
                                placeholder="Enter new Password"
                                value={formValues.npswd}
                                onChange={handleChange}
                                style={{width : "250px"}}
                            />
                        </p>
                        <Button variant="contained" color="success" style={{width : "250px", height:"40px", marginTop : "10px", background : "#98FB98"}} onClick={() => {
                            setChangePswd(true);
                            if(cPassword){
                                <Alert severity="success">Password has been changed successfully.</Alert>
                            }
                        }}>
                            Change Password
                        </Button>
                       </form>
                    </div>
                </Row>
                </TabPanel>


                <TabPanel value={value} index={2} style={{textAlign : "justify"}}>
                
                    <Row sm={12} md={3}>
                    {
                        blogsArray.map(
                        blogObj => (
                        <Col sm={12} md={6} key={blogObj._id}>
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
                        </Col>
                    ))}
                        </Row>
                </TabPanel>


                <TabPanel value={value} index={3} style={{textAlign : "justify"}}>
                
                    Update Profile 
                </TabPanel>

                    </Grid>
                </Card>
            </Container>


            {/* <Container style={{width : "880px" , display:displayCpswd}}> */}
            
            {/* </Container> */}


            {/* <Container>
                <Row sm={12} md={3}>
                {
                    blogsArray.map(
                    blogObj => (
                    <Col sm={12} md={6} key={blogObj._id}>
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
                    </Col>
                ))}
                    </Row>
                </Container> */}
        </>
    )
}

export default Profile;
