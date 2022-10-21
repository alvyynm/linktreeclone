import React from "react";
import slack from "../assets/slack.png";
import github from "../assets/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <img src={slack} alt="Slack logo" />
        <img src={github} alt="GitHub logo" />
      </div>
    </div>
  );
};

export default Footer;
