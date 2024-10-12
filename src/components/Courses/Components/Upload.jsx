
import { useState } from 'react';
import './Upload.css';
import axios from 'axios';
import { fontSize } from '@mui/system';
import LoadingOverlay from 'react-loading-overlay-ts';


export default function Upload() {
  const [page,setPage] = useState(1);
  const [values, setValues] = useState({})
  const [sectionField, setSectionField] = useState([{SectionName:"",lectureNo:1}]);
  const [courseData,setCourseData] = useState({}) 
  const [isActive,setIsActive] = useState(false) 
  const [courseExist, setCourseExist] = useState(false)
  const [sectionExist, setSectionExist] = useState(false)
  const [landingPageExist, setLandingPageExist] = useState(false)


  const handleSectionAdd = () => {
    setSectionField([...sectionField,{SectionName:"",lectureNo:1}])
  }

  const handleLectureAdd = (e) => {
    var tempData = sectionField;

    tempData[e].lectureNo += 1;
    setSectionField(tempData);
    setSectionField([...sectionField])
  }

  const validate = (page) =>{
      if(page === 1){
        if(!values["courseTitle"]){
          alert("Course Title is required please make sure it's not empty")
          return false
        }
        else if(!values["courseCategory"]){
          alert("Course Learning is required please make sure it's not empty")
          return false
        }
        else if(!values["targetAudience"]){
          alert("Target audience for the course is required please make sure it's not empty")
          return false
        }
        else{
          return true
        }
      }
      if(page === 2){
      for(let i=0;i<sectionField.length; i++){
          if(!values[`sectionName${i}`]){
            alert(`Please give name to the section no ${i}`);
            return false
          }
          for(let j=0;j<sectionField[i].lectureNo;j++){
            if(!values[`lectureVideo${i}${j}`]){
              alert(`Lecture Video is missing in ${i+1}th section and ${j+1}th lecture`);
              return false
            }
            else if(!values[`lectureName${i}${j}`]){
              alert(`Lecture Name is missing in ${i+1}th section and ${j+1}th lecture`);
              return false
            }
            else if(!values[`lectureDesc${i}${j}`]){
              alert(`Lecture Description is missing in ${i+1}th section and ${j+1}th lecture`);
              return false
            }
          }
        }
        return true
      }
      if(page === 3){
        if(!values["courseTitle"]){
          alert("Course Title is required please make sure it's not empty")
          return false
        }
        else if(!values["landingPageDesc"]){
          alert("Course Description is empty")
          return false
        }
        else if(!values["courseLanguage"] || values['courseLanguage']==="None"){
          alert("Please choose language of your course")
          return false
        }
        else if(!values["courseDifficulty"] || values['courseDifficulty']==="None"){
          alert("Please choose Difficulty level of your course")
          return false
        }
        else if(!values["landingPageCategory"] || values['landingPageCategory']==="None"){
          alert("Plaese choose category which describes best to your course")
          return false
        }
        else if(!values["landingPageLearning"]){
          alert("Learning of course should not be empty")
          return false
        }
        else if(!values["courseImage"]){
          alert("Please select image for your course")
          return false
        }
        else if(!values["coursePrice"]){
          alert("Please write price of your course else write 0")
          return false
        }else if(isNaN(values["coursePrice"])){
          alert("Please write numeric value for course price")
          return false
        }
        else{
          return true
        }
      }
      if(page === 4){
        if(!values["welcomeMessage"]){
          alert("Please write welcome message")
          return false
        }
        else if(!values["congoMessage"]){
          alert("please write congratulations message")
          return false
        }
        else{
          return true
        }
      }
      if(page === 5){
        if(!values["courseMode"] || values['courseMode']==="None"){
          alert("Please select mode for your course")
          return false
        }else{
          return true
        }
      }else{
        alert("Unwanted error is discovered")
      }
    }
  
  const onSubmit = async (e) => {
    if(validate(page)){
      setIsActive(true);

      e.preventDefault();
      
      const formdata = new FormData();
      formdata.append("CourseTitle",values["courseTitle"]);
      formdata.append("CourseLearning",values["courseCategory"]);
      formdata.append("CoursePrerequisite",values["coursePrerequisite"]);
      formdata.append("CourseAudience",values["targetAudience"]);
      formdata.append("LectureCaption",values["courseCaption"]);

      var coursePage = undefined;

      try {
        coursePage = await axios({
          url: "http://unionboard-backend.smitghelani.xyz/addCourseOverview",
          method: 'POST',
          Headers: {
              'content-Type': 'multipart/form-data',
          },
          withCredentials: true,data:formdata
        })
        
      } catch (err) {
        setIsActive(false)
          console.log(err)
          alert("Unwanted error is discovered")
          return
      }
      
      if(coursePage){
        setCourseData(coursePage.data.result)
        setCourseExist(true)
        setIsActive(false)
      }

      await addSections(e);
      await addLandingPage(e);
    }
  }
  
  const addSections = async(e)=>{
    if(courseExist && validate(page) && courseData){
      setIsActive(true)
      e.preventDefault();

      var fd = new FormData();
      var response = undefined;

      for(let i=0;i<sectionField.length;i++){
        for(let j=0; j<sectionField[i].lectureNo;j++){
          fd = new FormData();    
          fd.append("CourseId",courseData._id);
          fd.append("SectionNo",parseInt(i)+1);
          fd.append("SectionName",values[`sectionName${i}`]);
          fd.append("LectureNo",parseInt(j)+1);
          fd.append("ContentType","video");
          fd.append("VideoName",values[`lectureName${i}${j}`]);
          fd.append("LectureDesc",values[`lectureDesc${i}${j}`]);
          fd.append("LectureVideo",values[`lectureVideo${i}${j}`]);
          fd.append("LectureResourceFile",values[`lectureResource${i}${j}`]);

          try {
             response = await axios({
              url: 'http://unionboard-backend.smitghelani.xyz/addSectionContent',
              method: 'POST',
              Headers: {
                  'content-Type': 'multipart/form-data',
              },
              withCredentials: true,data:fd
            })
            
          } catch (err) {
            setIsActive(false)
            console.log(err)
            alert("Unwanted error is discovered")
            setPage(1)
            return
          }
        }
      }
      if(response){
        console.log(response)
        setSectionExist(true)
        setIsActive(false)
      }
    }
  }

  const addLandingPage = async(e) =>{
    if(sectionExist){
      setIsActive(true)
      e.preventDefault();
      
      const formdata = new FormData();
      formdata.append("CourseId",courseData._id);
      formdata.append("CourseTitle",values["courseTitle"]);
      formdata.append("CourseSubTitle",values["courseSubTitle"]);
      formdata.append("CourseDesc",values["landingPageDesc"]);
      formdata.append("CourseLanguage",values["courseLanguage"]);
      formdata.append("DifficultyLevel",values["courseDifficulty"]);
      formdata.append("CourseCategory",values["landingPageCategory"]);
      formdata.append("CourseLearing",values["landingPageLearning"]);
      formdata.append("Pricing",values["coursePrice"]);
      formdata.append("CouponCode",values["courseCoupon"]);
      formdata.append("WelcomeMessage",values["welcomeMessage"]);
      formdata.append("CongoMessage",values["congoMessage"]);
      formdata.append("Mode",values["courseMode"]);
      formdata.append("CourseImg",values["courseImage"]);
      formdata.append("CoursePromo",values["coursePromo"]);

      var landingPage = undefined;
      try {
        landingPage = await axios({
          url: 'http://unionboard-backend.smitghelani.xyz/addLandingPage',
          method: 'POST',
          Headers: {
              'content-Type': 'multipart/form-data',
          },
          withCredentials: true,data:formdata
        })
      } catch (err) {
        setIsActive(false)
        console.log(err)
        alert("Unwanted error is discovered")
        return
      }
      if(landingPage){
        console.log(landingPage)
        setLandingPageExist(true)
        setIsActive(false)
      }
      if(landingPageExist){
        setIsActive(false)
        alert("Course added successfuly")
        setPage(1)
      }
    }
  }

  const firstForm = ()=>{
    
    return(
        <div className="courseOverview">
        <label className="panelHeader">Basic Overview</label>
        <div className="courseTitlePanel">
        <label className="questionLabel">What is the title of your course?<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
        <input className="answerField" id="courseTitle" value={values["courseTitle"]} onChange={(e) => {
          fieldChanged("courseTitle", e.target.value);
        }} placeholder="Example: React Tutorial..." />
      </div>
      <div className="courseCategory">
        <label className="questionLabel">What will student learn in your course?<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
        <input className="answerField" id="courseCategory" value={values["courseCategory"]} onChange={(e) => {
          fieldChanged("courseCategory", e.target.value);
        }} placeholder="Example: React basics..." />
      </div>
      <div className="coursePrerequisite">
        <label className="questionLabel">Are there any course requirement or prerequisites?</label>
        <input className="answerField" id="coursePrerequisite" value={values["coursePrerequisite"]} onChange={(e) => {
          fieldChanged("coursePrerequisite", e.target.value);
        }} placeholder="Example: Basic knowledge about JavaScript" />
      </div>
      <div className="targetAudience">
        <label className="questionLabel">What are your target audience?<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
        <input className="answerField" id="targetAudience" value={values["targetAudience"]} onChange={(e) => {
          fieldChanged("targetAudience", e.target.value);
        }} placeholder="Example: Curious about web-development" />
      </div>
      <div className="courseCaption">
        <label className="questionLabel">Captions</label>
        <input className="answerField" id="courseCaption" value={values["courseCaption"]} onChange={(e) => {
          fieldChanged("courseCaption", e.target.value);
        }} placeholder="Example: React.js, Web-Development" />
      </div>
        <div className='formButton'>
          {page > 1 && <button className="formButtonbBack" onClick={prevPage}>Back</button>}&nbsp;
          {page < 5 && <button className='formButtonNext' onClick={nextPage}>Next</button>}
          {page === 5 && <button className='formButtonSubmit' onClick={onSubmit}>Submit</button>}
        </div>
    </div>);
  }

  const secondForm = ()=>{
    
    return(
        <div className='courseSection'>
          <label className='panelHeader'>Course Section</label>
            {
              sectionField.map((singleField,indexPri) => (
                  <div className='Section'>
                    {sectionField.length >1 &&
                      <div className='deleteButtonSection'>
                        <button id='deleteSection' style={{display:"none"}}></button>
                        <label htmlFor='deleteSection' className='deleteSection'><i className="fa-solid fa-trash-can"></i></label>
                      </div>
                    }
                  <div className='courseSectionName'>
                    <label className='courseSectionNameLabel'>Section Name<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
                    <input className='courseSectionNameInput' id={`sectionName${indexPri}`} value={values[`sectionName${indexPri}`]} onChange={(e) => {
                      fieldChanged(`sectionName${indexPri}`, e.target.value);
                    }} />
                  </div>
                  <div className='addLecture'>
                </div>
                {
                Array(parseInt(singleField.lectureNo)).fill(1).map((singleLec, index)=>(
                  <div className='Lecture'>
                  {singleField.lectureNo > 1 &&
                    <div className='deleteButtonLecture'>
                      <button id='deleteLecture' style={{display:"none"}}></button>
                      <label htmlFor='deleteLecture' className='deleteLecture'><i className="fa-solid fa-trash-can"></i></label>
                    </div>
                  }
                  <div className='courseVideoUpload'>
                    <input type="file" id={`lectureVideo${indexPri}${index}`} onChange={(e) => {
                      fieldChanged(`lectureVideo${indexPri}${index}`, e.target.files[0]);
                      document.getElementById(`videoLecture${indexPri}${index}`).innerHTML = "Selected file: "+e.target.files[0].name;
                      document.getElementById(`videoLecture${indexPri}${index}`).style.fontSize = "18px";
                    }} style={{display:"none"}}  />
                    <label htmlFor={`lectureVideo${indexPri}${index}`} id={`videoLecture${indexPri}${index}`}><i className="courseVideoUploadIcon fa-solid fa-upload"></i><label htmlFor={`lectureVideo${indexPri}${index}`} className='resourceLabel'>Upload Video</label></label>
                    
                  </div>
                  <div className="courseLectureName">
                    <label className='courseLectureNameLabel'>Lecture Name<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
                    <input className='courseLectureNameInput' id={`lectureName${indexPri}${index}`} value={values[`lectureName${indexPri}${index}`]} onChange={(e) => {
                      fieldChanged(`lectureName${indexPri}${index}`, e.target.value);
                    }} />
                  </div>
                  <div className="courseLectureDesc">
                    <label className="courseLectureDescLabel">Lecture Description<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
                    <textarea className="courseLectureDescInput" id={`lectureDesc${indexPri}${index}`} value={values[`lectureDesc${indexPri}${index}`]} onChange={(e) => {
                      fieldChanged(`lectureDesc${indexPri}${index}`, e.target.value);
                    }} placeholder='Write Something...' />
                  </div>
                  <div className='courseResourceUpload'>
                    <label className='courseResourceLabel'>Course Resources</label>
                    <input type="file" className='courseResourceUploadInput' id={`lectureResource${indexPri}${index}`}  onChange={(e) => {
                      fieldChanged(`lectureResource${indexPri}${index}`, e.target.files[0]);
                      document.getElementById(`lecResource${indexPri}${index}`).innerHTML = "Selected file: "+e.target.files[0].name;
                      document.getElementById(`lecResource${indexPri}${index}`).style.fontSize = "18px";
                    }} style={{display:"none"}} />
                    <label htmlFor={`lectureResource${indexPri}${index}`} id={`lecResource${indexPri}${index}`} ><i className="courseResourceUploadIcon fa-solid fa-plus"></i>Add</label>
                  </div>
                </div>
                ))}
                <button className='lectureButton' id="add" onClick={(e)=>{
                  handleLectureAdd(indexPri)
                }}>Add Lecture</button>
              </div>
              ))} 
            <button className='sectionButton' onClick={handleSectionAdd}>Add Section</button>
          <div className='formButton'>
            {page > 1 && <button className="formButtonbBack" onClick={prevPage}>Back</button>}&nbsp;
            {page < 5 && <button className='formButtonNext' onClick={nextPage}>Next</button>}
            {page === 5 && <button className='formButtonSubmit' onClick={onSubmit}>Submit</button>}
          </div>
        </div>
    )
  }

  const thirdForm = ()=>{
    const category = [
      "None",
        "Development",
        "Bussiness",
        "IT & Software",
        "Personal Development",
        "Design",
        "Marketing",
        "Lifestyle",
        "Photography",
        "Health & Fitness",
        "Music",
        "Teaching & Academics",
        "Other"
      ]
    const language = ["None","English", "Gujarati", "Hindi"];
    const difficulty = ["None","Beginner", "Intermediate", "Advanced", "Mixed"]

    return(
        <div className='landingPageForm'>
        <label className='panelHeader'>Course Landing Page</label>
            <div className='landingPageTitle'>
              <label className='landingPageTitleLabel'>Course Title<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
              <input className='landingPageTitleInput' id="landingPageTitle" value={values["landingPageTitle"]} onChange={(e) => {
                fieldChanged("landingPageTitle", e.target.value);
              }} />
            </div>
            <div className='landingPageSubTitle'>
              <label className='landingPageSubTitleLabel'>Course Sub-Title</label>
              <input className='landingPageSubTitleInput' id="landingPageSubTitle" value={values["landingPageSubTitle"]} onChange={(e) => {
                fieldChanged("landingPageSubTitle", e.target.value);
              }} />
            </div>
            <div className='landingPageDesc'>
              <label className='landingPageDescLabel'>Course Description<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
              <textarea className='landingPageDescInput' id="landingPageDesc" value={values["landingPageDesc"]} onChange={(e) => {
                fieldChanged("landingPageDesc", e.target.value);
              }} placeholder='Write Something...' />
            </div>
            <div className='courseLanguage'>
              <label className='courseLanguageLabel'>Language<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
              <select className='courseLanguageInput' label="Language" id="courseLanguage" value={values["courseLanguage"]} onChange={(e) => {
                fieldChanged("courseLanguage", e.target.value);
              }} defaultValue="None" >
                {
                  language.map(
                    (data) => (<option value={data} >{data}</option>)
                  )
                }
              </select>
            </div>
            <div className='courseDifficulty'>
              <label className='courseDifficultyLabel'>Difficulty Level<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
              <select className='courseDifficultyInput' label="Difficulty" id="courseDifficulty" value={values["courseDifficulty"]} onChange={(e) => {
                fieldChanged("courseDifficulty", e.target.value);
              }} defaultValue="None" >
                {
                  difficulty.map(
                    (data) => (<option value={data} >{data}</option>)
                  )
                }
              </select>
            </div>
            <div className='landingPageCategory'>
              <label className='landingPageCategoryLabel'>What is the category of your course?<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
              <select className='landingPageCategoryInput' label="Category" id="landingPageCategory" value={values["landingPageCategory"]} onChange={(e) => {
                fieldChanged("landingPageCategory", e.target.value);
              }} defaultValue="None" >
                {
                  category.map(
                    (data) => (<option value={data} >{data}</option>)
                  )
                }
              </select>
            </div>
            <div className='landingPageLearning'>
              <label className='landingPageLearningLabel'>What are the learning for this course?<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
              <input className='landingPageLearningInput' id="landingPageLearning" value={values["landingPageLearning"]} onChange={(e) => {
                fieldChanged("landingPageLearning", e.target.value);
              }} />
            </div>
            <label className='courseImageLabel'>Course Image<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
            <div className='courseImageUpload'>
              <input type="file" id="courseImage" onChange={(e) => {
                fieldChanged("courseImage", e.target.files[0]);
                document.getElementById("cimage").innerHTML = "Selected file: "+e.target.files[0].name;
                document.getElementById("cimage").style.fontSize = "18px";
              }} style={{display:"none"}}/>
              <label htmlFor='courseImage' id="cimage"><i className="courseImageUploadIcon fa-solid fa-upload"></i><label htmlFor="courseImage" className='resourceLabel'>Upload Image</label></label>
            </div>
            <label className='coursePromoLabel'>Course Promo Video</label>
            <div className='coursePromoUpload'>
              <input type="file" id="coursePromo" onChange={(e) => {
                fieldChanged("coursePromo", e.target.files[0]);
                document.getElementById("cpromo").innerHTML = "Selected file: "+e.target.files[0].name;
                document.getElementById("cpromo").style.fontSize = "18px";
              }} style={{display:"none"}}/>
              <label htmlFor='coursePromo' id="cpromo"><i className="coursePromoUploadIcon fa-solid fa-upload"></i><label htmlFor="coursePromo" className='resourceLabel'>Upload Promo Video</label></label>
            </div>
            <div className='coursePrice'>
              <label className='coursePriceLabel'>Pricing<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
              <input className='coursePriceInput' id="coursePrice" value={values["coursePrice"]} onChange={(e) => {
                fieldChanged("coursePrice", e.target.value);
              }} />
            </div>
            <div className='courseCoupon'>
              <label className='courseCouponLabel'>Coupon Code</label>
              <input className='courseCouponInput' id="courseCoupon" value={values["courseCoupon"]} onChange={(e) => {
                fieldChanged("courseCoupon", e.target.value);
              }} />
            </div>
          <div className='formButton'>
            {page > 1 && <button className="formButtonbBack" onClick={prevPage}>Back</button>}&nbsp;
            {page < 5 && <button className='formButtonNext' onClick={nextPage}>Next</button>}
            {page === 5 && <button className='formButtonSubmit' onClick={onSubmit}>Submit</button>}
          </div>
        </div>
    )
  }

  const forthForm = () =>{
    return(
        <div className='messagePanel'>
          <div className='messagePanelWelcome'>
            <label className='messagePanelWelomeLabel'>Welcome Message<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
            <textarea className="messagePanelWelcomeText" id="welcomeMessage" value={values["welcomeMessage"]} onChange={(e) => {
                fieldChanged("welcomeMessage", e.target.value);
              }} placeholder="Write something..." />
          </div>
          <div className='messagePanelCongo'>
          <label className='messagePanelCongoLabel'>Congretulations Message<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
            <textarea className="messagePanelCongoText" id="congoMessage" value={values["congoMessage"]} onChange={(e) => {
                fieldChanged("congoMessage", e.target.value);
              }} placeholder="Write something..." />
          </div>
          <div className='formButton'>
            {page > 1 && <button className="formButtonbBack" onClick={prevPage}>Back</button>}&nbsp;
            {page < 5 && <button className='formButtonNext' onClick={nextPage}>Next</button>}
            {page === 5 && <button className='formButtonSubmit' onClick={onSubmit}>Submit</button>}
          </div>
        </div>
    )
  }

  const fifthForm = () =>{
    const mode = ["None","Live", "Draft"]
    return(
        <div className='courseMode'>
          <div className='courseModePanel'>
            <label className='courseModeLabel'>Course Mode<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
            <select className='courseModeInput' label="Mode" id="courseMode" value={values["courseMode"]} onChange={(e) => {
                fieldChanged("courseMode", e.target.value);
              }} defaultValue="None" >
              {
                mode.map(
                  (data) => (<option value={data} >{data}</option>)
                )
              }
            </select>
          </div>
          <div className='formButton'>
            {page > 1 && <button className="formButtonbBack" onClick={prevPage}>Back</button>}&nbsp;
            {page < 5 && <button className='formButtonNext' onClick={nextPage}>Next</button>}

            {page === 5 && <button className='formButtonSubmit' onClick={onSubmit}>Submit</button>}
          </div>
        </div>
    )
  }

  const executeForm = (page) =>{
    if(page === 1){
      return firstForm()
    }
    if(page === 2){
      return secondForm()
    }
    if(page === 3){
      return thirdForm()
    }
    if(page === 4){
      return forthForm()
    }
    if(page === 5){
      return fifthForm()
    }
  }

  const navigatePages = (direction) => () => {
      const findNextPage = (page) => {

          const upcomingPageData = executeForm(page);
          if (upcomingPageData.conditional && upcomingPageData.conditional.field) {

            const segments = upcomingPageData.conditional.field.split("_");
            const fieldId = segments[segments.length - 1];
            const fieldToMatchValue = values[fieldId];
            if (fieldToMatchValue !== upcomingPageData.conditional.value) {
                return findNextPage(direction === "next" ? page + 1 : page - 1);
            }
          }
        return page;
      };
      setPage(findNextPage(direction === "next" ? (validate(page)? page + 1 : page) : page - 1));
  };

  const nextPage = navigatePages("next");
  const prevPage = navigatePages("prev");

  const [currentPageData, setCurrentPageData] = useState(executeForm(page));

  const fieldChanged = (fieldId, value) => {
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });
  
    setCurrentPageData((currentPageData) => {
      return Object.assign({}, currentPageData);
    });
  };

  return (
    <LoadingOverlay
    active={isActive}
    spinner
    text='Uploading Course Please wait...'
    >
      <div className='upload'>
          {
            executeForm(page)
          }
      </div>
    </LoadingOverlay>
  )
}


