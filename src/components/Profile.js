import React from "react";
import profile from "../assets/profile.jpg";
import moreicon from "../assets/share-menu-icon.png";
import shareicon from "../assets/share.png";

const Profile = () => {
  return (
    <div className="profile">
      <div className="wrapper">
        <div className="profile__image">
          <img src={profile} alt="user profile image" id="profile__img" />
        </div>
        <div className="profile__name">
          <h1>Alvin Wanjala</h1>
        </div>
        <div className="profile__content">
          <button id="twitter">@alvyynm</button>
          <button id="slack" className="hidden">
            Alvin Wanjala
          </button>
        </div>
      </div>
      <div className="share-icon">
        <picture>
          <source srcset={shareicon} media="(min-width: 600px)" />
          <img src={moreicon} alt="more icon" />
        </picture>
      </div>
    </div>
  );
};

export default Profile;
