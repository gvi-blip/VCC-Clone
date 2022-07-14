import Advertisment from "./Advertisment/Advertisment";
const topNewsCards = [
  {
    title: "ECONOMY",
    image: "./images/TopNewsCards/Economy.png",
    content:
      "Indian shares snap 5-day rally on weak global cues, post weekly gain",
    date: "30 September",
    author: "Madhurima Nandy +1",
    premium: true,
  },
  {
    title: "FINANCE",
    image: "./images/TopNewsCards/Finance.png",
    content: "Paytm to shut Canada B2C app amid eroding market capitalisation",
    date: "30 September",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    title: "CONSUMER",
    image: "./images/TopNewsCards/Consumer.png",
    content:
      "Exclusive: PE-backed sauce maker Wingreens acquires Lok Capital-backed cereal maker",
    date: "30 September",
    author: "Madhurima Nandy +3",
  },
  {
    title: "ECONOMY",
    image: "./images/TopNewsCards/Economy2.png",
    content:
      "GLOBAL MARKETS-European shares in the red after hawkish Fed comments",
    date: "30 September",
    author: "Madhurima Nandy",
  },
];
const editorsPickCards = [
  {
    title: "ECONOMY",
    image: "./images/EditorsPick/Economy.png",
    content:
      "EMERGING MARKETS - Asian markets mixed as they digest Chinese data; South Korean stocks fall",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "FINANCE",
    image: "./images/EditorsPick/Finance.png",
    content:
      "RIL invests Rs 7600 crores in acquisitions to strengthen retail arm",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "TMT",
    image: "./images/EditorsPick/TMT.png",
    content: "Dailyhunt parent raises close to $28 mn at $3.1 bn valuation",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "CONSUMER",
    image: "./images/EditorsPick/Consumer.png",
    content:
      "Delivery race among Indian grocery startups brings road safety risks",
    date: "30 September",
    author: "Madhurima Nandy",
  },
];
const mostPopularCards = [
  {
    title: "TMT",
    image: "./images/MostPopular/TMT.png",
    content:
      "Quick commerce deliveries surge 500% in a year, says logistics provider Shadowfax",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "CONSUMER",
    image: "./images/MostPopular/Consumer.png",
    content: "Consumer firm Madbow bags $2 mn funding at $13 mn valuation  ",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "ECONOMY",
    image: "./images/MostPopular/Economy.png",
    content: "Indian shares hit three-week lows in broad-based selling",
    date: "30 September",
    author: "Madhurima Nandy",
  },
  {
    title: "MANUFACTURING",
    image: "./images/MostPopular/Manufacturing.png",
    content:
      "HDFC Capital marks initial close at $1.88 bn for its affordable housing fund 3",
    date: "30 September",
    author: "Madhurima Nandy",
  },
];
const LPcardscontent = [
  {
    title: "",
    image: "./images/LimitedPartner/LP1.png",
    content:
      "Yatra Angel Network’s debut Rs 90 cr angel fund gets bulk of commitments",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "",
    image: "./images/LimitedPartner/LP2.png",
    content:
      "Foundation PE buys 100% LP interest in Prime Venture Partners’ first fund",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "",
    image: "./images/LimitedPartner/LP3.png",
    content:
      "Kalaari Capital’s partial exits from Dream11 help return $206 mn to LPs",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "",
    image: "./images/LimitedPartner/LP4.png",
    content:
      "Fresh LP commitment to Indian PE-VC funds sinks after hitting record high",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "",
    image: "./images/LimitedPartner/LP3.png",
    content:
      "Kalaari Capital’s partial exits from Dream11 help return $206 mn to LPs",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "",
    image: "./images/LimitedPartner/LP3.png",
    content:
      "Kalaari Capital’s partial exits from Dream11 help return $206 mn to LPs",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "",
    image: "./images/LimitedPartner/LP3.png",
    content:
      "Kalaari Capital’s partial exits from Dream11 help return $206 mn to LPs",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "",
    image: "./images/LimitedPartner/LP3.png",
    content:
      "Kalaari Capital’s partial exits from Dream11 help return $206 mn to LPs",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
];

const moreStoriesCards = [
  {
    title: "FINANCE",
    image: "./images/MoreStories/Finance1.png",
    content:
      "DSG Consumer Partners likely to raise nearly $125 mn for new fund",
    date: "30 Sep",
    author: "Madhurima Nandy,Madhurima Nandy",
  },
  {
    title: "ECONOMY",
    image: "./images/MoreStories/Economy1.png",
    content:
      "GLOBAL MARKETS - Asia shares fall as Treasury yields hit fresh highs",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "CONSUMER",
    image: "./images/MoreStories/Consumer1.png",
    content:
      "RPSG Capital Ventures to raise Rs 500 cr for consumer-focused fund",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "TMT",
    image: "./images/MoreStories/TMT.png",
    content:
      "Kotak’s asset arm, others lead $6 mn bet on cancer detection platform Epigeneres",
    date: "30 Sep",
    author: "Madhurima Nandy,Madhurima Nandy",
  },
  {
    title: "PEOPLE",
    image: "./images/MoreStories/People.png",
    content:
      "Jobs portal Apna appoints former PayU’s Shantanu Preetam as its first CTO",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "FINANCE",
    image: "./images/MoreStories/Finance2.png",
    content:
      "Actis in talks to acquire Welspun group’s roads for up to Rs 10,000 cr",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    adv: <Advertisment image={"./Adv2.png"} width={720} adclass="adv-l" />,
  },
  {
    title: "CONSUMER",
    image: "./images/MoreStories/Consumer2.png",
    content:
      "Actor Tiger Shroff, BharatPe’s Ashneer Grover, others back Freadom",
    date: "30 Sep",
    author: "Madhurima Nandy,Madhurima Nandy",
  },
  {
    title: "INFRASTRUCTURE",
    image: "./images/MoreStories/Infrastructure.png",
    content:
      "Shadowfax’s pivot pays off as focus sharpens on last mile delivery",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "ECONOMY",
    image: "./images/MoreStories/Economy2.png",
    content:
      "Indian shares slip after five-day rally; HCL top drag ahead of results",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "HEALTHCARE",
    image: "./images/MoreStories/HealthCare.png",
    content:
      "Health Care At Home India secures $15 mn from new PE investor ABC World Asia",
    date: "30 Sep",
    author: "Madhurima Nandy,Madhurima Nandy",
  },
  {
    title: "CONSUMER",
    image: "./images/MoreStories/Consumer3.png",
    content:
      "Dogsee Chew raises Rs 50 cr in Series A from Mankind Pharma; Sixth Sense Ventures",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    title: "FINANCE",
    image: "./images/MoreStories/Finance3.png",
    content:
      "Walton Street BlackSoil Real Estate Debt Fund II invests in two housing projects",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
];

export {
  moreStoriesCards,
  LPcardscontent,
  mostPopularCards,
  editorsPickCards,
  topNewsCards,
};
