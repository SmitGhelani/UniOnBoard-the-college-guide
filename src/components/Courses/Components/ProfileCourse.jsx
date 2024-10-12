import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Course.css';

const stars = (rating) => {
    const starList = []
    for (let i = 0; i < parseInt(rating); i++) {
        starList.push(<i className="courseFilledStar fa-solid fa-star"></i>)
    }
    if(rating-parseInt(rating)>0){
        starList.push(<i className="courseFilledStar fa-solid fa-star-half"></i>)
    }
    return starList
}

export default function Course({courseId,
    courseTitle, createdAt, 
    coursePrice, courseImage, language,
    lecCount,difficulty, coursecategory,authorName,
    authorImg, authorMail, caption}) {

    const rating = 4.3;
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    
    const d = new Date(createdAt) 
    
    const deleteCourse = async (e, courseId) => {
        e.preventDefault();

        try {
            const response = await axios({
              url: `https://unionboard-backend.smitghelani.xyz/deleteFacultyCourse/${courseId}`,
              method: 'POST',
              Headers: {
                  'content-Type': 'multipart/form-data',
              },
              withCredentials: true
            })

            if(response){
                alert("Course Deleted Successfully")
                window.location.reload()
                return
            }
            
          } catch (err) {
              alert("course deleted successfully")
              window.location.reload()
          }
}

    return (
        
        <div className='course'>
            <Link to={`/courses/${courseId}`} className="link">
            <div className='imgDivCard'>
            <img className="courseImg" src={courseImage} alt=""/>
            </div>
            <div className="courseTitle">
                {courseTitle}
            </div>
            <div className="courseReleseTime">
                <i className="iconCard fa-solid fa-calendar-plus"></i>
                {d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear()}
            </div>
            <div className="coursePriceCard">
            &#8377;{coursePrice}
            </div>
            <div className="courseCardLanguage">
                <i className="iconCardLangage fa-solid fa-language"></i>
                {language}
            </div>
            <hr />
            <div className='diffCard' style={{marginBottom:"20px"}}>
                <div className="courseCardDiff">
                    <i className="iconCardDiff fa-solid fa-hand-fist"></i>
                    {difficulty}
                </div>
                <div className="courseCardCategory">
                    <i className="iconCardCategory fa-solid fa-puzzle-piece"></i>
                    {coursecategory}
                </div>
            </div>
            </Link>
            <div className='updateDeleteBtn'>
                <Link to={`/updateYourCourse/${courseId}`} className="updateBtnLink">
                <button className='updateBtnProfile'><i className="updateCourseIconProfile fa-solid fa-pencil"></i></button>
                </Link>
                <button className='deleteBtnProfile' onClick={(e)=>deleteCourse(e, courseId)}><i className="deleteCourseIconProfile fa-solid fa-trash"></i></button>
            </div>

            {/*             
            <div className="courseRating">
                <div className="courseRatingPoint">
                    {rating}
                </div>
                <div className="courseRatingStars">
                    {stars(rating)}
                </div>
                <div className="courseReviewCount">
                    (23)
                </div>
            </div> */}
            
            
        </div>
    )
}
