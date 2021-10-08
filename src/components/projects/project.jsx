import React, { useState, useEffect } from "react";
import "./project.css";
import TableContent from "./table-content";

// import pictures

// chairs images
import Bluestool from "../../imgs/chairs/bluestool.png";
import Pinkstool from "../../imgs/chairs/pinkstool.png";
import V2blue from "../../imgs/chairs/v2blueseat.png";
import V2orange from "../../imgs/chairs/v2orangeseat.png";
import V2green from "../../imgs/chairs/v2greenseat.png";
import silverMultiColor from "../../imgs/chairs/silverMultiColorPairChair.png";

// table images
import Blackcrystaltable from "../../imgs/tables/bandwcrystal.png";
import Blacksplashtable from "../../imgs/tables/blackmultipaint.png";
import Bluesplashtable from "../../imgs/tables/bluemultipaint.png";
import Greenbench from "../../imgs/tables/greenbench.png";
import Greensidetable from "../../imgs/tables/greensidetable.png";
import blackBaseBrownTop from "../../imgs/tables/blackBaseBrownTopCoffeeTable.png";
import bugattiSideTable from "../../imgs/tables/bugattiSideTable.png";
import whiteGoldVTable from "../../imgs/tables/whiteGoldVShapeTable.png";
import blackPairMirrorSide from "../../imgs/tables/blackMirrorPairSideTable.png";
// mirrors images

import Whitetallmirror from "../../imgs/mirrors/whiteMirror.png";

// sofa images

import Browncouch from "../../imgs/couches/brownCouch.png";

// Cabinets images

import bodyFigureCabinet from "../../imgs/cabinets/bodyFigureCabinet.png";
import goldDiamondPatternCabinet from "../../imgs/cabinets/goldDiamondCabinet.png";

function Project() {
  const [items, setItems] = useState("");
  const allTables = [
    Blackcrystaltable,
    Blacksplashtable,
    Bluesplashtable,
    Greenbench,
    Greensidetable,
    blackBaseBrownTop,
    bugattiSideTable,
    whiteGoldVTable,
    blackPairMirrorSide,
  ];
  const allCabinets = [bodyFigureCabinet, goldDiamondPatternCabinet];
  const allChairs = [
    Bluestool,
    Pinkstool,
    V2blue,
    V2orange,
    V2green,
    silverMultiColor,
  ];
  const allMirrors = [Whitetallmirror];
  const allCouches = [Browncouch];

  function setItemName(item) {
    setItems(item);
  }

  function displayImages(imgArr) {
    return imgArr.map((image, i) => (
      <div key={i} className="project-holder animate__animated animate__fadeIn">
        <img src={image} alt="" />
      </div>
    ));
  }

  if (items === "" || items === "tables") {
    return (
      <div className="project-full">
        <TableContent setItemName={setItemName} />
        <div className="project-display-holder">{displayImages(allTables)}</div>
      </div>
    );
  } else if (items === "chairs") {
    return (
      <div className="project-full">
        <TableContent setItemName={setItemName} />
        <div className="project-display-holder">{displayImages(allChairs)}</div>
      </div>
    );
  } else if (items === "mirrors") {
    return (
      <div className="project-full">
        <TableContent setItemName={setItemName} />
        <div className="project-display-holder">
          {displayImages(allMirrors)}
        </div>
      </div>
    );
  } else if (items === "couches") {
    return (
      <div className="project-full">
        <TableContent setItemName={setItemName} />
        <div className="project-display-holder">
          {displayImages(allCouches)}
        </div>
      </div>
    );
  } else if (items === "cabinets") {
    return (
      <div className="project-full">
        <TableContent setItemName={setItemName} />
        <div className="project-display-holder">
          {displayImages(allCabinets)}
        </div>
      </div>
    );
  }
}

export default Project;
