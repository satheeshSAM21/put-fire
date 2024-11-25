import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import fb from '../../images/facebook.png'
import thread from '../../images/threads.png'
import whatsapp from '../../images/whatsapp.png'
import youtube from '../../images/youtube (1).png'
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="media">
           <span className="img-style"><img src={linkedin} alt="pic" /></span>
           <span className="img-style"><img src={instagram} alt="pic"/></span>
           <span className="img-style"><img src={fb} alt="pic"/></span>
           <span className="img-style"><img src={thread} alt="pic" /></span>
           <span className="img-style"><img src={whatsapp} alt="pic" /></span>
           <span className="img-style"><img src={youtube} alt="pic" /></span>
         
        </div>
        <div className="text-style text-white fw-600 mb-[10px]">
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
        <div className="text-center text-white fw-600 mb-[10px]">
          <p>PutFire</p>
        </div>
        <div className="text-center text-white text-[13px]">©2024, PutFire Innovations. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
