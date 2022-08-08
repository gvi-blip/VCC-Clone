import "./VCCTV.css";
import Advertisment from "./Advertisment/Advertisment";
import { Meta } from "./Card";
// import "./App.css";

function VCCTV(props) {
  const { section_border, stories_list, section_advertisement } = props.data;
  const {
    file_url,
    file_alt,
    title,
    slug,
    summary,
    industry_details,
    author_details,
    publish,
  } = stories_list[0];

  // author_details.push({ name: "GVI" });
  // author_details.push({ name: "Papon Dillo" });
  return (
    <>
      {section_advertisement ? (
        <div className="container">
          <Advertisment image={"./Adv3.png"} adclass="adv-s ad-b-tn" />
        </div>
      ) : null}
      <section className="vcctv">
        <div
          className={`container ${
            section_border && section_border === "1" ? "b-bottom" : ""
          }`}
        >
          <div>
            <h2 className="mts" style={{ fontWeight: "bold" }}>
              VCC TV
            </h2>
            <button className="mts" style={{ fontWeight: "medium" }}>
              View More
              <i
                className="fa-solid fa-chevron-right"
                style={{ fontSize: "10px", margin: "0 10px" }}
              ></i>
            </button>
          </div>
          <div>
            <img src={file_url || ""} alt={file_alt || ""}></img>

            <div className="text-content mts">
              <p>
                <a href={(industry_details && industry_details[0]?.slug) || ""}>
                  {(
                    industry_details && industry_details[0]?.name
                  ).toUpperCase() || ""}
                </a>
              </p>
              <h1>
                <a href={slug || ""}>{title || ""}</a>
              </h1>
              <p>{summary || ""}</p>
              <Meta author_details={author_details} publish={publish}></Meta>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VCCTV;
