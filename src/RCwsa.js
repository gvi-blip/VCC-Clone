import React from "react";
import Advertisment from "./Advertisment/Advertisment";
import Card from "./Card";
function RCwsa(props) {
  return (
    <section className="small-ad-comp">
      <div className="content">
        <h2
          className="mts"
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          {props.sectionTitle}
        </h2>
        <div className="sac-card-cont">
          <div>
            <Card
              class="rcwsa-card-l"
              image={props.cards[0].image}
              title={props.cards[0].title}
              author={props.cards[0].author}
              date={props.cards[0].date}
              content={props.cards[0].content}
            />
          </div>
          <div>
            {props.cards.map((card, index) => {
              if (index === 0) {
                return null;
              }
              return (
                <Card
                  class="rcwsa-cards-s"
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
      </div>
      <Advertisment image={props.ad} adclass="adv-s" />
    </section>
  );
}

export default RCwsa;
