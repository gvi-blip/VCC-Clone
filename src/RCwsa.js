import Advertisment from "./Advertisment/Advertisment";
import Card from "./Card";
function RCwsa(props) {
  const { sectionClass, data, ad } = props;
  const { section_name, stories_list, section_border } = data;
  return (
    <div
      className={`container ${
        section_border && section_border === "1" ? "b-bottom" : ""
      }`}
    >
      <section
        className={"small-ad-comp " + (sectionClass ? sectionClass : "")}
      >
        <div className="content">
          <h2
            className="mts"
            style={{
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            {section_name || ""}
          </h2>
          <div className="sac-card-cont">
            <div>
              <Card cardClass="rcwsa-card-l" cardData={stories_list[0]} />
            </div>
            <div>
              {stories_list.map((card, index) => {
                if (index === 0) {
                  return null;
                }
                return <Card cardClass="rcwsa-cards-s" cardData={card} />;
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
