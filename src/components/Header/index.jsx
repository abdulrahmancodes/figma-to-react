import React from "react";

import SearchIcon from "../../assets/icons/search.svg";
import Settings from "../../assets/icons/settings-grey.svg";
import Bell from "../../assets/icons/bell-grey.svg";
import Person from "../../assets/icons/person 2.svg";

import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <p className="breadcrumb">
          Pages <span>/ Dashboard</span>
        </p>
        <h5 className="dashboard__heading">Dashboard</h5>
      </div>
      <div className="header__right">
        <label htmlFor="search" className="search-wrapper">
          <img src={SearchIcon} alt="" />
          <input
            type="search"
            id="search"
            className="header__search"
            placeholder="Type here..."
          />
        </label>
        <div className="header__sign-in">
          <img src={Person} alt="" />
          <span>Sign In</span>
        </div>
        <img src={Settings} alt="settings" className="settings" />
        <img src={Bell} alt="notifications" className="notifications" />
      </div>
    </div>
  );
};

export default Header;
