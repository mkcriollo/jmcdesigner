import React from "react";
import { useState } from "react";

function TableContent(props) {
  return (
    <div className="project-list-holder">
      <ul>
        <li id="item-selected">MODERNO 2021</li>
        <li onClick={() => props.setItemName("tables")}>Table</li>
        <li onClick={() => props.setItemName("chairs")}>Chairs</li>
        <li onClick={() => props.setItemName("mirrors")}>Mirrors</li>
        <li id="item-selected" onClick={() => props.setItemName("couches")}>
          Couch
        </li>
        <li onClick={() => props.setItemName("cabinets")}>Cabinets</li>
      </ul>
    </div>
  );
}

export default TableContent;

// NOTES
/*
- Im seperating the table content with what items are being shown 

- solution 1 
- Using Context API

- solution 2 
- Using Redux 

-- look at some examples on how to solve this    

*/
