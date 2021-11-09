import React from "react";
import { useState } from "react";
import "./project.css";

function TableContent(props) {
  return (
    <div className="project-list-holder">
      <ul>
        <li id="item-selected">MODERNO 2021</li>
        <li onClick={() => props.setItemName("tables")}>Table</li>
        <li onClick={() => props.setItemName("chairs")}>Chairs</li>
        <li onClick={() => props.setItemName("mirrors")}>Mirrors</li>
        <li onClick={() => props.setItemName("couches")}>Couch</li>
        <li onClick={() => props.setItemName("cabinets")}>Cabinets</li>
      </ul>
    </div>
  );
}

export default TableContent;
