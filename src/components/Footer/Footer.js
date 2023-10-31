import React from 'react';
import "./Footer.css";
import Wave from "../../img/wave.png";



function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="wave"style={{width:"100%"}} />

        <div className="f-content">
        <span>Made with </span>
        </div>
       
    </div>
  )
}

export default Footer;