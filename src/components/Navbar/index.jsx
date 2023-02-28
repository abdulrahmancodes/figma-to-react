import React from "react";

import DashboardIcon from "../../assets/icons/dashboard.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import SignUp from "../../assets/icons/signup.svg";
import SignIn from "../../assets/icons/sign-in.svg";
import Logo from "../../assets/icons/logo.svg";

import Button from "../../DesignSystem/button";

import "./index.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="logo" />
        <h3>Vandelay Industries</h3>
      </div>

      <ul className="navbar__nav-links">
        <li>
          <img src={DashboardIcon} alt="dashboard" />
          <a href="" className="navbar__nav-links__link">
            Dashboard
          </a>
        </li>
        <li>
          <img src={ProfileIcon} alt="profile" />
          <a href="" className="navbar__nav-links__link">
            Profile
          </a>
        </li>
        <li>
          <img src={SignUp} alt="sign-up" />
          <a href="" className="navbar__nav-links__link">
            Sign Up
          </a>
        </li>
        <li>
          <img src={SignIn} alt="sign-in" />
          <a href="" className="navbar__nav-links__link">
            Sign In
          </a>
        </li>
      </ul>
      <Button className="navbar__download-btn" width={155} color="white">
        Free Download
      </Button>
    </nav>
  );
};

export default Navbar;
