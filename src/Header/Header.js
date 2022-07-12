import React from "react";
import Logo from "./Logo.png";
function Header() {
  return (
    <div className="container">
      <div className="header">
        <img src={Logo} alt="VCCircle Logo" height="45" width="130" />
        <div className="links">
          <a href="/" className="mts">
            <i className="fa-solid fa-magnifying-glass"></i>Search
          </a>
          <a href="/" className="mts">
            <i className="fa-solid fa-crown" style={{ color: "orange" }}></i>
            Subscribe
          </a>
          <a href="/" className="mts">
            <i className="fa-solid fa-user"></i>Sign In
          </a>
        </div>
      </div>
      <nav>
        <div className="links">
          <a href="/" className="mts">
            Private Equity
          </a>
          <a href="/" className="mts">
            Venture Capital
          </a>
          <a href="/" className="mts">
            M&A
          </a>
          <a href="/" className="mts">
            Industry <i className="fa-solid fa-sort-down"></i>
          </a>
          <a href="/" className="mts">
            Stressed Assets
          </a>
          <a href="/" className="mts">
            Limited Partner
          </a>
          <a href="/" className="mts">
            Founder
          </a>
        </div>
        <button className="mts">
          Customize <i className="fa-solid fa-sort-down"></i>
        </button>
      </nav>
    </div>
  );
}

export default Header;
