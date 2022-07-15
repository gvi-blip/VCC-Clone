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
    premium: true,
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
    premium: true,
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
    premium: true,
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
    premium: true,
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
    premium: true,
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
    premium: true,
  },
  {
    adv: (
      <Advertisment image={"./Adv2.png"} width={720} adclass="adv-l advl2" />
    ),
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

const vcPremiumCards = [
  {
    title: "TMT",
    image: "./images/VCPremium/TMT.png",
    content:
      "Iron Pillar-backed CoreStack’s game plan to hit $1 bn in annual recurring revenue",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    title: "INFRASTRUCTURE",
    image: "./images/VCPremium/Infra.png",
    content:
      "Actis in talks to acquire Welspun group’s roads for up to Rs 10,000 cr",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    title: "CONSUMER",
    image: "./images/VCPremium/Consumer.png",
    content:
      "Sixth Sense Ventures invests in VC-backed fashion jewellery startup",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    title: "TMT",
    image: "./images/VCPremium/TMT.png",
    content:
      "Iron Pillar-backed CoreStack’s game plan to hit $1 bn in annual recurring revenue",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    title: "INFRASTRUCTURE",
    image: "./images/VCPremium/Infra.png",
    content:
      "Actis in talks to acquire Welspun group’s roads for up to Rs 10,000 cr",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    title: "CONSUMER",
    image: "./images/VCPremium/Consumer.png",
    content:
      "Sixth Sense Ventures invests in VC-backed fashion jewellery startup",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    title: "TMT",
    image: "./images/VCPremium/TMT.png",
    content:
      "Iron Pillar-backed CoreStack’s game plan to hit $1 bn in annual recurring revenue",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    title: "INFRASTRUCTURE",
    image: "./images/VCPremium/Infra.png",
    content:
      "Actis in talks to acquire Welspun group’s roads for up to Rs 10,000 cr",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    title: "CONSUMER",
    image: "./images/VCPremium/Consumer.png",
    content:
      "Sixth Sense Ventures invests in VC-backed fashion jewellery startup",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
];

const tmtCards = [
  {
    image: "./images/TMT/TMT1.png",
    content:
      "DSG Consumer Partners likely to raise nearly $125 mn for new fund",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/TMT/TMT2.png",
    content:
      "NIIF-owned Ayana Renewable in talks to buy solar energy asset for nearly ₹450 crore",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/TMT/TMT3.png",
    content: "Kotak Investment Advisors marks final close of pre-IPO fund",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/TMT/TMT1.png",
    content:
      "DSG Consumer Partners likely to raise nearly $125 mn for new fund",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/TMT/TMT2.png",
    content:
      "NIIF-owned Ayana Renewable in talks to buy solar energy asset for nearly ₹450 crore",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/TMT/TMT3.png",
    content: "Kotak Investment Advisors marks final close of pre-IPO fund",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/TMT/TMT1.png",
    content:
      "DSG Consumer Partners likely to raise nearly $125 mn for new fund",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/TMT/TMT2.png",
    content:
      "NIIF-owned Ayana Renewable in talks to buy solar energy asset for nearly ₹450 crore",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/TMT/TMT3.png",
    content: "Kotak Investment Advisors marks final close of pre-IPO fund",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
];

const tcCards = [
  {
    image: "./images/TechCircle/TC1.png",
    content:
      "Zomato-backed Shiprocket to pick 75% stake in data platform Wigzo Tech",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/TechCircle/TC2.png",
    content:
      "upGrad net loss widens as advertising expenses jump twofold in FY21",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/TechCircle/TC3.png",
    content:
      "Youth-focused neobank Muvin bags $3 mn in a round led by WaterBridge Ventures",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/TechCircle/TC4.png",
    content: "Rooter raises $25 mn led by Lightbox, March Gaming, others",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/TechCircle/TC1.png",
    content:
      "Zomato-backed Shiprocket to pick 75% stake in data platform Wigzo Tech",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/TechCircle/TC2.png",
    content:
      "upGrad net loss widens as advertising expenses jump twofold in FY21",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/TechCircle/TC3.png",
    content:
      "Youth-focused neobank Muvin bags $3 mn in a round led by WaterBridge Ventures",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/TechCircle/TC4.png",
    content: "Rooter raises $25 mn led by Lightbox, March Gaming, others",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
];

const mergAcqCards = [
  {
    image: "./images/MergersAcq/1.png",
    content:
      "Reliance Retail picks 54% stake in Addverb Technologies for ₹983 cr",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/MergersAcq/2.png",
    content:
      "Klub will deploy Rs 200 cr fund in first half of 2022: Co-founder & CEO Anurakt Jain",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/MergersAcq/3.png",
    content:
      "‘We would be looking for an IPO in India’: Fractal Analytics CEO Srikanth Velamakanni",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/MergersAcq/4.png",
    content:
      "SaaS fintech startup Zaggle rejigs top management team with two new appointments",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/MergersAcq/1.png",
    content:
      "Reliance Retail picks 54% stake in Addverb Technologies for ₹983 cr",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/MergersAcq/2.png",
    content:
      "Klub will deploy Rs 200 cr fund in first half of 2022: Co-founder & CEO Anurakt Jain",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/MergersAcq/3.png",
    content:
      "‘We would be looking for an IPO in India’: Fractal Analytics CEO Srikanth Velamakanni",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/MergersAcq/4.png",
    content:
      "SaaS fintech startup Zaggle rejigs top management team with two new appointments",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
];

const finCards = [
  {
    image: "./images/Financials/1.png",
    content:
      "Omicron poses limited downside to Indian economy, say economists - Reuters Poll",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/Financials/2.png",
    content:
      "Kalaari Capital, others back community investment platform threedots",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/Financials/3.png",
    content:
      "Creator economy firm AppX, education planning platform EduFund secure capital",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/Financials/4.png",
    content:
      "ADB returns as limited partner for Creador’s fifth Southeast Asia focused fund",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/Financials/1.png",
    content:
      "Omicron poses limited downside to Indian economy, say economists - Reuters Poll",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/Financials/2.png",
    content:
      "Kalaari Capital, others back community investment platform threedots",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/Financials/3.png",
    content:
      "Creator economy firm AppX, education planning platform EduFund secure capital",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/Financials/4.png",
    content:
      "ADB returns as limited partner for Creador’s fifth Southeast Asia focused fund",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
];

const founderCards = [
  {
    image: "./images/Founders/1.png",
    content:
      "BharatPe, 91Springboard co-founders, others back co-living platform Crib",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/Founders/2.png",
    content:
      "Social network Zorro gets $3.2 mn seed funding from 15 unicorn founders",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/Founders/3.png",
    content: "Mobile gaming streamer Turnip secures $12.5 mn in Series A round",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/Founders/4.png",
    content:
      "Cred to buy expense management firm Happay; deal valued at $180 mn",
    date: "30 Sep",
    author: "Madhurima Nandy",
    pemium: true,
  },
  {
    image: "./images/Founders/1.png",
    content:
      "BharatPe, 91Springboard co-founders, others back co-living platform Crib",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/Founders/2.png",
    content:
      "Social network Zorro gets $3.2 mn seed funding from 15 unicorn founders",
    date: "30 Sep",
    author: "Madhurima Nandy",
    premium: true,
  },
  {
    image: "./images/Founders/3.png",
    content: "Mobile gaming streamer Turnip secures $12.5 mn in Series A round",
    date: "30 Sep",
    author: "Madhurima Nandy",
  },
  {
    image: "./images/Founders/4.png",
    content:
      "Cred to buy expense management firm Happay; deal valued at $180 mn",
    date: "30 Sep",
    author: "Madhurima Nandy",
    pemium: true,
  },
];

const upEvCards = [
  {
    eventDate: "4th October,2021",
    image: "./images/UpcomingEvents/1.png",
    title: "Limited Partners Summit 2022",
    address: "Hyatt Regency, New Delhi | New Hybrid Masterclass.",
  },
  {
    eventDate: "4th October,2021",
    image: "./images/UpcomingEvents/2.png",
    title: "Cloud- The Digital Infrastructure",
    address: "Hyatt Regency, New Delhi | New Hybrid Masterclass.",
  },
  {
    eventDate: "4th October,2021",
    image: "./images/UpcomingEvents/3.png",
    title: "FUTURE OF TRUST",
    address: "Hyatt Regency, New Delhi | New Hybrid Masterclass.",
  },
  {
    eventDate: "4th October,2021",
    image: "./images/UpcomingEvents/1.png",
    title: "Limited Partners Summit 2022",
    address: "Hyatt Regency, New Delhi | New Hybrid Masterclass.",
  },
  {
    eventDate: "4th October,2021",
    image: "./images/UpcomingEvents/2.png",
    title: "Cloud- The Digital Infrastructure",
    address: "Hyatt Regency, New Delhi | New Hybrid Masterclass.",
  },
  {
    eventDate: "4th October,2021",
    image: "./images/UpcomingEvents/3.png",
    title: "FUTURE OF TRUST",
    address: "Hyatt Regency, New Delhi | New Hybrid Masterclass.",
  },
  {
    eventDate: "4th October,2021",
    image: "./images/UpcomingEvents/1.png",
    title: "Limited Partners Summit 2022",
    address: "Hyatt Regency, New Delhi | New Hybrid Masterclass.",
  },
  {
    eventDate: "4th October,2021",
    image: "./images/UpcomingEvents/2.png",
    title: "Cloud- The Digital Infrastructure",
    address: "Hyatt Regency, New Delhi | New Hybrid Masterclass.",
  },
  {
    eventDate: "4th October,2021",
    image: "./images/UpcomingEvents/3.png",
    title: "FUTURE OF TRUST",
    address: "Hyatt Regency, New Delhi | New Hybrid Masterclass.",
  },
];
export {
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
};
