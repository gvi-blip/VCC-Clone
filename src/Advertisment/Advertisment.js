import React from "react";

function Advertisment(props) {
  return (
    <div className={`adv ${props.adclass}`}>
      <p>Advertisment</p>
      <img
        src={require(`${props.image}`)}
        alt="Ad Img"
        style={{ marginTop: "10px" }}
        height={`${props.height ? props.height : ""}`}
        width={`${props.width ? props.width : ""}`}
      ></img>
    </div>
  );
}

export default Advertisment;
