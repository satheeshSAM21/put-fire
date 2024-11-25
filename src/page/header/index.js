import React from "react";
import Logo from '../../images/logo.svg'
import Name from '../../images/name.svg'
import './style.css';


const Header = () => {
  return (
    <div className="header-container">
      <div className="heder-left-col pl-[5px]">
         <img src={Logo} className="!h-[40px]"/>
         <img src={Name}/>
      </div>
      <div className="header-topic">
        <span>About Us</span>
        <span>Services</span>
        <span>Products</span>
        <span>Careers</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default Header;
