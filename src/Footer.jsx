import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <p>{props.parTitle}</p>
    </div>
  );
};

export default Footer;

// npx create-react-app my-react-app
