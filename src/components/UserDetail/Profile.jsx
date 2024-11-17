import React from "react";
import { useState, useEffect } from "react";
import { Card, Container, Grid, Button } from "@mui/material";
import axios from "axios";
import "../Choaching/review.css";
import BlogListingCard from "../Blogs/BlogListingCard";
import { Row, Col } from "react-bootstrap";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Alert } from "@mui/material";

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
      {value === index && <Typography>{children}</Typography>}
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Profile() {
  const dashboardURL = "https://unionboard-backend.smitghelani.xyz/dashboard";
  const facultyPersonalBlogs =
    "https://unionboard-backend.smitghelani.xyz/faculty/getFacultyPersonalBlogs";
  const changePassword =
    "https://unionboard-backend.smitghelani.xyz/updatePassword";

  const [userData, setUserData] = React.useState("");
  const [blogBtn, setBlogBtn] = useState("none");
  const [viewBlog, setViewBlog] = useState(true);
  const [blogPanel, setBlogPanel] = useState("");
  const [blogsArray, setBlogsArray] = useState([]);
  const [BbtnText, setBbtnText] = useState("My Blogs");
  const [CPbtnText, setCPbtnText] = useState("Change Password");
  const [changePswd, setChangePswd] = useState(false);
  const [displayCpswd, setDisplayCpswd] = useState("none");
  const initialValues = { opswd: "", npswd: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [cPassword, setCPassword] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    axios
      .get(dashboardURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setUserData(response.data.user);
        if (response.data.user.role !== "faculty") {
          setViewBlog(false);
          setBlogPanel("none");
        }
      });
    if (viewBlog) {
      axios
        .get(facultyPersonalBlogs, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          setBlogsArray(response.data.blogs);
          setBbtnText("Close");
        });
    } else if (!viewBlog) {
      setBlogsArray([]);
      setBbtnText("My Blogs");
    }
    if (changePswd) {
      axios
        .post(
          changePassword,
          {
            oldPassword: formValues.opswd,
            newPassword: formValues.npswd,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response.data);
        });
    }
  }, [dashboardURL, viewBlog, changePswd]);

  const [value, setValue] = React.useState(0);

  const handleChangeT = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container
        className="profile-main"
        maxWidth="md"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Card
          elevation={4}
          style={{ marginTop: "20px", marginBottom: "20px", padding: "20px" }}
        >
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <div
                style={{ textAlign: "center", fontSize: "30px", color: "grey" }}
              >
                {" "}
                Profile Details
              </div>
              <Tabs
                value={value}
                onChange={handleChangeT}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                style={{ marginTop: "25px", marginBottom: "25px" }}
              >
                <Tab label="Profile" {...a11yProps(0)} />
                <Tab label="Change Password" {...a11yProps(1)} />
                <Tab
                  label="My Blogs"
                  {...a11yProps(2)}
                  style={{ display: blogPanel }}
                />
                <Tab label="Update Profile" {...a11yProps(3)} />
              </Tabs>
            </Grid>

            <TabPanel value={value} index={0} style={{ textAlign: "justify" }}>
              <Grid item xs={12}>
                <div className="d-flex" style={{ margin: "10px" }}>
                  <div>Name:</div>
                  <div style={{ marginLeft: "5px", color: "grey" }}>
                    {userData.name}
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="d-flex" style={{ margin: "10px" }}>
                  <div>Email:</div>
                  <div style={{ marginLeft: "5px", color: "grey" }}>
                    {userData.email}
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="d-flex" style={{ margin: "10px" }}>
                  <div>Role:</div>
                  <div style={{ marginLeft: "5px", color: "grey" }}>
                    {userData.role}
                  </div>
                </div>
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={1} style={{ textAlign: "justify" }}>
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
                        style={{ width: "250px" }}
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
                        style={{ width: "250px" }}
                      />
                    </p>
                    <Button
                      variant="contained"
                      color="success"
                      style={{
                        width: "250px",
                        height: "40px",
                        marginTop: "10px",
                        background: "#98FB98",
                      }}
                      onClick={() => {
                        setChangePswd(true);
                        if (cPassword) {
                          <Alert severity="success">
                            Password has been changed successfully.
                          </Alert>;
                        }
                      }}
                    >
                      Change Password
                    </Button>
                  </form>
                </div>
              </Row>
            </TabPanel>

            <TabPanel value={value} index={2} style={{ textAlign: "justify" }}>
              <Row sm={12} md={3}>
                {blogsArray.map((blogObj) => (
                  <Col sm={12} md={6} key={blogObj._id}>
                    <BlogListingCard
                      key={blogObj._id}
                      id={blogObj._id}
                      blogAuthor={blogObj.author}
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

            <TabPanel value={value} index={3} style={{ textAlign: "justify" }}>
              Update Profile
            </TabPanel>
          </Grid>
        </Card>
      </Container>
    </>
  );
}

export default Profile;
