import React, { useRef } from "react";
import Card from "./Card";
import Right from "./images/Right-arrow.svg";

function Slider(props) {
  const rowRef = useRef(null);
  // const handleClick = (direction: any) => {
  //   if (rowRef.current) {
  //     const { scrollLeft, clientWidth } = rowRef.current;

  //     const scrollTo =
  //       direction === 1 ? scrollLeft - clientWidth : scrollLeft + clientWidth;
  //     rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  //   }
  // };

  const scroll = (scrollOffset) => {
    rowRef.current.scrollLeft += scrollOffset;
  };
  return (
    <div className={"slider-comp " + props.class}>
      <div className="container">
        <div className="title">
          <h2>{props.sectionTitle}</h2>
          <p className="mts">
            View More{" "}
            <i
              className="fa-solid fa-chevron-right"
              style={{ fontSize: "12px" }}
            ></i>
          </p>
        </div>
        <div className="cards" ref={rowRef}>
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
        {/* <div onClick={() => scroll(350)}>lhjgjkjgklkjn</div> */}
        {/* <button>
          <img src={Right} alt="Right arrow"></img>
        </button> */}
        <button className="right-btn">
          <img src={Right} alt="Right arrow"></img>
        </button>
        <div className="shadow"></div>
      </div>
    </div>
  );
}

export default Slider;
