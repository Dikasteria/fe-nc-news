import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="FootInfo">
        <h2 className="Title">Additional Info</h2>
        <a className="hyper1" href="https://github.com/Dikasteria/fe-nc-news">
          Front-End
          <i class="fab fa-github" />
        </a>

        <a className="hyper2" href="https://github.com/Dikasteria/NC-News">
          Back-End
          <i class="fab fa-github" />
        </a>
        <a className="ReadMe">LINK TO README HERE</a>
      </div>
    </footer>
  );
};

export default Footer;
