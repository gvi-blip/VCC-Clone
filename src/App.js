import React, { useState } from "react";
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
import {
  moreStoriesCards,
  LPcardscontent,
  mostPopularCards,
  editorsPickCards,
  topNewsCards,
  vcPremiumCards,
  tmtCards,
  tcCards,
  mergAcqCards,
  finCards,
  founderCards,
  upEvCards,
} from "./data";

function App() {
  let [data, setData] = useState("");
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
      <Header />
      <div className="container">
        <Advertisment image={"./Adv1s.png"} adclass="adv-l advl1" />
      </div>
      <section className="top-news">
        <div className="container">
          <div className="text-content">
            <p className="mts">MANUFACUTRING</p>
            <h1>
              Warburg Pincus set to acquire majority stake in auto parts maker
            </h1>
            <p className="mts">
              Private equity firm TPG, which is reportedly heading towards a
              public listing, said on Thursday it had appointed long-time
              company executive Todd Sisitsky as president, effective
              immediately.
            </p>
            <p className="mts">
              <span>30 September</span>
              <span>&middot;</span>
              <span>Madhurima Nandy</span>
            </p>
            <button className="mts">READ MORE</button>
          </div>
          <div className="image">
            <img
              src={require("./images/topnews/manufacturing.png")}
              alt="manufacutring"
            />
          </div>
        </div>
      </section>
      <div className="container">
        <Advertisment image={"./Adv3.png"} adclass="adv-s ad-b-tn" />
      </div>
      <section className="tn-cards-cont">
        <div className="container">
          {topNewsCards.map((card) => {
            return (
              <Card
                cardClass={"top-news-cards"}
                image={card.image}
                title={card.title}
                author={card.author}
                date={card.date}
                content={card.content}
                premium={card.premium}
              />
            );
          })}
        </div>
      </section>
      <div className="container">
        <Advertisment image={"./Adv2.png"} width={720} adclass="adv-l advl2" />
      </div>
      <RCwsa
        sectionTitle="Editor's Pick"
        cards={editorsPickCards}
        ad={"./Adv3.png"}
      />
      <section className="socials">
        <div className="container">
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
                {/* <i class="fa-solid fa-arrow-up-right-and-arrow-down-left-from-center"></i> */}
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
      <Slider
        sectionTitle="Limited Partner"
        cards={LPcardscontent}
        sliderClass="limited-partner"
        cardClass="lp-cards"
        cardContClass="check"
      />
      <div className="container">
        <Advertisment image={"./Adv2.png"} width={720} adclass="adv-l advl2" />
      </div>
      <div className="container ad-b-tn-2">
        <Advertisment image={"./Adv3.png"} adclass="adv-s ad-b-tn " />
      </div>
      <Slider
        sectionTitle="VCCircle Premium"
        titleImg="./path"
        cards={vcPremiumCards}
        sliderClass="vc-premium"
        cardClass="vcp-cards"
        crown={true}
        subscribeButton={true}
      />
      <Slider
        sectionTitle="Upcoming Events"
        cards={upEvCards}
        sliderClass="up-ev"
        cardClass="up-ev-cards"
      />
      <Slider
        sectionTitle="Founders"
        cards={founderCards}
        sliderClass="fn"
        cardClass="fn-cards"
        cardContClass="check"
      />
      <div className="container">
        <Advertisment image={"./Adv2.png"} width={720} adclass="adv-l advl2" />
      </div>
      <RCwsa
        sectionTitle="Most Popular"
        cards={mostPopularCards}
        ad={"./Adv3.png"}
        class="remove-border"
      />

      <div className="container">
        <Advertisment image={"./Adv2.png"} width={720} adclass="adv-l advl2" />
      </div>
      <div className="container ad-b-tn-2">
        <Advertisment image={"./Adv3.png"} adclass="adv-s ad-b-tn " />
      </div>
      <VCCTV
        url="https://www.youtube.com/embed/THL1OPn72vo"
        date="30 September"
        author="Madhurima Nandy"
      />
      <Slider
        sectionTitle="TMT"
        cards={tmtCards}
        sliderClass="tmt"
        cardClass="tmt-cards"
        cardContClass="check"
      />
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
      <Slider
        sectionTitle="Tech Circle"
        cards={tcCards}
        sliderClass="tc"
        cardClass="tc-cards"
        cardContClass="check"
      />
      <div className="container">
        <Advertisment image={"./Adv2.png"} width={720} adclass="adv-l advl2" />
      </div>
      <div className="container ad-b-tn-2">
        <Advertisment image={"./Adv3.png"} adclass="adv-s ad-b-tn " />
      </div>
      <Slider
        sectionTitle="Mergers and Acquisitions"
        titleAbbreviation="M &#38; A"
        cards={mergAcqCards}
        sliderClass="mac"
        cardClass="mac-cards"
        cardContClass="check"
      />
      <Slider
        sectionTitle="Financials"
        cards={finCards}
        sliderClass="fin"
        cardClass="fin-cards"
        cardContClass="check"
      />
      <section className="more-stories">
        <div className="container">
          <h3 className="mts">More Stories</h3>
          <div>
            {moreStoriesCards.map((card) => {
              if (card.adv) return card.adv;
              return (
                <Card
                  cardClass="more-stories-cards"
                  image={card.image}
                  title={card.title}
                  author={card.author}
                  date={card.date}
                  content={card.content}
                  premium={card.premium}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
