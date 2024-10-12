// import React from 'react';
// import { useState } from 'react';
// import Upload from '../Courses/Components/Upload';
// // import { BrowserRouter } from 'react-router-dom';
// // import { Link } from 'react-router-dom';
// import './DashboardMain.css';
// import ChangePassword from './pages/ChangePassword/ChangePassword';
// import DashboardHome from './pages/DashboardHome/DashboardHome';
// import ReqFaculties from './pages/ReqFaculties/ReqFaculties';
// import UpdateProfile from './pages/UpdateProfile/UpdateProfile';

// function DashboardMain() {
//   const [home,setHome] = useState(true);
//   const [up,setUp] = useState(false);
//   const [changePwd,setChangePwd] = useState(false);
//   const [reqFac,setReqFac] = useState(false);
//   const [addCourse, setAddCourse] = useState(false);

//   const handleUpdateProfile = () =>{
//     setUp(true);
//     setHome(false);
//     setChangePwd(false)
//     setReqFac(false);
//     setAddCourse(false)
//   }
//   const handleHome = () =>{
//     setHome(true);
//     setUp(false);
//     setChangePwd(false)
//     setReqFac(false);
//     setAddCourse(false)
//   }
//   const handleChangePassword = () =>{
//     setChangePwd(true)
//     setHome(false);
//     setUp(false);
//     setReqFac(false);
//     setAddCourse(false)  
//   }
//   const handleReqFac = () =>{
//     setReqFac(true);
//     setHome(false);
//     setUp(false);
//     setChangePwd(false)
//     setAddCourse(false)
//   }
//   const handleAddCourse=()=>{
//     setAddCourse(true)
//     setHome(false);
//     setUp(false);
//     setReqFac(false);
//     setChangePwd(false)
//   }
//   return (
//    <>
//    {/* <h1>Dashboard</h1> */}
//    <div className="app-body">

// <aside className="app-sidebar">
//   <div className="app-logo sticky-top">Dashboard</div>
//   <div className="app-sidenav">

//     <ul className="nav flex-column">
//       <li className="nav-link sidemenu" onClick={handleHome}>
//                   Home
//       </li>
//       <li className="nav-link sidemenu" onClick={handleUpdateProfile}>
//                   Update Profile
//       </li>
//       <li className="nav-link sidemenu" onClick={handleChangePassword}>
//                   Change Password
//       </li>
//       <li className="nav-link sidemenu" onClick={handleReqFac}>
//       Requested Faculties
//       </li>
//       <li className="nav-link sidemenu" onClick={handleAddCourse}>
//         Add Your Course
//       </li>
//       </ul>

//   </div>
// </aside>

// {/* <header className="app-header">

// </header> */}

// <main className="app-main">
// {(home) ? <DashboardHome /> : ""}
// {(up) ? <UpdateProfile /> : ""}
// {(changePwd) ? <ChangePassword /> : ""}
// {(reqFac) ? <ReqFaculties /> : ""}
// {(addCourse) ? <Upload /> : ""}
// </main>
// </div>

//    </>
//   );
// }

// export default DashboardMain;


import React from 'react';
import { useState } from 'react';
import Upload from '../Courses/Components/Upload';
// import { BrowserRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './DashboardMain.css';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import DashboardHome from './pages/DashboardHome/DashboardHome';
import ReqFaculties from './pages/ReqFaculties/ReqFaculties';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';
import  FactBlogs  from './pages/Blogs/FactBlogs';
import  UpdateandDelete  from '../../components/Courses/Components/UpdateandDelete';
import axios from "axios";
import { useEffect } from "react";

