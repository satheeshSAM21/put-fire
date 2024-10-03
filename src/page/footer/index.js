import React from "react";
import { FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareInstagram, FaThreads } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="media flex">
          <span>
            <CiLinkedin size={50} />
          </span>
          <span>
            <FaYoutube color="red" size={50} />
          </span>
          <span>
            <FaSquareInstagram size={50} />
          </span>
          <span>
            <FaFacebookSquare size={50} />
          </span>
          <span>
            <IoLogoWhatsapp size={50} />
          </span>
          <span>
            <FaThreads size={50} />
          </span>
        </div>
        <div>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p>PutFire</p>
        </div>
        <div>©2024, PutFire Innovations. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
