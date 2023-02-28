import React from "react";
import { Link } from "react-router-dom";

import DarkDashboardIcon from "../../assets/icons/dashboard-dark.svg";
import DarkProfileIcon from "../../assets/icons/profile-black.svg";
import DarkSignUp from "../../assets/icons/signup-dark.svg";
import DarkSignIn from "../../assets/icons/sign-in-dark.svg";

import "./index.scss";
import Button from "../../DesignSystem/button";

const FlyoutMenu = ({ close }) => {
  return (
    <div className="flyout-menu">
      <div className="flyout-menu__close-btn" onClick={close}>
        X
      </div>
      <ul className="flyout-menu__links">
        <li>
          <img src={DarkDashboardIcon} alt="dashboard" />
          <Link to="/" className="flyout-menu__links__link">
            Dashboard
          </Link>
        </li>
        <li>
          <img src={DarkProfileIcon} alt="profile" />
          <Link to="/" className="flyout-menu__links__link">
            Profile
          </Link>
        </li>
        <li>
          <img src={DarkSignUp} alt="sign-up" />
          <Link to="/sign-up" className="flyout-menu__links__link">
            Sign Up
          </Link>
        </li>
        <li>
          <img src={DarkSignIn} alt="sign-in" />
          <Link to="/sign-in" className="flyout-menu__links__link">
            Sign In
          </Link>
        </li>
      </ul>

      <Button className="flyout-menu__download-btn" width={155} color="dark">
        Free Download
      </Button>
    </div>
  );
};

export default FlyoutMenu;
