import { useRef } from "react";
import "./VCCTV.css";
import Advertisment from "./Advertisment/Advertisment";

function VCCTV(props) {
  const ttRef = useRef();
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
  const date = publish ? new Date(Date.parse(publish)) : "";
  const day = date
    ? date.getDate() < 10
      ? `0${date.getDate()}`
      : `${date.getDate()}`
    : "";
  const month = date ? date.toLocaleString("default", { month: "long" }) : "";
  author_details.push({ name: "GVI" });
  author_details.push({ name: "Papon Dillo" });
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
              <p>
                <span className="card-date">
                  {day} {month}
                </span>
                <span className="middot">&middot;</span>
                {/* <span className="card-author">{props.author}</span> */}
                {author_details && author_details[0]?.name ? (
                  <span className="card-author">
                    <a href={author_details[0].slug}>
                      {author_details[0].name}
                    </a>
                  </span>
                ) : null}

                {author_details && author_details.length > 1 ? (
                  <span
                    className="a-author"
                    onMouseEnter={() => {
                      ttRef.current.style.display = "block";
                    }}
                    style={{ marginLeft: "20px" }}
                  >
                    {`+${author_details.length - 1}`}
                    <div
                      className="a-author-tooltip"
                      ref={ttRef}
                      onMouseLeave={() => {
                        ttRef.current.style.display = "none";
                      }}
                      style={{ left: "0px" }}
                    ></div>
                  </span>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VCCTV;
