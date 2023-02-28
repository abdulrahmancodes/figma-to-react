import React from "react";

import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__made-by">
        © 2022, Made with ❤️ by <a href="">Tektorch</a> for a better web
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
