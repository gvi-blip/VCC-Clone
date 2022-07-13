import React from "react";
import Header from "./Header/Header";
import Card from "./Card";
import Adv1s from "./Advertisment/Adv1s.png";
import Adv2 from "./Advertisment/Adv2.png";
import Adv3 from "./Advertisment/Adv3.png";
import RCwsa from "./RCwsa";
import Advertisment from "./Advertisment/Advertisment";
import VCCTV from "./VCCTV";
import ManufacturingImg from "./images/topnews/manufacturing.png";
import TNEconomy from "./images/TopNewsCards/Economy.png";
import TNConsumer from "./images/TopNewsCards/Consumer.png";
import TNFinance from "./images/TopNewsCards/Finance.png";
import TNEconomy2 from "./images/TopNewsCards/Economy2.png";
import EPConsumer from "./images/EditorsPick/Consumer.png";
import EPEconomy from "./images/EditorsPick/Economy.png";
import EPFinance from "./images/EditorsPick/Finance.png";
import EPTMT from "./images/EditorsPick/TMT.png";
import MPTMT from "./images/MostPopular/TMT.png";
import MPEconomy from "./images/MostPopular/Economy.png";
import MPManufacturing from "./images/MostPopular/Manufacturing.png";
import MPConsumer from "./images/MostPopular/Consumer.png";
import LP1 from "./images/LimitedPartner/LP1.png";
import LP2 from "./images/LimitedPartner/LP2.png";
import LP3 from "./images/LimitedPartner/LP3.png";
import LP4 from "./images/LimitedPartner/LP4.png";

import "./App.css";
const topNewsCards = [
  {
    title: "ECONOMY",
    image: TNEconomy,
    content:
      "Indian shares snap 5-day rally on weak global cues, post weekly gain",
    date: "30 September",
    author: "Madhurima Nandy +1",
  },
  {
    title: "FINANCE",
    image: TNFinance,
    content: "Paytm to shut Canada B2C app amid eroding market capitalisation",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "CONSUMER",
    image: TNConsumer,
    content:
      "Exclusive: PE-backed sauce maker Wingreens acquires Lok Capital-backed cereal maker",
    date: "30 September",
    author: "Madhurima Nandy +3",
  },
  {
    title: "ECONOMY",
    image: TNEconomy2,
    content:
      "GLOBAL MARKETS-European shares in the red after hawkish Fed comments",
    date: "30 September",
    author: "Madhurima Nandy",
  },
];
const editorsPickCards = [
  {
    title: "ECONOMY",
    image: EPEconomy,
    content:
      "EMERGING MARKETS - Asian markets mixed as they digest Chinese data; South Korean stocks fall",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "FINANCE",
    image: EPFinance,
    content:
      "RIL invests Rs 7600 crores in acquisitions to strengthen retail arm",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "TMT",
    image: EPTMT,
    content: "Dailyhunt parent raises close to $28 mn at $3.1 bn valuation",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "CONSUMER",
    image: EPConsumer,
    content:
      "Delivery race among Indian grocery startups brings road safety risks",
    date: "30 September",
    author: "Madhurima Nandy",
  },
];
const mostPopularCards = [
  {
    title: "TMT",
    image: MPTMT,
    content:
      "Quick commerce deliveries surge 500% in a year, says logistics provider Shadowfax",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "CONSUMER",
    image: MPConsumer,
    content: "Consumer firm Madbow bags $2 mn funding at $13 mn valuation  ",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "ECONOMY",
    image: MPEconomy,
    content: "Indian shares hit three-week lows in broad-based selling",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "MANUFACTURING",
    image: MPManufacturing,
    content:
      "HDFC Capital marks initial close at $1.88 bn for its affordable housing fund 3",
    date: "30 September",
    author: "Madhurima Nandy",
  },
];
const LPcardscontent = [
  {
    title: "",
    image: LP1,
    content:
      "Yatra Angel Network’s debut Rs 90 cr angel fund gets bulk of commitments",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "",
    image: LP2,
    content:
      "Foundation PE buys 100% LP interest in Prime Venture Partners’ first fund",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "",
    image: LP3,
    content:
      "Kalaari Capital’s partial exits from Dream11 help return $206 mn to LPs",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "",
    image: LP4,
    content:
      "Fresh LP commitment to Indian PE-VC funds sinks after hitting record high",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "",
    image: LP3,
    content:
      "Kalaari Capital’s partial exits from Dream11 help return $206 mn to LPs",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Advertisment image={Adv1s} width={950} adclass="adv-l" />
      <section className="top-news">
        <div className="text-content">
          <p className="mts">MANUFACUTRING</p>
          <h1>
            Warburg Pincus set to acquire majority stake in auto parts maker
          </h1>
          <p className="mts">
            Private equity firm TPG, which is reportedly heading towards a
            public listing, said on Thursday it had appointed long-time company
            executive Todd Sisitsky as president, effective immediately.
          </p>
          <p className="mts">
            <span>30 September</span>
            <span>&middot;</span>
            <span>Madhurima Nandy</span>
          </p>
          <button className="mts">READ MORE</button>
        </div>
        <div className="image">
          <img src={ManufacturingImg} alt="manufacutring" />
        </div>
      </section>
      <section className="tn-cards-cont">
        {topNewsCards.map((card) => {
          return (
            <Card
              class="top-news-cards"
              image={card.image}
              title={card.title}
              author={card.author}
              date={card.date}
              content={card.content}
            />
          );
        })}
      </section>
      <Advertisment image={Adv2} width={720} adclass="adv-l" />
      <RCwsa sectionTitle="Editor's Pick" cards={editorsPickCards} ad={Adv3} />
      <Advertisment image={Adv1s} width={950} adclass="adv-l" />
      <RCwsa sectionTitle="Most Popular" cards={mostPopularCards} ad={Adv3} />
      <Advertisment image={Adv2} width={720} adclass="adv-l" />
      <VCCTV
        url="https://www.youtube.com/embed/THL1OPn72vo"
        date="30 September"
        author="Madhurima Nandy"
      />
      {/* <Slider
        sectionTitle="Limited Partner"
        cards={LPcardscontent}
        class="limited-partner"
        cardClass="lp-cards"
      /> */}
    </div>
  );
}

export default App;
