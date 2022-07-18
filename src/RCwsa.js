import Advertisment from "./Advertisment/Advertisment";
import Card from "./Card";
function RCwsa(props) {
  const { sectionClass, sectionTitle, cards, ad } = props;
  return (
    <div className="container">
      <section
        className={"small-ad-comp " + (sectionClass ? sectionClass : null)}
      >
        <div className="content">
          <h2
            className="mts"
            style={{
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            {sectionTitle}
          </h2>
          <div className="sac-card-cont">
            <div>
              <Card
                cardClass="rcwsa-card-l"
                image={cards[0].image}
                title={cards[0].title}
                author={cards[0].author}
                date={cards[0].date}
                content={cards[0].content}
              />
            </div>
            <div>
              {cards.map((card, index) => {
                if (index === 0) {
                  return null;
                }
                return (
                  <Card
                    cardClass="rcwsa-cards-s"
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
        <Advertisment image={ad} adclass="adv-s" />
      </section>
    </div>
  );
}

export default RCwsa;
