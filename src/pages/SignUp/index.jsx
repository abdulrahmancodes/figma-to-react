import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "../../assets/icons/fb.svg";
import GoogleIcon from "../../assets/icons/google.svg";
import AppleIcon from "../../assets/icons/apple.svg";
import Wave1 from "../../assets/icons/wave-1.svg";
import Wave2 from "../../assets/icons/wave-2.svg";

import Input from "../../DesignSystem/input";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import Button from "../../DesignSystem/button";
import ToggleSwitch from "../../DesignSystem/ToggleSwitch";

import "./index.scss";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="sign-up">
        <div className="sign-up__bg" />
        <div className="sign-up__top">
          <img src={Wave1} alt="wave" className="wave-1" />
          <img src={Wave2} alt="wave" className="wave-2" />
          <h3>Welcome!</h3>
          <p className="sign-up__subtext">
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
          <div className="sign-up__form">
            <h5 className="sign-up__form__heading">Register with</h5>
            <div className="sign-up__form__auth-links">
              <div>
                <img src={FacebookIcon} alt="" />
              </div>
              <div>
                <img src={AppleIcon} alt="" />
              </div>
              <div>
                <img src={GoogleIcon} alt="" />
              </div>
            </div>
            <span className="divider">or</span>
            <div className="sign-up__form__input-fields">
              <div className="sign-up__form__input-field-wrapper">
                <label htmlFor="name">Name</label>
                <Input id="name" placeholder="Your full name" />
                {/* <input type="text" id="name" placeholder="Your full name" /> */}
              </div>
              <div className="sign-up__form__input-field-wrapper">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                />
              </div>
              <div className="sign-up__form__input-field-wrapper">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Your password"
                />
              </div>
            </div>
            <div className="sign-up__form__toggle-wrapper">
              <ToggleSwitch label="Remember me" />
            </div>
            <Button isLessRounded isLarge>
              SIGN UP
            </Button>
            <p className="sign-up__form__login-link">
              Already have an account? <Link to="/sign-in">Sign in</Link>
            </p>
          </div>
        </div>
        <div className="sign-up__bottom" />
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
