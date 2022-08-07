import { useRef } from "react";
import Advertisment from "./Advertisment/Advertisment";
import { Link } from "react-router-dom";

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
    summary,
  } = cardData;
  // author_details = undefined
  // file_url = "kjnj";
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
        <Link to={slug || ""}>
          <img
            src={file_url || require("./images/topnews/manufacturing.png")}
            alt={file_alt || ""}
          />
          {premium && premium === "1" ? (
            <div className="premium-tag">PREMIUM</div>
          ) : (
            ""
          )}
        </Link>
      </div>
      <div>
        {/* {eventDate ? <p className="card-eventdate">{eventDate}</p> : null} */}
        {industry_details && industry_details[0]?.name ? (
          <p className="card-title">
            <Link to={industry_details[0]?.slug}>
              {industry_details[0].name.toUpperCase()}
            </Link>
          </p>
        ) : null}
        <p
          className={"card-content mts " + (cardContClass ? cardContClass : "")}
        >
          <Link to={slug || " "}>{title || ""}</Link>
        </p>
        {cardClass &&
        (cardClass === "top-stories-card-l" || cardClass === "vcctv-card") ? (
          <p>{summary || ""}</p>
        ) : null}
        <p>
          <span>
            <span className="card-date">
              {day} {month}
            </span>
            {address ? null : <span className="middot">&middot;</span>}

            {author_details && author_details[0]?.name ? (
              <span className="card-author">
                <Link to={author_details[0].slug}>
                  {author_details[0].name}
                </Link>
              </span>
            ) : null}
            {address ? <p className="card-address">{address}</p> : null}
          </span>

          {author_details && author_details.length > 1 ? (
            <span
              className="a-author"
              onMouseEnter={() => {
                ttRef.current.style.display = "block";
              }}
              style={{ marginLeft: "10px" }}
            >
              <span>{`+${author_details.length - 1}`}</span>
              <div
                className="a-author-tooltip"
                ref={ttRef}
                onMouseLeave={() => {
                  ttRef.current.style.display = "none";
                }}
              >
                <ul style={{ listStyle: "none", padding: "10px" }}>
                  {author_details.map((author, index) => {
                    if (index === 0) return null;
                    return (
                      <li>
                        <Link to={author.slug || ""}>{author.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </span>
          ) : null}
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
              <Link to={(industry_details && industry_details[0]?.slug) || ""}>
                {(industry_details &&
                  industry_details[0]?.name.toUpperCase()) ||
                  ""}
              </Link>
            </p>
            <h1>
              <Link to={slug || ""}>{title || ""}</Link>
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
                <Link to={(author_details && author_details[0]?.slug) || ""}>
                  {(author_details && author_details[0]?.name) || ""}
                  {/* // ? author_details.length === 1
                    //   ? author_details[0].name
                    //   : `${author_details[0].name} +${
                    //       author_details.length - 1
                    //     }`
                    // : ""} */}
                </Link>
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
            <Link to={slug || ""}>
              <img
                src={file_url || require("./images/topnews/manufacturing.png")}
                alt={file_alt || ""}
              />
              {premium && premium === "1" ? (
                <div className="premium-tag">PREMIUM</div>
              ) : (
                ""
              )}
            </Link>
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
