import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import Button from "../../DesignSystem/button";

import DarkLogo from "../../assets/icons/logo-dark.svg";
import Dashboard from "../../assets/icons/home.svg";
import DashboardPrimary from "../../assets/icons/home-primary.svg";
import Billing from "../../assets/icons/card-primary.svg";
import RTL from "../../assets/icons/settings-primary.svg";
import Tables from "../../assets/icons/chart-primary.svg";
import WhiteTables from "../../assets/icons/chart.svg";
import Profile from "../../assets/icons/profile-svg.svg";
import SignIn from "../../assets/icons/doc-primary.svg";
import SignUp from "../../assets/icons/rocket-primary.svg";
import Circles from "../../assets/icons/circles.svg";
import Help from "../../assets/icons/help.svg";

import "./index.scss";

const SidebarMenu = ({ page }) => {
  const links = useMemo(() => {
    return [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: page === "Dashboard" ? Dashboard : DashboardPrimary,
        isActive: true,
      },
      {
        name: "Tables",
        path: "/tables",
        icon: page === "Tables" ? WhiteTables : Tables,
      },
      {
        name: "Billing",
        path: "/billing",
        icon: Billing,
      },
      {
        name: "RTL",
        path: "/rtl",
        icon: RTL,
      },
    ];
  }, [page]);

  const accountLinks = useMemo(() => {
    return [
      {
        name: "Profile",
        path: "/profile",
        icon: Profile,
      },
      {
        name: "Sign In",
        path: "/sign-in",
        icon: SignIn,
      },
      {
        name: "Sign Up",
        path: "/sign-up",
        icon: SignUp,
      },
    ];
  }, []);

  return (
    <div className="sidebar-menu">
      <div className="sidebar-menu__logo">
        <img src={DarkLogo} alt="logo" />
        <h3>Vandelay Industries</h3>
      </div>

      <div className="divider" />

      <div className="sidebar-menu__links">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={cx("sidebar-menu__links__link", {
              "sidebar-menu__links__link--active": page === link.name,
            })}
          >
            <div>
              <img src={link.icon} alt="" />
            </div>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
      <div className="account-pages">Account Pages</div>

      <div className="sidebar-menu__links">
        {accountLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={cx("sidebar-menu__links__link", {
              "sidebar-menu__links__link--active": link.isActive,
            })}
          >
            <div>
              <img src={link.icon} alt="" />
            </div>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>

      <div className="sidebar-menu__doc-link-wrapper">
        <img src={Circles} className="circles-image" alt="" />
        <div className="help-wrapper">
          <img src={Help} alt="" />
        </div>
        <h5>Need help?</h5>
        <p>Please check our docs</p>
        <Button color="white" isLessRounded>
          DOCUMENTATION
        </Button>
      </div>
    </div>
  );
};

export default SidebarMenu;
