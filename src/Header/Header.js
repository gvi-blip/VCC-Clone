import React from "react";
import Logo from "../images/Header/Logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo-cont">
            <i className="fa-solid fa-bars i-ham"></i>
            <img src={Logo} alt="VCCircle Logo" height="45" width="140" />
          </div>
          <div className="links">
            <a href="/" className="mts">
              <img
                src={require("../images/Header/magnifying-glass.png")}
                alt="Search icon"
              ></img>
              Search
            </a>
            <a href="/" className="mts">
              <img
                src={require("../images/Header/crown.png")}
                alt="Crown icon"
              ></img>
              Subscribe
            </a>
            <a href="/" className="mts">
              <img
                src={require("../images/Header/User.png")}
                alt="User icon"
              ></img>
              Sign In
            </a>
          </div>
        </div>
      </header>
      <nav>
        <div className="container">
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
        </div>
      </nav>
    </>
  );
}

export default Header;
