import React from "react";
import Home from "./components/homepage/Home";
import { useRoutes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/navbar";
import Coaching from "./components/Choaching/choaching";
import Courses from "./components/Courses/Courses";
import Blog from "./components/Blogs/Blog";
import BlogDetails from "./components/Blogs/BlogDetails";
import AddBlog from "./components/Blogs/AddBlog";
import Contact from "./components/Contact Page/Contact";
import Profile from "./components/UserDetail/Profile";
import Register from "./components/signUp/Register";
import ActivationEmail from "./components/Login/ActivationEmail";
import ActivationEmailFaculty from "./components/Login/ActivationEmailFaculty";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import ResetPassword from "./components/forgotPassword/ResetPassword";
import Dashboard from "./components/Dashboard/DashboardMain";
import DashboardHome from "./components/Dashboard/pages/DashboardHome/DashboardHome";
import Coachingdeta from "./components/Choaching/Coachingdeta";
import LandingPage from "./components/Courses/Components/LandingPage";
import SingleCourse from "./components/Courses/Components/SingleCourse";
import Explore from "./components/Explore/ExploreMain";
import RankPredictor from "./components/Explore/RankPredictor/RankPredictor";
import ClgRecommender from "./components/Explore/Recommender/ClgRecommender";
import Comparison from "./components/Explore/Comparison/Comparison";
import UpdateCourse from "./components/Courses/Components/UpdateCourse";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Coaching",
          element: <Coaching />,
        },
        {
          path: "/Courses",
          element: <Courses />,
        },
        {
          path: "/courses/:id",
          element: <LandingPage />,
        },
        {
          path: "/updateYourCourse/:id",
          element: <UpdateCourse />,
        },
        {
          path: "/courses/watchCourse/:id",
          element: <SingleCourse />,
        },
        {
          path: "/getAllBlog",
          element: <Blog />,
        },
        {
          path: "/contactus",
          element: <Contact />,
        },
        {
          path: "/userdashboard",
          element: <Profile />,
        },
        {
          path: "/AddBlog",
          element: <AddBlog />,
        },
        {
          path: "/BlogDetails/:id",
          element: <BlogDetails />,
        },
        {
          path: "/CoachingDetailes/:id",
          element: <Coachingdeta />,
        },
        {
          path: "/Explore",
          element: <Explore />,
        },
        {
          path: "/RankPredictor",
          element: <RankPredictor />,
        },
        {
          path: "/CollegeRecommender",
          element: <ClgRecommender />,
        },
        {
          path: "/CollegeComaparison",
          element: <Comparison />,
        },
        {
          path: "/Dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "/Dashboard/home",
              element: <DashboardHome />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/activateEmail/:activation_token",
      element: <ActivationEmail />,
    },
    {
      path: "/activateEmailFaculty/:activation_token",
      element: <ActivationEmailFaculty />,
    },
    {
      path: "forgot_password",
      element: <ForgotPassword />,
    },
    {
      path: "/resetPassword/:token",
      element: <ResetPassword />,
    },
  ]);
};

export default Routes;
