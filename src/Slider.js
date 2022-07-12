import React from "react";
import Card from "./Card";

function Slider(props) {
  return (
    <div className={"slider-comp " + props.class}>
      <div className="title">
        <h2>{props.sectionTitle}</h2>
        <p className="mts">
          View More <i class="fa-solid fa-chevron-right"></i>
        </p>
      </div>
      <div className="cards">
        {props.cards.map((card) => {
          return (
            <Card
              class={props.cardClass}
              image={card.image}
              title={card.title}
              author={card.author}
              date={card.date}
              content={card.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
