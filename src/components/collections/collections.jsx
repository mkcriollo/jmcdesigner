import React from "react";
import "./collections.css";
import { Link } from "react-router-dom";

function Collections() {
  return (
    <div className="collection-full">
      <div className="collect1 animate__animated animate__fadeInDown">
        <div></div>
        <p>BUGATTI COLLECTION</p>
      </div>
      <Link to="/rhinestone">
        <div className="collect2 animate__animated animate__fadeInDown">
          <div></div>
          <p>RHIMESTONE COLLECTION</p>
        </div>
      </Link>
      <Link to="/classic">
        <div className="collect3 animate__animated animate__fadeInDown">
          <div></div>
          <p>CLASSICAL COLLECTION</p>
        </div>
      </Link>
      <div></div>
    </div>
  );
}

export default Collections;
