import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Wave1 from "../../assets/icons/vertical-wave-1.svg";
import Wave2 from "../../assets/icons/vertical-wave-2.svg";
import Chakra from "../../assets/icons/chakra.svg";

import "./index.scss";
import Input from "../../DesignSystem/input";
import ToggleSwitch from "../../DesignSystem/ToggleSwitch";
import Button from "../../DesignSystem/button";

const SignIn = () => {
  return (
    <>
      <Navbar isDark />
      <div className="sign-in" style={{ height: window.innerHeight - 60 }}>
        <div className="sign-in__left">
          <h3 className="sign-in__heading">Welcome Back</h3>
          <p className="sign-in__subtext">
            Enter your email and password to sign in
          </p>
          <div className="sign-in__form">
            <div className="sign-in__form__input-fields">
              <div className="sign-in__form__input-field-wrapper">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                />
              </div>
              <div className="sign-in__form__input-field-wrapper">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Your password"
                />
              </div>
            </div>
            <div className="sign-in__form__toggle-wrapper">
              <ToggleSwitch />
              <span className="remember-me">Remember me</span>
            </div>
            <Button isLessRounded isLarge>
              SIGN IN
            </Button>
            <p className="sign-in__form__sign-up-link">
              Don't have an account? <a href="/">Sign up</a>
            </p>
          </div>
        </div>
        <div className="sign-in__right">
          <img src={Chakra} className="chakra-icon" alt="chakra" />
          <img src={Wave1} className="vertical-wave vertical-wave-1" alt="" />
          <img src={Wave2} className="vertical-wave vertical-wave-2" alt="" />
        </div>
      </div>
      <Footer isSignInPage />
    </>
  );
};

export default SignIn;
