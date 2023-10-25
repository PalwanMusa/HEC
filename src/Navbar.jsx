import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <p>this is navbar</p>
      <p>{props.myTitle}</p>
    </div>
  );
}

export default Navbar;
