import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Card from "./Card";
import RCwsa from "./RCwsa";
import Advertisment from "./Advertisment/Advertisment";
import VCCTV from "./VCCTV";
import Footer from "./Footer";
import Slider from "./Slider";
// import Adv3 from './Advertisment/Adv3.png'
import "./App.css";
import "./responsive.css";

import TopStories from "./TopStories";
import Infographic from "./Infographic";
const sliderCompClasses = {
  "limited-partner": {
    sliderClass: "limited-partner",
    cardClass: "lp-cards",
    cardContClass: "check",
  },
  "vccircle-premium": {
    sliderClass: "vc-premium",
    cardClass: "vcp-cards",
    crown: true,
    subscribeButton: true,
  },
  // "upcoming-events": {
  //   sliderClass: "up-ev",
  //   cardClass: "up-ev-cards",
  // },
  founders: {
    sliderClass: "fn",
    cardClass: "fn-cards",
    cardContClass: "check",
  },
  tmt: {
    sliderClass: "tmt",
    cardClass: "tmt-cards",
    cardContClass: "check",
  },
  financials: {
    sliderClass: "fin",
    cardClass: "fin-cards",
    cardContClass: "check",
  },
  "mergers-acquisitions": {
    titleAbbreviation: "M &#38; A",
    sliderClass: "mac",
    cardClass: "mac-cards",
    cardContClass: "check",
  },
};
function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/25b66855-89a3-45a5-8db6-85fc85041185")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.section_list);
      });
  }, []);

  return (
    <>
      <Header />
      {apiData.map((item) => {
        if (item.section_slug in sliderCompClasses) {
          return (
            <Slider
              sliderClass={sliderCompClasses[item.section_slug].sliderClass}
              cardClass={sliderCompClasses[item.section_slug].cardClass}
              cardContClass={sliderCompClasses[item.section_slug].cardContClass}
              data={item}
              crown={item.section_slug === "vccircle-premium"}
            />
          );
        }
        if (item.section_slug === "top-stories") {
          return <TopStories data={item}></TopStories>;
        }
        if (item.section_slug === "infographic") {
          return <Infographic></Infographic>;
        }

        if (item.section_slug === "vcc-tv") {
          return (
            <VCCTV
              url="https://www.youtube.com/embed/THL1OPn72vo"
              data={item}
            />
          );
        }

        if (
          item.section_slug === "editors-pick" ||
          item.section_slug === "most-popular"
        ) {
          return <RCwsa ad={"./Adv3.png"} data={item} />;
        }
        if (item.section_slug === "more-stories") {
          return (
            <section className="more-stories">
              <div
                className={`container ${
                  item.section_border && item.section_border === "1"
                    ? "b-bottom"
                    : ""
                }`}
              >
                <h3 className="mts">More Stories</h3>
                <div>
                  {item.stories_list.map((card) => {
                    return (
                      <Card cardClass="more-stories-cards" cardData={card} />
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }
        return null;
      })}

      <Footer></Footer>
    </>
  );
}

export default App;
