import Advertisment from "./Advertisment/Advertisment";
import Card from "./Card";
// import { topNewsCards } from "./data";
function TopStories(props) {
  const { data } = props;
  const { stories_list, section_advertisement } = data;
  //   const check = {
  //     q: { b: { e: { d: 5 } } },
  //   };
  //   console.log(check?.a?.b?.c || "Yolo");
  //   delete stories_list[0].industry_details;
  //   console.log(
  //     stories_list[0].industry_details?.industry_details[0].name.toUpperCase()
  //   );
  return (
    <>
      {stories_list && stories_list.length > 0 ? (
        <>
          {section_advertisement ? (
            <div className="container">
              <Advertisment image={"./Adv1s.png"} adclass="adv-l advl1" />
            </div>
          ) : null}

          <section className="top-news" key={stories_list[0].feid || ""}>
            <div className="container">
              <div className="text-content">
                <p className="mts">
                  <a
                    href={
                      (stories_list[0]?.industry_details &&
                        stories_list[0].industry_details[0]?.slug) ||
                      ""
                    }
                  >
                    {(stories_list[0].industry_details &&
                      stories_list[0].industry_details[0]?.name.toUpperCase()) ||
                      ""}
                  </a>
                </p>
                {/* <h1>{(stories_list[0] && stories_list[0].title) || ""}</h1> */}
                <h1>
                  <a href={stories_list[0]?.slug}>{stories_list[0]?.title}</a>
                </h1>
                <p className="mts">
                  {(stories_list[0] && stories_list[0].summary) || ""}
                </p>
                <p className="mts">
                  <span>
                    {stories_list[0]?.publish
                      ? new Date(
                          Date.parse(stories_list[0].publish)
                        ).getDate() < 10
                        ? `0${new Date(
                            Date.parse(stories_list[0].publish)
                          ).getDate()}`
                        : new Date(
                            Date.parse(stories_list[0].publish)
                          ).getDate()
                      : ""}{" "}
                    {stories_list[0]?.publish
                      ? new Date(
                          Date.parse(stories_list[0].publish)
                        ).toLocaleString("default", { month: "long" })
                      : ""}
                  </span>
                  <span>&middot;</span>
                  <span
                    className="author-name"
                    onClick={() => {
                      console.log(stories_list[0].author_details[0].slug);
                    }}
                  >
                    <a
                      href={
                        (stories_list[0]?.author_details &&
                          stories_list[0].author_details[0]?.slug) ||
                        ""
                      }
                    >
                      {stories_list[0].author_details &&
                      stories_list[0].author_details[0]?.name
                        ? stories_list[0].author_details.length === 1
                          ? stories_list[0].author_details[0].name
                          : `${stories_list[0].author_details[0].name} +${
                              stories_list[0].author_details.length - 1
                            }`
                        : ""}
                    </a>
                  </span>
                </p>

                <button
                  className="mts"
                  onClick={() => {
                    console.log(stories_list[0].slug);
                  }}
                >
                  READ MORE
                </button>
              </div>
              <div className="image">
                <a href={stories_list[0]?.slug}>
                  <img
                    src={
                      stories_list[0]?.file_url ||
                      require("./images/topnews/manufacturing.png")
                    }
                    alt={stories_list[0]?.file_alt}
                  />
                </a>
              </div>
            </div>
          </section>
          {section_advertisement ? (
            <div className="container">
              <Advertisment image={"./Adv3.png"} adclass="adv-s ad-b-tn" />
            </div>
          ) : null}

          <section className="tn-cards-cont">
            <div className="container">
              {stories_list.map((card, index) => {
                if (index === 0 || card === null || card === undefined)
                  return null;
                if (index === 2 && card.author_details.length === 1) {
                  card.author_details.push({ name: "GVI" });
                  card.author_details.push({ name: "Papon Dillo" });
                }
                return (
                  <Card
                    key={card?.feid || ""}
                    cardClass={"top-news-cards"}
                    cardData={card}
                  />
                );
              })}
            </div>
          </section>
          {section_advertisement ? (
            <div className="container">
              <Advertisment
                image={"./Adv2.png"}
                width={720}
                adclass="adv-l advl2"
              />
            </div>
          ) : null}
        </>
      ) : null}
    </>
  );
}

export default TopStories;
