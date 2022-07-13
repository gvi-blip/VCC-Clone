import React from "react";
import "./VCCTV.css";

function VCCTV(props) {
  return (
    <section className="vcctv">
      <div className="container">
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
          <iframe src={props.url} frameBorder="0" title="Vid"></iframe>
          <div className="text-content mts">
            <p>HEALTHCARE</p>
            <h1>
              How can we harness data for healthcare and safegaurd ourselves
              from cyber threats?
            </h1>
            <p>
              The global healthcare data is expected to grow at a CAGR of 36% by
              2025. To make healthcare more equitable, affordable and
              accessible, there is a need to find ways to unite and generate
              actionable insights from data. How collaborations and strategic
              partnerships can harness the data to tackle the issues faced by
              the sector?
            </p>
            <p>
              <span className="card-date">{props.date}</span>
              <span className="middot">&middot;</span>
              <span className="card-author">{props.author}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VCCTV;
