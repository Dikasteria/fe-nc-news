import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="FootInfo">
        <a href="https://github.com/Dikasteria/fe-nc-news" className="hyper1">
          Front-End
          <i class="fab fa-github" alt="error" />
        </a>
        <a href="https://github.com/Dikasteria/NC-News" className="hyper2">
          Back-End
          <i class="fab fa-github" alt="error" />
        </a>
        <a className="ReadMe">LINK TO README HERE</a>
      </div>
    </footer>
  );
};

export default Footer;
