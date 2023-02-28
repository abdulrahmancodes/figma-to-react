import React from "react";
import cx from "classnames";

import Button from "../../DesignSystem/button";

import DashboardIcon from "../../assets/icons/dashboard.svg";
import DarkDashboardIcon from "../../assets/icons/dashboard-dark.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import DarkProfileIcon from "../../assets/icons/profile-black.svg";
import SignUp from "../../assets/icons/signup.svg";
import DarkSignUp from "../../assets/icons/signup-dark.svg";
import SignIn from "../../assets/icons/sign-in.svg";
import DarkSignIn from "../../assets/icons/sign-in-dark.svg";
import Logo from "../../assets/icons/logo.svg";
import DarkLogo from "../../assets/icons/logo-dark.svg";

import "./index.scss";

const Navbar = ({ isDark }) => {
  return (
    <nav
      className={cx("navbar", {
        "navbar--dark": isDark,
      })}
    >
      <div className="navbar__logo">
        <img src={isDark ? DarkLogo : Logo} alt="logo" />
        <h3>Vandelay Industries</h3>
      </div>

      <ul className="navbar__nav-links">
        <li>
          <img
            src={isDark ? DarkDashboardIcon : DashboardIcon}
            alt="dashboard"
          />
          <a href="" className="navbar__nav-links__link">
            Dashboard
          </a>
        </li>
        <li>
          <img src={isDark ? DarkProfileIcon : ProfileIcon} alt="profile" />
          <a href="" className="navbar__nav-links__link">
            Profile
          </a>
        </li>
        <li>
          <img src={isDark ? DarkSignUp : SignUp} alt="sign-up" />
          <a href="" className="navbar__nav-links__link">
            Sign Up
          </a>
        </li>
        <li>
          <img src={isDark ? DarkSignIn : SignIn} alt="sign-in" />
          <a href="" className="navbar__nav-links__link">
            Sign In
          </a>
        </li>
      </ul>
      <Button
        className="navbar__download-btn"
        width={155}
        color={isDark ? "dark" : "white"}
      >
        Free Download
      </Button>
    </nav>
  );
};

export default Navbar;
