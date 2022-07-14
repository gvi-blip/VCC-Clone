import React from "react";

function Card(props) {
  return (
    <div className={"card " + props.class}>
      <div className="card-image-cont">
        <img
          src={require(`${props.image}`)}
          alt={props.alt}
          height={`${props.height ? props.height : ""}`}
          width={`${props.width ? props.width : ""}`}
        />
        {props.premium ? <div className="premium-tag">PREMIUM</div> : ""}
      </div>
      <div>
        {props.title ? <p className="card-title">{props.title}</p> : null}
        <p
          className={
            "card-content mts " +
            (props.cardContClass ? props.cardContClass : "")
          }
        >
          {props.content}
        </p>
        <p>
          <span className="card-date">{props.date}</span>
          {props.address ? null : <span className="middot">&middot;</span>}
          <span className="card-author">{props.author}</span>
          {props.address ? (
            <p className="card-address">{props.address}</p>
          ) : null}
        </p>
      </div>
    </div>
  );
}

export default Card;
