import React from 'react';
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay-ts';

export default function LandingPage() {
    const {id} = useParams();
    const [err, setErr] = useState('')
    const [courseImgURL, setCourseImgURL] = useState({})
    const [imgURL, setImgURL] = useState("");
    const [promoURL, setPromoURL] = useState("");
    const [landingPageData, setLandingPageData] = useState({})
    const [authorData, setAuthorData] = useState({})
    const [courseData, setCourseData] = useState({})
    const [sessionCount, setSessionCount] = useState(0)
    const [isActive,setIsActive] = useState(false) 
    const [isPaymentDone, setIsPaymentDone] = useState(false)

  useEffect(() =>{
      axios.get(`https://unionboard-backend.smitghelani.xyz/getLandingPageData/${id}`,{
        headers: {
                   "Accept": "application/json",
                   "Content-Type": 'application/json',
                 },
                 withCredentials: true
      }).then((response)=>{
        setLandingPageData(response.data.data.landingPageData);
        setAuthorData(response.data.data.author);
        setCourseData(response.data.data.courseData);
        setSessionCount(response.data.data.sessionCount);
        setImgURL(response.data.data.author.photo.secure_url)
        setCourseImgURL(response.data.data.landingPageData.CourseImg.secure_url)
        setPromoURL(response.data.data.landingPageData.CoursePromo.secure_url)
        if(response.data.data.landingPageData.Pricing === 0){
          setIsPaymentDone(true)
        }
      }).catch((error)=>{
          console.log(error);
      })

      axios.get(`https://unionboard-backend.smitghelani.xyz/getPurchases/${id}`,{
        headers: {
                  "Accept": "application/json",
                  "Content-Type": 'application/json',
                },
              withCredentials: true
      }).then((response)=>{
        if(response.data.success){
          console.log(response.data.success)
          setIsPaymentDone(true)
        }else{
          console.log(response.data.success)
          setIsPaymentDone(false)
        }
      }).catch((error)=>{
          console.log(error);
      })
    },[]
  )

  const onEnroll = async (e) => {
    e.preventDefault();
    setIsActive(true)
    try {
      const price = landingPageData.Pricing*100
      const fd = new FormData();
      console.log(courseData)
      fd.append("amount",price)
      fd.append("currency","INR")
      fd.append("notes",{courseId:courseData._id});

      const resultPayment =  await axios({
        url: "https://unionboard-backend.smitghelani.xyz/placeOrder",
        method: 'POST',
        Headers: {
            'content-Type': 'multipart/form-data',
        },
        withCredentials: true,data:fd
      })
      
      if(resultPayment){
        const name =  resultPayment.data.user.name;
        const email = resultPayment.data.user.email;
        var options = {
          "key": "rzp_test_HEniExhSJlPvuS",
          "name": "UniOnBoard",
          "description": "Pay & Checkout this Course, Learn Something New",
          "image": "https://res.cloudinary.com/dkmj6cid2/image/upload/v1650521502/samples/ecommerce/logoPayment_lzteq4.png",
          "order_id": resultPayment.data.order.id,
          "handler": async function (response) {
            const fd = new FormData();

            fd.append("razorpay_order_id",response.razorpay_order_id)
            fd.append("razorpay_payment_id",response.razorpay_payment_id)
            fd.append("razorpay_signature",response.razorpay_signature)
            console.log(response)
            try {
              const purchase = await axios({
                url:`https://unionboard-backend.smitghelani.xyz/addPurchageData/${id}`,
                method:"POST",
                Headers:{
                  'content-Type':"multipart/form-data"
                },
                withCredentials:true,
                data:fd
              })
        
              if(purchase.data.success){
                isPaymentDone(true)
              }
            }catch (err) {
              setIsActive(false)
            }
              alert("Payment Successful");
              setIsPaymentDone(true)
          },
          "prefill": {
              //Here we are prefilling random contact
              "contact": "",
              //name and email id, so while checkout
              "name": name,
              "email": email
          },
          "notes": {
              "description": "Best Course",
              "language": "c/c++",
              "access": "lifetime"
          },
          "theme": {
              "color": "#1e2d47"
          }
        };
        
        const razorpayObject = new window.Razorpay(options);
        setIsActive(false);
        razorpayObject.open();

      }
    } catch (err) {
        setIsActive(false)
        alert("This step of Payment Failed");
    }
  }

  

  return (
    <LoadingOverlay
    active={isActive}
    spinner
    text='Loading Please wait...'
    >
    <div className="landingPage">
      <img src={courseImgURL} className="mainBackGroundImg" alt="" />
      <div className='mainPanel'>
      <div className='subMainPanel'>
        <div className='courseTitleLandingPage'>
          {
            landingPageData.CourseTitle
          }
        </div>
        <div className='authorImg'>
          <div className="box">
            <img src={imgURL} alt="" className="authorImgIcon" />
            <div className='column'>
              <label className='authorName' >
                {
                  authorData.name
                }
              </label>
              <label className='authorMail'>
                {
                  authorData.email
                }
              </label>
            </div>
          </div>
          <div className="lecturesCount">
            <i className="iconLecture fa-solid fa-video"></i>
            <div className='countValue'>
              Lectures&nbsp;&nbsp;
              {
                sessionCount
              }
              </div>
          </div>
        </div>
        <div className='coursePromoLandingDiv'>
          <video className="coursePromoLandingPage" src={promoURL} controls muted autoPlay/>
        </div>
        <div className='courseDescLandingPage'>
          <div className='staticTitle'>About This Course</div>
          <div className='courseDescContentLandingPage'>
            {
              landingPageData.CourseDesc
            }
          </div>
        </div>
        <div className='courseLearingLandingPage'>
          <div className='staticTitle'>After Completing This Course You Will Be Able To</div>
          <div className='courseLearingContentLandingPage'>
            {
              landingPageData.CourseLearing
            }
          </div>
        </div>
        <div className='courseRequirementLandingPage'>
          <div className='staticTitle'>Requirements</div>
          <div className='courseRequirementContentLandingPage' >
          {
            courseData.CoursePrerequisite
          }
          </div>
        </div>
        </div>
      <div className='sidePanel'>
        <div className='sidebarHeading'>
          Course Basics
        </div>
        <hr />
        <div className="courseLanguageLandingPage">
        <i className="sidePanelIcon fa-solid fa-microphone-lines"></i>
          {
            landingPageData.CourseLanguage
          }
        </div>
        <div className="courseLearningLandingPage">
        <i className="sidePanelIcon fa-solid fa-tags"></i>
          {
            courseData.CourseLearning
          }
        </div>
        <div className="courseDifficultyLandingPage">
        <i className="sidePanelIcon fa-solid fa-layer-group"></i>
          {
            landingPageData.DifficultyLevel
          }
        </div>
        <div className="courseCategoryLandingPage">
        <i className="sidePanelIcon fa-solid fa-ranking-star"></i>
          {
            landingPageData.CourseCategory
          }
        </div>
        <hr />
        { 
          isPaymentDone === false &&
          <div className="coursePriceLandingPage">
            <i className="sidePanelRupeeIcon fa-solid fa-indian-rupee-sign"></i>
              {
                landingPageData.Pricing
              }
          
          </div>
        }
        {
            isPaymentDone && "Purchased"
        }
        <div className='enrollButton'>

          {isPaymentDone === false && <button id={"enroll-corse"} className='button' onClick={(e)=>onEnroll(e)}>Enroll Today</button>}
          {isPaymentDone && <Link to={`/courses/watchCourse/${id}`} ><button className='button'>Visit Course</button></Link>}
          
        </div>
      </div>
      </div>
    </div>
    </LoadingOverlay>
  )
}
