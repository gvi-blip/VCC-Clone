import React, { useState, useEffect, useRef } from "react";
import Logo from "../images/Header/Logo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [industryDropdown, setIndustryDropdown] = useState(false);
  const menuRef = useRef();
  const idmenu = useRef();
  const [bodyOverflow, setBodyOverflow] = useState(false);
  useEffect(() => {
    document.body.style.overflow = bodyOverflow ? "hidden !important" : "auto";
  }, [bodyOverflow]);

  return (
    <>
      <div className={"menu-wrapper" + (showMenu ? " show" : "")} ref={menuRef}>
        <div className="menu">
          <div style={{ display: "flex" }}>
            <div></div>
            <div className="menu-logo">
              <img src={Logo} alt="VCCircle Logo" height="45" width="140" />
            </div>
            <div
              className="close"
              onClick={() => {
                setShowMenu(false);
                setBodyOverflow(false);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="menu-option mts">Home</div>
          <div className="menu-option mts">Sign In</div>
          <div className="menu-option mts">
            {" "}
            <p>
              <img
                src={require("../images/Header/crown.png")}
                alt="Crown icon"
              ></img>{" "}
              Subscribe
            </p>
          </div>
          <div className="menu-option mts">Private Equity</div>
          <div className="menu-option mts">Venture Capital</div>
          <div className="menu-option mts">M&#38;A</div>
          <div
            className="menu-option mts"
            onClick={() => {
              setIndustryDropdown(!industryDropdown);
            }}
          >
            Industry{" "}
            <i
              className={
                "fa-solid fa-sort-down" + (industryDropdown ? " rotate" : "")
              }
              style={{ marginRight: "5px", marginLeft: "10px" }}
            ></i>
          </div>
          <div
            className={"dropdown-menu" + (industryDropdown ? " drop" : "")}
            ref={idmenu}
          >
            <div className="dropdown-option mts">Finance</div>
            <div className="dropdown-option mts">Consumer</div>
            <div className="dropdown-option mts">Infrastructure</div>
            <div className="dropdown-option mts">TMT</div>
            <div className="dropdown-option mts">Healthcare</div>
          </div>
          <div className="menu-option mts">Stressed Assets</div>
          <div className="menu-option mts">Limited Partner</div>
          <div className="menu-option mts">Founder</div>
          <div className="menu-option mts">About Us</div>
          <div className="menu-option mts">Tag Listing</div>
          <div className="menu-option mts">Advertise With Us</div>
          <div className="menu-option mts">Contact Us</div>
          <div className="menu-option mts">VCC Mobile App</div>
        </div>
      </div>
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <div className="logo-cont">
              <i
                className="fa-solid fa-bars i-ham"
                onClick={() => {
                  setShowMenu(true);
                  setBodyOverflow(true);
                }}
              ></i>
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
      </div>
    </>
  );
}

export default Header;
