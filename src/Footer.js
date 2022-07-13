import React from "react";
function Footer() {
  return (
    <footer>
      <div>
        <img
          src={require("./images/Footer/Mosaic-digital.png")}
          alt="Mosaic Digital"
        />
      </div>
      <div className="social-media-links">
        <a href="/">
          <img
            src={require("./images/Footer/facebook.png")}
            alt="Mosaic Digital"
          />{" "}
        </a>
        <a href="/">
          <img
            src={require("./images/Footer/twitter.png")}
            alt="Mosaic Digital"
          />{" "}
        </a>
        <a href="/">
          <img
            src={require("./images/Footer/linkedin.png")}
            alt="Mosaic Digital"
          />{" "}
        </a>
      </div>
      <div className="other-links">
        <a href="/">About Us</a>
        <a href="/">Advertise with us</a>
        <a href="/">Contact Us</a>
        <a href="/">Copyright</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms of use</a>
        <a href="/">Company Listing </a>
        <a href="/">Tag Listing</a>
      </div>
      <div className="products">
        <span>Our products:</span>
        <a href="/">VCCircle</a>
        <a href="/">TechCircle</a>
        <a href="/">Events</a>
        <a href="/">Training</a>
        <a href="/">VCCEdge</a>
        <a href="/">SalesEdge</a>
        <a href="/">PartnerEdge </a>
        <a href="/">Edge Insights</a>
      </div>
      <p>
        Copyright © 2022 VCCircle.com. Property of Mosaic Media Ventures Pvt.
        Ltd.
      </p>
    </footer>
  );
}
export default Footer;
