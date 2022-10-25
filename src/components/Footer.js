import React from "react";
import zurilogo from "../assets/Zuri-internship.png";
import i4glogo from "../assets/I4G.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer__left">
          <img src={zurilogo} alt="Zuri Internship logo" />
        </div>
        <div className="footer__center">
          <p>HNG Internship 9 Frontend Task</p>
        </div>
        <div className="footer__right">
          <img src={i4glogo} alt="Ingressive For Good logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
