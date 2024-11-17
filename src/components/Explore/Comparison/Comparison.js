import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Comparison.css";

export default function Comparison() {
  const [collegeList, setCollegeList] = useState([]);
  const [dataOne, setDataOne] = useState({});
  const [dataTwo, setDataTwo] = useState({});
  const [dataThree, setDataThree] = useState({});
  const [collegeLink, setCollegeLink] = useState("");
  const [branchListOne, setBranchListOne] = useState([]);
  const [branchListTwo, setBranchListTwo] = useState([]);
  const [branchListThree, setBranchListThree] = useState([]);

  useEffect(() => {
    axios
      .get("https://unionboard-backend.smitghelani.xyz/getAllPlcData")
      .then((response) => {
        setCollegeList(response.data.plcData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showCollegeList = (e, i) => {
    e.preventDefault();

    const modal = document.getElementsByClassName("modalCollegeList")[i - 1];

    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  };
  const onclick = function (i) {
    const modal = document.getElementsByClassName("modalCollegeList")[i - 1];

    modal.style.display = "none";
  };

  const findCollegeData = (id, i) => {
    if (i === 1) {
      axios
        .get(`https://unionboard-backend.smitghelani.xyz/comparison/${id}`)
        .then((response) => {
          setDataOne(response.data.result);
          setBranchListOne(Object.keys(response.data.result.branches));
          const modal =
            document.getElementsByClassName("modalCollegeList")[i - 1];

          modal.style.display = "none";

          const data = document.getElementsByClassName("ClgCompareDataOne")[0];
          const datablockone = document.getElementsByClassName("boxClgOne")[0];

          data.style.display = "block";
          datablockone.style.height = "100%";
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (i === 2) {
      axios
        .get(`https://unionboard-backend.smitghelani.xyz/comparison/${id}`)
        .then((response) => {
          setDataTwo(response.data.result);
          setBranchListTwo(Object.keys(response.data.result.branches));
          const modal =
            document.getElementsByClassName("modalCollegeList")[i - 1];

          modal.style.display = "none";

          const data = document.getElementsByClassName("ClgCompareDataTwo")[0];
          const datablocktwo = document.getElementsByClassName("boxClgTwo")[0];

          data.style.display = "block";
          datablocktwo.style.height = "100%";
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (i === 3) {
      axios
        .get(`https://unionboard-backend.smitghelani.xyz/comparison/${id}`)
        .then((response) => {
          setDataThree(response.data.result);
          setBranchListThree(Object.keys(response.data.result.branches));
          const modal =
            document.getElementsByClassName("modalCollegeList")[i - 1];

          modal.style.display = "none";

          const data = document.getElementsByClassName(
            "ClgCompareDataThree"
          )[0];
          const datablockthree =
            document.getElementsByClassName("boxClgThree")[0];

          data.style.display = "block";
          datablockthree.style.height = "100%";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="comparison">
      <div className="boxClgOne" style={{ height: "100vh" }}>
        <div
          className="btnClg btnClgOneDesign"
          onClick={(e) => showCollegeList(e, 1)}
        >
          <span>Select College</span>
        </div>
        <div className="modalCollegeList" style={{ display: "none" }}>
          <div className="comparisonCollegeList">
            <span className="close" onClick={() => onclick(1)}>
              &times;
            </span>
            <div className="modalCollegeListBtns">
              {collegeList.map((college, index) => (
                <button
                  className="collegeListBtn"
                  onClick={() => findCollegeData(college.collegeId, 1)}
                >
                  {college.collegeName}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="ClgCompareDataOne" style={{ display: "none" }}>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Institute Name</div>
            <div className="compareData">{dataOne.collegeName}</div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Institute Location</div>
            <div className="compareData">{dataOne.city}</div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Institute Fees</div>
            <div className="compareData">{dataOne.fees}</div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Institute Fees</div>
            <div className="compareData">
              {branchListOne.map((branch, i) => (
                <div className="nameOfRec">
                  {branch + ` (${dataOne.branches[branch].totalSeats})`}
                </div>
              ))}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Approved By</div>
            <div className="compareData">{dataOne.approvedBy}</div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Accepted Exam</div>
            <div className="compareData">{dataOne.acceptedExam}</div>
          </div>

          {/* <div>
              {
                dataOne.branches
              }
            </div> */}
          <div className="compareDataDiv">
            <div className="compareDataTitle">Placement Rate</div>
            <div className="compareData">
              {dataOne.plcRate == undefined && "--"}
              {dataOne.plcRate != undefined && dataOne.plcRate + " %"}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Maximum Package</div>
            <div className="compareData">
              {dataOne.maxPkg == undefined && "--"}
              {dataOne.maxPkg != undefined && dataOne.maxPkg}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Minimum Package</div>
            <div className="compareData">
              {dataOne.minPkg == undefined && "--"}
              {dataOne.minPkg != undefined && dataOne.minPkg}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Average Package</div>
            <div className="compareData">
              {dataOne.avgPkg == undefined && "--"}
              {dataOne.avgPkg != undefined && dataOne.avgPkg}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Major Recruiters</div>
            <div className="compareData">
              {dataOne.majorRec == undefined && "--"}
              {dataOne.majorRec != undefined &&
                Array(10)
                  .fill(0)
                  .map((rec, index) => (
                    <div className="nameOfRec">
                      {index < dataOne.majorRec.length && (
                        <div>{dataOne.majorRec[index]} </div>
                      )}
                    </div>
                  ))}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">
              No of Stdents Hired Last Year
            </div>
            <div className="compareData">
              {dataOne.lastYearHired == undefined && "--"}
              {dataOne.lastYearHired != undefined && dataOne.lastYearHired}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Visit Now</div>
            <div className="compareData">
              <a
                target="_blank"
                href={`http://${dataOne.website}`}
                className="visitNowBtn"
              >
                Visit Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="vsImg">
        <img src="./vsimag.png" alt="" />
      </div>
      <div className="boxClgTwo" style={{ height: "100vh" }}>
        <div
          className="btnClg btnClgTwoDesign"
          onClick={(e) => showCollegeList(e, 2)}
        >
          <span>Select College</span>
        </div>
        <div className="modalCollegeList" style={{ display: "none" }}>
          <div className="comparisonCollegeList">
            <span className="close" onClick={() => onclick(2)}>
              &times;
            </span>
            <div className="modalCollegeListBtns">
              {collegeList.map((college, index) => (
                <button
                  className="collegeListBtn"
                  onClick={() => findCollegeData(college.collegeId, 2)}
                >
                  {college.collegeName}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="ClgCompareDataTwo" style={{ display: "none" }}>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Institute Name</div>
            <div className="compareData">{dataTwo.collegeName}</div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Institute Location</div>
            <div className="compareData">{dataTwo.city}</div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Institute Fees</div>
            <div className="compareData">{dataTwo.fees}</div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Institute Fees</div>
            <div className="compareData">
              {branchListTwo.map((branch, i) => (
                <div className="nameOfRec">
                  {branch + ` (${dataTwo.branches[branch].totalSeats})`}
                </div>
              ))}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Approved By</div>
            <div className="compareData">{dataTwo.approvedBy}</div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Accepted Exam</div>
            <div className="compareData">{dataTwo.acceptedExam}</div>
          </div>

          {/* <div>
              {
                dataOne.branches
              }
            </div> */}
          <div className="compareDataDiv">
            <div className="compareDataTitle">Placement Rate</div>
            <div className="compareData">
              {dataTwo.plcRate == undefined && "--"}
              {dataTwo.plcRate != undefined && dataTwo.plcRate + " %"}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Maximum Package</div>
            <div className="compareData">
              {dataTwo.maxPkg == undefined && "--"}
              {dataTwo.maxPkg != undefined && dataTwo.maxPkg}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Minimum Package</div>
            <div className="compareData">
              {dataTwo.minPkg == undefined && "--"}
              {dataTwo.minPkg != undefined && dataTwo.minPkg}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Average Package</div>
            <div className="compareData">
              {dataTwo.avgPkg == undefined && "--"}
              {dataTwo.avgPkg != undefined && dataTwo.avgPkg}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Major Recruiters</div>
            <div className="compareData">
              {dataTwo.majorRec == undefined && "--"}
              {dataTwo.majorRec != undefined &&
                Array(10)
                  .fill(0)
                  .map((rec, index) => (
                    <div className="nameOfRec">
                      {index < dataTwo.majorRec.length && (
                        <div>{dataTwo.majorRec[index]} </div>
                      )}
                    </div>
                  ))}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">
              No of Stdents Hired Last Year
            </div>
            <div className="compareData">
              {dataTwo.lastYearHired == undefined && "--"}
              {dataTwo.lastYearHired != undefined && dataTwo.lastYearHired}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Visit Now</div>
            <div className="compareData">
              <a
                target="_blank"
                href={`http://${dataTwo.website}`}
                className="visitNowBtn"
              >
                Visit Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="vsImg">
        <img src="./vsimag.png" alt="" />
      </div>
      <div className="boxClgThree" style={{ height: "100vh" }}>
        <div
          className="btnClg btnClgThreeDesign"
          onClick={(e) => showCollegeList(e, 3)}
        >
          <span>Select College</span>
        </div>
        <div className="ClgCompareDataThree" style={{ display: "none" }}>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Institute Name</div>
            <div className="compareData">{dataThree.collegeName}</div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Institute Location</div>
            <div className="compareData">{dataThree.city}</div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Institute Fees</div>
            <div className="compareData">{dataThree.fees}</div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Institute Fees</div>
            <div className="compareData">
              {branchListThree.map((branch, i) => (
                <div className="nameOfRec">
                  {branch + ` (${dataThree.branches[branch].totalSeats})`}
                </div>
              ))}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Approved By</div>
            <div className="compareData">{dataThree.approvedBy}</div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Accepted Exam</div>
            <div className="compareData">{dataThree.acceptedExam}</div>
          </div>

          {/* <div>
              {
                dataOne.branches
              }
            </div> */}
          <div className="compareDataDiv">
            <div className="compareDataTitle">Placement Rate</div>
            <div className="compareData">
              {dataThree.plcRate == undefined && "--"}
              {dataThree.plcRate != undefined && dataThree.plcRate + " %"}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Maximum Package</div>
            <div className="compareData">
              {dataThree.maxPkg == undefined && "--"}
              {dataThree.maxPkg != undefined && dataThree.maxPkg}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Minimum Package</div>
            <div className="compareData">
              {dataThree.minPkg == undefined && "--"}
              {dataThree.minPkg != undefined && dataThree.minPkg}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Average Package</div>
            <div className="compareData">
              {dataThree.avgPkg == undefined && "--"}
              {dataThree.avgPkg != undefined && dataThree.avgPkg}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Major Recruiters</div>
            <div className="compareData">
              {dataThree.majorRec == undefined && "--"}
              {dataThree.majorRec != undefined &&
                Array(10)
                  .fill(0)
                  .map((rec, index) => (
                    <div className="nameOfRec">
                      {index < dataThree.majorRec.length && (
                        <div>{dataThree.majorRec[index]} </div>
                      )}
                    </div>
                  ))}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">
              No of Stdents Hired Last Year
            </div>
            <div className="compareData">
              {dataThree.lastYearHired == undefined && "--"}
              {dataThree.lastYearHired != undefined && dataThree.lastYearHired}
            </div>
          </div>
          <div className="compareDataDiv">
            <div className="compareDataTitle">Visit Now</div>
            <div className="compareData">
              <a
                target="_blank"
                href={`http://${dataThree.website}`}
                className="visitNowBtn"
              >
                Visit Now
              </a>
            </div>
          </div>
        </div>
        <div className="modalCollegeList" style={{ display: "none" }}>
          <div className="comparisonCollegeList">
            <span className="close" onClick={() => onclick(3)}>
              &times;
            </span>
            <div className="modalCollegeListBtns">
              {collegeList.map((college, index) => (
                <button
                  className="collegeListBtn"
                  onClick={() => findCollegeData(college.collegeId, 3)}
                >
                  {college.collegeName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
