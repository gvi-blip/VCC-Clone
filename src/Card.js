import { useRef } from "react";
import Advertisment from "./Advertisment/Advertisment";

function Card(props) {
  const ttRef = useRef("");
  const { cardData, cardClass, cardContClass, address } = props;

  const {
    file_url,
    file_alt,
    industry_details,
    author_details,
    publish,
    title,
    premium,
    slug,
  } = cardData;

  const date = publish ? new Date(Date.parse(publish)) : "";
  const day = date
    ? date.getDate() < 10
      ? `0${date.getDate()}`
      : `${date.getDate()}`
    : "";
  const month = date ? date.toLocaleString("default", { month: "long" }) : "";

  return (
    <div className={"card " + cardClass}>
      <div className="card-image-cont">
        <a href={slug || ""}>
          <img
            src={file_url || require("./images/topnews/manufacturing.png")}
            alt={file_alt || ""}
          />
          {premium && premium === "1" ? (
            <div className="premium-tag">PREMIUM</div>
          ) : (
            ""
          )}
        </a>
      </div>
      <div>
        {/* {eventDate ? <p className="card-eventdate">{eventDate}</p> : null} */}
        {industry_details && industry_details[0]?.name ? (
          <p className="card-title">
            <a href={industry_details[0]?.slug}>
              {industry_details[0].name.toUpperCase()}
            </a>
          </p>
        ) : null}
        <p
          className={"card-content mts " + (cardContClass ? cardContClass : "")}
        >
          <a href={slug || " "}>{title || ""}</a>
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            <span className="card-date">
              {day} {month}
            </span>
            {address ? null : <span className="middot">&middot;</span>}

            {author_details && author_details[0]?.name ? (
              <span className="card-author">
                <a href={author_details[0].slug}>{author_details[0].name}</a>
              </span>
            ) : null}
            {address ? <p className="card-address">{address}</p> : null}
          </span>
          <div>
            {author_details && author_details.length > 1 ? (
              <span
                className="a-author"
                onMouseEnter={() => {
                  ttRef.current.style.display = "block";
                }}
              >
                {`+${author_details.length - 1}`}
                <div
                  className="a-author-tooltip"
                  ref={ttRef}
                  onMouseLeave={() => {
                    ttRef.current.style.display = "none";
                  }}
                >
                  <ul style={{ listStyle: "none" }}>
                    {author_details.map((author, index) => {
                      console.log(author);
                      if (index === 0) return null;
                      return (
                        <li>
                          <a href={author.slug}>{author.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </span>
            ) : null}
          </div>
        </p>
      </div>
    </div>
  );
}

export function TopNewsCardL(props) {
  const ttRef = useRef();
  const { section_advertisement, cardData } = props;
  const {
    file_url,
    file_alt,
    industry_details,
    author_details,
    publish,
    title,
    summary,
    premium,

    slug,
  } = cardData;

  return (
    <>
      <section className="top-news">
        <div className="container">
          <div className="text-content">
            <p className="mts">
              <a href={(industry_details && industry_details[0]?.slug) || ""}>
                {(industry_details &&
                  industry_details[0]?.name.toUpperCase()) ||
                  ""}
              </a>
            </p>
            <h1>
              <a href={slug || ""}>{title || ""}</a>
            </h1>
            <p className="mts">{summary || ""}</p>
            <p className="mts">
              <span>
                {publish
                  ? new Date(Date.parse(publish)).getDate() < 10
                    ? `0${new Date(Date.parse(publish)).getDate()}`
                    : new Date(Date.parse(publish)).getDate()
                  : ""}{" "}
                {publish
                  ? new Date(Date.parse(publish)).toLocaleString("default", {
                      month: "long",
                    })
                  : ""}
              </span>
              <span>&middot;</span>
              <span
                className="author-name"
                onClick={() => {
                  console.log(author_details[0].slug);
                }}
              >
                <a href={(author_details && author_details[0]?.slug) || ""}>
                  {(author_details && author_details[0]?.name) || ""}
                  {/* // ? author_details.length === 1
                    //   ? author_details[0].name
                    //   : `${author_details[0].name} +${
                    //       author_details.length - 1
                    //     }`
                    // : ""} */}
                </a>
              </span>
              <div>
                {author_details && author_details.length > 1 ? (
                  <span
                    className="a-author"
                    onMouseEnter={() => {
                      ttRef.current.style.display = "block";
                    }}
                  >
                    {`+${author_details.length - 1}`}
                    <div
                      className="a-author-tooltip"
                      ref={ttRef}
                      onMouseLeave={() => {
                        ttRef.current.style.display = "none";
                      }}
                    ></div>
                  </span>
                ) : null}
              </div>
            </p>

            <button
              className="mts"
              onClick={() => {
                console.log(slug);
              }}
            >
              READ MORE
            </button>
          </div>
          <div className="image">
            <a href={slug || ""}>
              <img
                src={file_url || require("./images/topnews/manufacturing.png")}
                alt={file_alt || ""}
              />
              {premium && premium === "1" ? (
                <div className="premium-tag">PREMIUM</div>
              ) : (
                ""
              )}
            </a>
          </div>
        </div>
      </section>

      {section_advertisement ? (
        <div className="container">
          <Advertisment image={"./Adv3.png"} adclass="adv-s ad-b-tn" />
        </div>
      ) : null}
    </>
  );
}

export default Card;
