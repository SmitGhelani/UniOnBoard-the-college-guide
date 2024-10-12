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
            <div className='diffCard'>
                <div className="courseCardDiff">
                    <i class="iconCardDiff fa-solid fa-hand-fist"></i>
                    {difficulty}
                </div>
                <div className="courseCardCategory">
                    <i class="iconCardCategory fa-solid fa-puzzle-piece"></i>
                    {coursecategory}
                </div>
            </div>
            <hr />
            {caption != undefined &&
            <div className='captionCard'>
                <i class="iconCardCaption fa-solid fa-hashtag"></i>                
                {caption}
            </div>}
            {
                caption != undefined && <hr />
            }
            <div className="courseCardAuthor">
                <div className='cardStaticTitle'>
                    CREATOR
                </div>
                <div className='cardAuthDetails'>
                    <div className="cardAuthImg">
                        <img className="authImg" src={authorImg} alt="creator" />
                    </div>
                    <div style={{borderLeft:"3px solid #666", marginLeft:"10px"}} />
                    <div className="cardAuthData">
                        <div className="cardAuthName">
                            {authorName}
                        </div>
                        <div className="cardAuthMail">
                            &#64;{authorMail.replace("@gmail.com","")}
                        </div>
                    </div>
                </div>
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
            
            </Link>
        </div>
    )
}
