import React from "react";

function Card(props) {
  return (
    <div className={props.class}>
      <div className="card-image-cont">
        <img
          src={props.image}
          alt={props.alt}
          height={`${props.height ? props.height : ""}`}
          width={`${props.width ? props.width : ""}`}
        />
      </div>
      <div>
        <p className="card-title">{props.title}</p>
        <p className="card-content">{props.content}</p>

        <span className="card-date">{props.date}</span>
        <span className="middot">&middot;</span>
        <span className="card-author">{props.author}</span>
      </div>
    </div>
  );
}

export default Card;
