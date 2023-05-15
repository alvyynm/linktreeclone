import React from "react";
import "./Modal.css";

const ShareModal = ({ showModal, setShowModal }) => {
  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <>
      {showModal && (
        <div
          className="modal-wrapper"
          onClick={showModal ? () => setShowModal(false) : null}
        >
          <div className="wrapper-modal">
            <div className="share-header">
              <h2 className="share-title">Share this profile</h2>
              <button
                className="share-btn"
                onClick={() => setShowModal(!showModal)}
              >
                X
              </button>
            </div>
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
        </div>
      )}
    </>
  );
};

export default ShareModal;