function DashboardMain() {

  
  const [home,setHome] = useState(true);
  const [up,setUp] = useState(false);
  const [changePwd,setChangePwd] = useState(false);
  const [reqFac,setReqFac] = useState(false);
  const [addCourse, setAddCourse] = useState(false);
  const[blogs,setBlogs]=useState(false);
  const [reqFacDisplay,setReqFacDisplay] = useState("none");
  const [BlogsDisplay,setBlogsDisplay] = useState("none");
  const [addCourseDisplay,setAddCourseDisplay] = useState("none");
  const [updateCourseDisplay,setUpdateCourseDisplay] = useState("none");

  const dashboardURL = "http://unionboard-backend.smitghelani.xyz/dashboard";

  useEffect(() => {
    axios.get(dashboardURL,{
      headers: {
                 Accept: "application/json",
                 "Content-Type": 'application/json',
               },
               withCredentials: true
    }).then((response => {
    console.log(response.data.user);
	if(response.data.user.role === "admin"){
		setReqFacDisplay("");
	}
  if(response.data.user.role === "faculty"){
		setBlogsDisplay("");
    setAddCourseDisplay("");
    setUpdateCourseDisplay("");
	}
     }))
   
   
  },[dashboardURL])

  const handleUpdateProfile = () =>{
    setUp(true);
    setHome(false);
    setChangePwd(false)
    setReqFac(false);
    setAddCourse(false)
    setBlogs(false)
    setUpdateCourseDisplay(false)
  }
  const handleHome = () =>{
    setHome(true);
    setUp(false);
    setChangePwd(false)
    setReqFac(false);
    setAddCourse(false)
    setBlogs(false)
    setUpdateCourseDisplay(false)
  }
  const handleChangePassword = () =>{
    setChangePwd(true)
    setHome(false);
    setUp(false);
    setReqFac(false);
    setAddCourse(false)
    setBlogs(false)  
    setUpdateCourseDisplay(false)
  }
  const handleReqFac = () =>{
    setReqFac(true);
    setHome(false);
    setUp(false);
    setChangePwd(false)
    setAddCourse(false)
    setBlogs(false)
    setUpdateCourseDisplay(false)
  }
  const handleAddCourse=()=>{
    setAddCourse(true)
    setHome(false);
    setUp(false);
    setReqFac(false);
    setChangePwd(false)
    setBlogs(false)
    setUpdateCourseDisplay(false)
  }
  const handleBlogs=()=>{
    setAddCourse(false)
    setHome(false);
    setUp(false);
    setReqFac(false);
    setChangePwd(false)
    setChangePwd(false)
    setBlogs(true)
    setUpdateCourseDisplay(false)
  }
  const handleUpdateCourse=()=>{
    setAddCourse(false)
    setHome(false);
    setUp(false);
    setReqFac(false);
    setChangePwd(false)
    setChangePwd(false)
    setBlogs(false)
    setUpdateCourseDisplay(true)
  }
  return (
   <>
   {/* <h1>Dashboard</h1> */}
   <div className="app-body">

<aside className="app-sidebar">
  <div className="app-logo sticky-top">Dashboard</div>
  <div className="app-sidenav">

    <ul className="nav flex-column">
      <li className="nav-link sidemenu" onClick={handleHome}>
                  Home
      </li>
      <li className="nav-link sidemenu" onClick={ handleBlogs} style={{display : BlogsDisplay}}>
                 Blogs
      </li>
      {/* <li className="nav-link sidemenu" onClick={handleUpdateProfile}>
                  Update Profile
      </li> */}
      <li className="nav-link sidemenu" onClick={handleChangePassword}>
                  Change Password
      </li>
      <li className="nav-link sidemenu" onClick={handleReqFac} style={{display : reqFacDisplay}}>
      Requested Faculties
      </li>
      <li className="nav-link sidemenu" onClick={handleAddCourse} style={{display : addCourseDisplay}}>
        Add Your Course
      </li>
      <li className="nav-link sidemenu" onClick={handleUpdateCourse} style={{display : addCourseDisplay}}>
        See Your Courses
      </li>
      </ul>

  </div>
</aside>

{/* <header className="app-header">

</header> */}

<main className="app-main">
{(home) ? <DashboardHome /> : ""}
{(blogs)? <FactBlogs /> : ""}
{(up) ? <UpdateProfile /> : ""}
{(changePwd) ? <ChangePassword /> : ""}
{(reqFac) ? <ReqFaculties /> : ""}
{(addCourse) ? <Upload /> : ""}
{(updateCourseDisplay) ? <UpdateandDelete /> : ""}
</main>
</div>

   </>
  );
}

export default DashboardMain;