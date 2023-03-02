import React from "react";
import cx from "classnames";

import "./index.scss";

const Footer = ({ isSignInPage }) => {
  return (
    <footer
      className={cx("footer", {
        "footer--extra-margin": isSignInPage,
      })}
    >
      <p className="footer__made-by">
        © 2023, Made with ❤️ by <a href="">Abdul Rahman</a> for a better web
      </p>
      <div className="footer__links">
        <a href="">About Us</a>
        <a href="">Privacy</a>
        <a href="">Blog</a>
        <a href="">License</a>
      </div>
    </footer>
  );
};

export default Footer;
