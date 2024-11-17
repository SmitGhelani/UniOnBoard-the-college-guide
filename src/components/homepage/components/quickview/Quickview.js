import React, { Component, useState } from "react";
import Examlist from "./Examlist";
import QuickButton from "./QuickButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./quickview.scss";
import { Button } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default class Quickview extends Component {
  render() {
    return (
      <div className="mb-2 pb-2">
        <h2 className="pt-2 mt-2 pb-2 mb-2  motiveh1">
          <b>Quick View On Colleges</b>
        </h2>
        <div className="buttonclick">
          <Carousel
            breakPoints={breakPoints}
            itemPadding={[0, 22]}
            itemsToShow={3}
            easing="cubic-bezier(1,.15,.55,1.54)"
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
            transitionMs={500}
          >
            <a id="myLink" href="https://bvmengineering.ac.in/" target="_blank">
              {" "}
              <QuickButton btn1="BVM College Anand" />
            </a>
            <a id="myLink" href="http://www.ssgc.cteguj.in/" target="_blank">
              {" "}
              <QuickButton btn1=" Ghandhy College Surat" />
            </a>
            <a id="myLink" href="https://ldce.ac.in/" target="_blank">
              {" "}
              <QuickButton btn1="LD College Ahmedabad " />
            </a>
            <a id="myLink" href="https://www.svnit.ac.in/" target="_blank">
              {" "}
              <QuickButton btn1="SVNIT College Surat" />
            </a>
            <a id="myLink" href="https://nirmauni.ac.in/" target="_blank">
              {" "}
              <QuickButton btn1="Nirma University Ahmedabad" />
            </a>
            <a id="myLink" href="https://www.vgecg.ac.in/" target="_blank">
              {" "}
              <QuickButton btn1="VGEC College Ahmedabad" />
            </a>
            <a id="myLink" href="https://www.ddu.ac.in/" target="_blank">
              {" "}
              <QuickButton btn1="DDU College Nadiad" />
            </a>
            <a id="myLink" href="https://www.adit.ac.in/" target="_blank">
              {" "}
              <QuickButton btn1="ADIT College Anand" />
            </a>
          </Carousel>
        </div>
      </div>
    );
  }
}
