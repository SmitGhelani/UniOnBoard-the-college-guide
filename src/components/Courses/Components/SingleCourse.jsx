import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import VideoPalyer from "react-video-js-player";
import axios from "axios";
import "./SingleCourse.css";

export default function SingleCourse() {
  const { id } = useParams();
  const apiURL = `https://unionboard-backend.smitghelani.site/getCourseContent/${id}`;
  const [sectionData, setSectionData] = useState([]);
  const [courseData, setCourseData] = useState({});
  const [mainPanelSrc, setMainPanelSrc] = useState("");
  const [mainPanelTitle, setMainPanelTitle] = useState("");
  const [mainPanelDesc, setMainPanelDesc] = useState("");
  const [secData, setSecData] = useState([]);
  const [lecData, setLecData] = useState([]);
  const [volume, setVolume] = useState(50);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const onPause = (e) => {
    e.preventDefault();

    const video = document.getElementById("courseVideo");
    const btnIcon = document.getElementById("pauseBtnIcon");
    var vid = document.getElementsByTagName("video");

    if (!playing) {
      video.play();
      setPlaying(true);
      btnIcon.className = "fa-solid fa-pause";
      setVideoTime(parseInt(vid[0].duration));
    } else {
      video.pause();
      setPlaying(false);
      btnIcon.className = "fa-solid fa-play";
    }
  };

  const onFullScreen = (e) => {
    e.preventDefault();

    const video = document.getElementById("courseVideo");

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      /* IE11 */
      video.msRequestFullscreen();
    }
  };

  const onVolume = (e) => {
    e.preventDefault();

    const video = document.getElementById("courseVideo");
    const volIcon = document.getElementById("volIcon");
    const progressBar = document.getElementById("progressValue");

    if (video.volume === 0) {
      video.volume = 1.0;
      setVolume(1);
      progressBar.value = 1;
      volIcon.className = "fa-solid fa-volume-high";
    } else {
      video.volume = 0.0;
      setVolume(0);
      progressBar.value = 0;
      volIcon.className = "fa-solid fa-volume-xmark";
    }
  };

  const showDropDown = (e) => {
    var dropdown = document.getElementsByClassName(`videoSectionTitle ${e}`);
    var i;

    for (i = 0; i < dropdown.length; i++) {
      var dropdownContent = dropdown[i].nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    }
  };

  const displayDesc = (e) => {
    e.preventDefault();
    var dropdownContent = document.getElementById("videoMainPanelDesc");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://unionboard-backend.smitghelani.site/getCourseContent/${id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        // console.log(response)
        setSectionData(response.data.dataAll);
        setCourseData(response.data.result);
        setMainPanelSrc(response.data.dataAll[0].LectureVideo.secure_url);
        setMainPanelTitle(response.data.dataAll[0].VideoName);
        setMainPanelDesc(response.data.dataAll[0].LectureDesc);
        setLecData(response.data.lecData);
        setSecData(response.data.secData);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changeUrl = (sec, lec) => {
    for (let i = 0; i < sectionData.length; i++) {
      if (sectionData[i].SectionNo === sec + 1) {
        if (sectionData[i].LectureNo === lec + 1) {
          setMainPanelSrc(sectionData[i].LectureVideo.secure_url.toString());
          setMainPanelTitle(sectionData[i].VideoName);
          setMainPanelDesc(sectionData[i].LectureDesc);
        }
      }
    }
  };

  const sliderValue = (e) => {
    e.preventDefault();
    const slider = document.getElementById("volInput");
    const progressBar = document.getElementById("progressValue");
    const video = document.getElementById("courseVideo");
    progressBar.value = slider.value;
    video.volume = slider.value / 100;

    setVolume(slider.value);
    const volIcon = document.getElementById("volIcon");

    if (video.volume === 0) {
      volIcon.className = "fa-solid fa-volume-xmark";
    } else {
      volIcon.className = "fa-solid fa-volume-high";
    }
  };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  window.setInterval(() => {
    var vid = document.getElementsByTagName("video");

    setCurrentTime(parseInt(vid[0].currentTime));
    setProgress((parseInt(vid[0].currentTime) / videoTime) * 100);
  }, 1000);

  return (
    <div className="videoCourse">
      <div className="courseVideos">
        <div className="videoMainPanel">
          <div className="videoMainPanelItem">
            <div
              className="player rel"
              style={{ width: "100%", height: "100%" }}
            >
              <video
                ref={videoRef}
                className="video"
                id="courseVideo"
                src={mainPanelSrc}
              />
              <div className="ctrls abs aic flex">
                <button className="revert s24" id="revert" onClick={revert}>
                  <i className="fa-solid fa-arrow-rotate-left"></i>
                </button>
                <button
                  className="icon-pause s24 pp"
                  id="pausebtn"
                  onClick={(e) => onPause(e)}
                >
                  <i id="pauseBtnIcon" className="fa-solid fa-play"></i>
                </button>
                <button
                  className="fastfor s24"
                  id="fastfor"
                  onClick={fastForward}
                >
                  <i className="fa-solid fa-arrow-rotate-right"></i>
                </button>
                <div className="timer rel fontn s15 cfff">
                  {Math.floor(currentTime / 60) +
                    ":" +
                    ("0" + Math.floor(currentTime % 60)).slice(-2)}
                  /
                  {Math.floor(videoTime / 60) +
                    ":" +
                    ("0" + Math.floor(videoTime % 60)).slice(-2)}
                </div>
                <div className="slider rel">
                  <div className="prog rel">
                    <div
                      id="progressBar"
                      style={{ width: `${progress}%` }}
                      className="bar rel"
                    >
                      <div className="knob abs" />
                    </div>
                  </div>
                </div>
                <div className="slider-cont">
                  <div className="sliderValue">
                    <button
                      className="vol s24"
                      id="vol"
                      onClick={(e) => {
                        onVolume(e);
                      }}
                    >
                      <i id="volIcon" className="fa-solid fa-volume-high"></i>
                    </button>
                  </div>
                  <div className="sliderVol">
                    <input
                      type={"range"}
                      id="volInput"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={(e) => sliderValue(e)}
                    ></input>
                    <progress
                      id="progressValue"
                      min="0"
                      max="100"
                      value="50"
                    ></progress>
                  </div>
                </div>

                <button
                  className="fs s24"
                  id="fs"
                  onClick={(e) => onFullScreen(e)}
                >
                  <i id="fsIcon" className="fa-solid fa-expand"></i>
                </button>
              </div>
            </div>

            <div
              className="videoMainPanelTitle"
              onClick={(e) => displayDesc(e)}
            >
              <div className="title">{mainPanelTitle}</div>
              <div className="dropIcon">
                <i className="videoSectionIcon fa-solid fa-sort-down"></i>
              </div>
            </div>
            <div
              className="videoMainPanelDesc"
              id="videoMainPanelDesc"
              style={{ display: "block" }}
            >
              <div className="descContent" style={{ fontWeight: "500" }}>
                Description
              </div>
              <div className="descContent">{mainPanelDesc}</div>
            </div>
          </div>
        </div>
        <div className="videoListPanel">
          <div className="videoCourseHeading">{courseData.CourseTitle}</div>
          {secData.map((lecture, index) => (
            <div className="videoListPanelItem">
              <button
                className={`videoSectionTitle ${index}`}
                onClick={(e) => showDropDown(index)}
              >
                <div className="sidebarTitle">{lecture}</div>
                <div className="dropIcon">
                  <i className="videoSectionSidebarIcon fa-solid fa-sort-down"></i>
                </div>
              </button>

              <div
                className={`subVideo ${index}`}
                id={`subVideo ${index}`}
                style={{ display: "none" }}
              >
                {lecData[index].map((lec, i) => (
                  <div
                    className={`videoLectureTitle ${index}${i}`}
                    id={`videoLectureTitle ${index}${i}`}
                    onClick={() => changeUrl(index, i)}
                  >
                    {lec}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
