import { useRef } from "react";

function Card(props) {
  const ttRef = useRef("");
  if (props.topNewsCardL) return <topNewsCardL></topNewsCardL>;
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
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  const month = date.toLocaleString("default", { month: "long" });

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
                ></div>
              </span>
            ) : null}
          </div>
        </p>
      </div>
    </div>
  );
}

function topNewsCardL() {}

export default Card;
