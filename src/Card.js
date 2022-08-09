import { useRef } from "react";
import Advertisment from "./Advertisment/Advertisment";
import { Link, Outlet } from "react-router-dom";

function Card(props) {
  const { cardData, cardClass, cardContClass } = props;

  let {
    file_url,
    file_alt,
    industry_details,
    author_details,
    publish,
    title,
    premium,
    slug,
  } = cardData;

  return (
    <>
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
            className={
              "card-content mts " + (cardContClass ? cardContClass : "")
            }
          >
            <Link to={slug || " "}>{title || ""}</Link>
          </p>
          <Meta author_details={author_details} publish={publish}></Meta>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export function TopNewsCardL(props) {
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
            <Meta author_details={author_details} publish={publish}></Meta>
            <Link to={slug || ""}>
              <button
                className="mts"
                onClick={() => {
                  console.log(slug);
                }}
              >
                READ MORE
              </button>
            </Link>
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

export function Meta(props) {
  const { author_details, publish, address } = props;
  const ttRef = useRef("");
  const date = publish ? new Date(Date.parse(publish)) : "";
  const day = date
    ? date.getDate() < 10
      ? `0${date.getDate()}`
      : `${date.getDate()}`
    : "";
  const month = date ? date.toLocaleString("default", { month: "long" }) : "";
  return (
    <ul className="meta">
      {/* <span> */}
      <li className={`card-date`}>{day + " " + month}</li>
      {address ? null : <li className="mid"></li>}
      {author_details && author_details[0]?.name ? (
        <li className="card-author" key={author_details[0].id}>
          <Link to={author_details[0].slug}>{author_details[0].name}</Link>
        </li>
      ) : null}
      {/* {address ? <p className="card-address">{address}</p> : null} */}
      {/* </span> */}
      {author_details && author_details.length > 1 ? (
        <li
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
                  <li key={author.id}>
                    <Link to={author.slug || ""}>{author.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      ) : null}
    </ul>
  );
}

export default Card;
