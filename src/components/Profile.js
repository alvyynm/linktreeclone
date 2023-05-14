import React, { useState } from "react";
import { createPortal } from "react-dom";
import ShareModal from "./Modal";
import profile from "../assets/profile.png";
import moreicon from "../assets/share-menu-icon.png";
import shareicon from "../assets/share.png";
import "./Profile.css";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="profile">
      <div className="wrapper">
        <div className="profile__image">
          <img src={profile} alt="user profile" id="profile__img" />
        </div>
        <div className="profile__name">
          <h1 id="twitter">@alvyynm</h1>
          <h2 id="slack" className="hidden">
            alvinwanjala
          </h2>
        </div>
      </div>
      <div className="share-icon">
        <button className="btn-share" onClick={() => setShowModal(!showModal)}>
          <picture>
            <source srcSet={shareicon} media="(min-width: 600px)" />
            <img src={moreicon} alt="more icon" />
          </picture>
        </button>
      </div>
      {createPortal(
        <ShareModal showModal={showModal} setShowModal={setShowModal} />,
        document.body
      )}
    </div>
  );
};

export default Profile;
