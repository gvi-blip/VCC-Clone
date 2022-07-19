import React from "react";

function Card(props) {
  const {
    cardClass,
    image,
    alt,
    height,
    width,
    premium,
    eventDate,
    title,
    cardContClass,
    content,
    date,
    address,
    author,
  } = props;

  return (
    <div className={"card " + cardClass}>
      <div className="card-image-cont">
        <img
          src={require(`${image}`)}
          alt={alt}
          height={`${height ? height : ""}`}
          width={`${width ? width : ""}`}
        />
        {premium ? <div className="premium-tag">PREMIUM</div> : ""}
      </div>
      <div>
        {eventDate ? <p className="card-eventdate">{eventDate}</p> : null}
        {title ? <p className="card-title">{title}</p> : null}
        <p
          className={"card-content mts " + (cardContClass ? cardContClass : "")}
        >
          {content}
        </p>
        <p>
          <span className="card-date">{date}</span>
          {address ? null : <span className="middot">&middot;</span>}
          <span className="card-author">{author}</span>
          {address ? <p className="card-address">{address}</p> : null}
        </p>
      </div>

      {/* <div className="card-shadow"></div> */}
    </div>
  );
}

export default Card;
