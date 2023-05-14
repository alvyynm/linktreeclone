import React from "react";
import "./Modal.css";

const ShareModal = () => {
  return (
    <div className="wrapper-modal">
      <h2 className="share-title">Share this profile</h2>
      <a
        href="https://twitter.com/alvyynm"
        className="link-modal"
        target="_blank"
        rel="noreferrer"
      >
        Share on Twitter
      </a>
      <a
        href="https://twitter.com/alvyynm"
        className="link-modal"
        target="_blank"
        rel="noreferrer"
      >
        Share on Facebook
      </a>
      <a
        href="https://twitter.com/alvyynm"
        className="link-modal"
        target="_blank"
        rel="noreferrer"
      >
        Share via WhatsApp
      </a>
      <a
        href="https://twitter.com/alvyynm"
        className="link-modal"
        target="_blank"
        rel="noreferrer"
      >
        Share via Email
      </a>
    </div>
  );
};

export default ShareModal;
