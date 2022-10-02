import React, { useState, useEffect } from "react";
import Card from "./Card";
import RCwsa from "./RCwsa";
import VCCTV from "./VCCTV";
import Slider from "./Slider";
import TopStories from "./TopStories";
import Infographic from "./Infographic";
import Author from "./Author";
import Industry from "./Industry";
import Story from "./Story";
import Header from "./Header/Header";
import Footer from "./Footer";
import LoadingSkeleton from "./components/loadingSkeleton/loadingSkeleton"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./responsive.css";
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
function HomePage() {
  const [loader, setLoader] = useState(true);
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/25b66855-89a3-45a5-8db6-85fc85041185")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.section_list);
        setLoader(false);
      });
  }, []);

  return (
    <>
      {loader ? (
        // <div className="basic"></div>
        <LoadingSkeleton/>
      ) : (
        // {
        apiData.map((item) => {
          if (item.section_slug in sliderCompClasses) {
            return (
              <Slider
                sliderClass={sliderCompClasses[item.section_slug].sliderClass}
                cardClass={sliderCompClasses[item.section_slug].cardClass}
                cardContClass={
                  sliderCompClasses[item.section_slug].cardContClass
                }
                data={item}
                crown={item.section_slug === "vccircle-premium"}
                subscribeButton={item.section_slug === "vccircle-premium"}
                key={item.section_slug}
                loader={loader}
              />
            );
          }
          if (item.section_slug === "top-stories") {
            return (
              <TopStories
                data={item}
                key={item.section_slug}
                loader={loader}
              ></TopStories>
            );
          }
          if (item.section_slug === "infographic") {
            return <Infographic key={item.section_slug}></Infographic>;
          }

          if (item.section_slug === "vcc-tv") {
            return (
              <VCCTV
                url="https://www.youtube.com/embed/THL1OPn72vo"
                data={item}
                key={item.section_slug}
              />
            );
          }

          if (
            item.section_slug === "editors-pick" ||
            item.section_slug === "most-popular"
          ) {
            return (
              <RCwsa ad={"./Adv3.png"} data={item} key={item.section_slug} />
            );
          }
          if (item.section_slug === "more-stories") {
            return (
              <section className="more-stories" key={item.section_slug}>
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
                        <Card
                          cardClass="more-stories-cards"
                          cardData={card}
                          key={card?.feid || ""}
                        />
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          }
          return null;
        })
      )}
    </>
  );
}

function App() {
  return (
    <div className="wrapper-daddy">
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/author/:author_name" element={<Author />}></Route>
          <Route path="/industry/:industry_name" element={<Industry />}></Route>
          <Route path="/:story_name" element={<Story />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
