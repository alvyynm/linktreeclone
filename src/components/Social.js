import React from "react";
import "./Social.scss";
import slack from "../assets/slack.png";
import github from "../assets/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <a href="#" className="social-icon">
          <img src={slack} alt="Slack logo" />
        </a>
        <a href="#" className="social-icon">
          <img src={github} alt="GitHub logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
