import React from "react";
import "./classic.css";
import "./rhimestone.css";
import ClassicMain from "../../imgs/chairs/pinkstool.jpg";
import Pinkstool from "../../imgs/chairs/pinkstool.jpg";
import Bluestool from "../../imgs/chairs/bluestool.jpg";

function Classic() {
  return (
    <div className="classic-main">
      <div className="classic-main-img">
        <img src={ClassicMain} alt="" />
        <div className="classic-collect-title-holder">
          <div className="classic-collect-h1">
            <h1>
              <strong>CLASSIC</strong>
            </h1>
            <h1>COLLECTION</h1>
          </div>
          <p>A TOUCH OF MODERN ON ANTIQUE.</p>
        </div>
      </div>
      <div className="classic-info-main-holder">
        <div className="rhinestone-center-info">
          <div className="rhinestone-info-word-holder">
            <p>
              The Classic collection is a custom made collection design with x
              in the year 2017. Every piece drawn and visualized in what would
              be the perfect piece for the modern extravagant client.
            </p>
          </div>
          <div className="rhinestone-pic1-holder">
            <img src={Pinkstool} alt="" className="classic-pic1" />
            <p>PINK FUR CHAIR</p>
          </div>
          <div className="rhinestone-pic2-holder" id="classic-pic2-holder">
            <img src={Bluestool} alt="" className="classic-pic2" />
            <p>BLUE FUR CHAIR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classic;
