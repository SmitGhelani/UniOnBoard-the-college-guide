import React from "react";
import Course from "./Components/Course";
import axios from "axios";
import { useState, useEffect } from "react";
import SingleCourse from "./Components/SingleCourse";
import Upload from "./Components/Upload";
import LandingPage from "./Components/LandingPage";
import { useParams } from "react-router-dom";
import "./Courses.css";
import Loading from "./Components/Loading";

export default function Courses() {
  const courseId = useParams();
  const [courseDataList, setCourseDataList] = useState([]);

  useEffect(() => {
    axios
      .get("https://unionboard-backend.smitghelani.xyz/getCourses")
      .then((response) => {
        setCourseDataList(response.data.allCourse);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="courses">
      {courseDataList.map((course, index) => (
        <Course
          courseId={course.dataOne._id}
          courseTitle={course.dataOne.CourseTitle}
          createdAt={course.dataOne.createdAt}
          coursePrice={course.dataTwo.Pricing}
          courseImage={course.dataTwo.CourseImg.secure_url}
          language={course.dataTwo.CourseLanguage}
          difficulty={course.dataTwo.DifficultyLevel}
          coursecategory={course.dataTwo.CourseCategory[0]}
          authorName={course.dataThree.name}
          authorImg={course.dataThree.photo.secure_url}
          authorMail={course.dataThree.email}
          caption={course.dataOne.LectureCaption}
        />
      ))}
    </div>
  );
}
