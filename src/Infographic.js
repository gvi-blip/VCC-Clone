import React, { useState } from "react";
import Advertisment from "./Advertisment/Advertisment";

function Infographic() {
  const [data, setData] = useState("");
  function onSubmitHandler(e) {
    e.preventDefault();
    // let emailRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    let emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:|\\)*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:|\\)+)\])/;

    if (emailRegex.test(data)) {
      console.log(data);
    } else {
      alert("Invalid email");
    }
    setData("");
  }
  return (
    <>
      <section className="socials">
        <div
          className={`container ${
            data.section_border && data.section_border === "1" ? "b-bottom" : ""
          }`}
        >
          <div>
            <div className="image-cont">
              <img
                src={require("./images/Socials/Twitter.png")}
                alt="VCCircle Twitter Handle"
              ></img>
              <div className="caption">
                <p
                  style={{
                    fontWeight: "700",
                    color: "#888888",
                  }}
                >
                  VCCircle.com
                </p>
                <p style={{ color: "#484848", fontWeight: "medium" }}>
                  World Bank arm IFC to double down its investments into funds
                  in 2022
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mts">Infographic</p>
            <div className="img-cont">
              <img
                src={require("./images/Socials/Infographic.png")}
                alt="VCCircle Infographic"
              ></img>
              <div className="arrow">
                <img
                  src={require("./images/diagonal-arrows.png")}
                  alt="diagonal-arrows"
                ></img>
              </div>
            </div>
          </div>
          <div>
            <Advertisment image={"./Adv3.png"} adclass="adv-sp" />
          </div>
        </div>
      </section>
      <section className="newsletter">
        <div className="container">
          <div className="mts">
            <img src={require("./images/envelope.png")} alt="Envelope icon" />
            <div className="text">
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "regular",
                  color: "#FFFFFFD8",
                  lineHeight: "26px",
                }}
              >
                Get industry update with our daily newsletter
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                Subscribe Now !
              </p>
            </div>
          </div>
          <div>
            <form action="/" name="form1" onSubmit={onSubmitHandler}>
              <input
                type="email"
                placeholder="Email address"
                name="email"
                id="email"
                value={data}
                onChange={(e) => {
                  setData(e.target.value);
                }}
              />

              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Infographic;
