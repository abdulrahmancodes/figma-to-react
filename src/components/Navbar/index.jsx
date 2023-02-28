import React, { useState } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import FlyoutMenu from "../FlyoutMenu";
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
  const [isFlyoutMenuOpen, setIsFlyoutMenuOpen] = useState(false);

  return (
    <>
      {isFlyoutMenuOpen && (
        <FlyoutMenu close={() => setIsFlyoutMenuOpen(false)} />
      )}

      <nav
        className={cx("navbar", {
          "navbar--dark": isDark,
        })}
      >
        <div className="navbar__logo">
          <img src={isDark ? DarkLogo : Logo} alt="logo" />
          <h3>Vandelay Industries</h3>
        </div>
        <div
          className="hamburger-menu"
          onClick={() => setIsFlyoutMenuOpen(true)}
        ></div>

        <ul className="navbar__nav-links">
          <li>
            <img
              src={isDark ? DarkDashboardIcon : DashboardIcon}
              alt="dashboard"
            />
            <Link to="/" className="navbar__nav-links__link">
              Dashboard
            </Link>
          </li>
          <li>
            <img src={isDark ? DarkProfileIcon : ProfileIcon} alt="profile" />
            <Link to="/" className="navbar__nav-links__link">
              Profile
            </Link>
          </li>
          <li>
            <img src={isDark ? DarkSignUp : SignUp} alt="sign-up" />
            <Link to="/sign-up" className="navbar__nav-links__link">
              Sign Up
            </Link>
          </li>
          <li>
            <img src={isDark ? DarkSignIn : SignIn} alt="sign-in" />
            <Link to="/sign-in" className="navbar__nav-links__link">
              Sign In
            </Link>
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
    </>
  );
};

export default Navbar;
