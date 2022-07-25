import React, { useState, useEffect, useRef, useCallback } from "react";
import Logo from "../images/Header/Logo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [industryDropdown, setIndustryDropdown] = useState(false);
  const [bodyOverflow, setBodyOverflow] = useState(false);
  const menuRef = useRef();
  const idmenu = useRef();
  const handleResize = useCallback(() => {
    if (window.innerWidth > 992) {
      setShowMenu(false);
      setBodyOverflow(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  useEffect(() => {
    document.body.style.overflow = bodyOverflow ? "hidden" : "auto";
  }, [bodyOverflow]);
  return (
    <>
      <div className={"menu-wrapper" + (showMenu ? " show" : "")} ref={menuRef}>
        <ul className="menu">
          <li style={{ display: "flex" }}>
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
          </li>
          <li className="menu-option mts">Home</li>
          <li className="menu-option mts">Sign In</li>
          <li className="menu-option mts">
            {" "}
            <p>
              <img
                src={require("../images/Header/crown.png")}
                alt="Crown icon"
              ></img>{" "}
              Subscribe
            </p>
          </li>
          <li className="menu-option mts">Private Equity</li>
          <li className="menu-option mts">Venture Capital</li>
          <li className="menu-option mts">M&#38;A</li>
          <li
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
          </li>
          <ul
            className={"dropdown-menu" + (industryDropdown ? " drop" : "")}
            ref={idmenu}
          >
            <li className="dropdown-option mts">Finance</li>
            <li className="dropdown-option mts">Consumer</li>
            <li className="dropdown-option mts">Infrastructure</li>
            <li className="dropdown-option mts">TMT</li>
            <li className="dropdown-option mts">Healthcare</li>
          </ul>
          <li className="menu-option mts">Stressed Assets</li>
          <li className="menu-option mts">Limited Partner</li>
          <li className="menu-option mts">Founder</li>
          <li className="menu-option mts">About Us</li>
          <li className="menu-option mts">Tag Listing</li>
          <li className="menu-option mts">Advertise With Us</li>
          <li className="menu-option mts">Contact Us</li>
          <li className="menu-option mts">VCC Mobile App</li>
        </ul>
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
            <ul className="links">
              <li>
                <a href="/#" className="mts">
                  <img
                    src={require("../images/Header/magnifying-glass.png")}
                    alt="Search icon"
                  ></img>
                  Search
                </a>
              </li>
              <li>
                <a href="/#" className="mts">
                  <img
                    src={require("../images/Header/crown.png")}
                    alt="Crown icon"
                  ></img>
                  Subscribe
                </a>
              </li>
              <li>
                <a href="/#" className="mts">
                  <img
                    src={require("../images/Header/User.png")}
                    alt="User icon"
                  ></img>
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </header>
        <nav>
          <div className="container">
            <ul className="links">
              <li>
                <a href="/#" className="mts">
                  Private Equity
                </a>
              </li>
              <li>
                <a href="/#" className="mts">
                  Venture Capital
                </a>
              </li>
              <li>
                <a href="/#" className="mts">
                  M&A
                </a>
              </li>
              <li>
                <a href="/#" className="mts">
                  Industry <i className="fa-solid fa-sort-down"></i>
                </a>
              </li>
              <li>
                <a href="/#" className="mts">
                  Stressed Assets
                </a>
              </li>
              <li>
                <a href="/#" className="mts">
                  Limited Partner
                </a>
              </li>
              <li>
                <a href="/#" className="mts">
                  Founder
                </a>
              </li>
            </ul>
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
