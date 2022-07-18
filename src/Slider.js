import React, { useRef, useEffect, useCallback } from "react";
import Card from "./Card";
import Right from "./images/Right-arrow.svg";

function Slider(props) {
  const handleResize = useCallback(() => {
    if (props.titleAbbreviation) {
      if (window.innerWidth < 576) {
        titleRef.current.style.display = "none";
      } else {
        titleRef.current.style.display = "block";
      }
    }
  }, [props.titleAbbreviation]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (props.titleAbbreviation && window.innerWidth < 576) {
      titleRef.current.classList.add("d-none");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, props.titleAbbreviation]);

  const titleRef = useRef();
  const rightBtn = useRef();
  const leftBtn = useRef();
  const shadowRef = useRef();
  const rowRef = useRef();
  // const m = rowRef.current.scrollWidth - rowRef.current.clientWidth;
  // console.log("m:" + m);
  // const handleClick = (direction: any) => {
  //   if (rowRef.current) {
  //     const { scrollLeft, clientWidth } = rowRef.current;

  //     const scrollTo =
  //       direction === 1 ? scrollLeft - clientWidth : scrollLeft + clientWidth;
  //     rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  //   }
  // };

  function btnsDisplay() {
    let m = rowRef.current.scrollWidth - rowRef.current.clientWidth;
    if (rowRef.current.scrollLeft === 0) {
      leftBtn.current.style.display = "none";
      shadowRef.current.classList.remove("d-none");
    }
    if (rowRef.current.scrollLeft > 0) {
      leftBtn.current.style.display = "block";
    }
    if (rowRef.current.scrollLeft > 0 && rowRef.current.scrollLeft < m) {
      rightBtn.current.style.display = "block";
      shadowRef.current.classList.remove("d-none");
    }

    if (Math.round(rowRef.current.scrollLeft) === m) {
      rightBtn.current.style.display = "none";
      console.log(shadowRef.current);
      shadowRef.current.classList.add("d-none");
    }
  }
  const scroll = (scrollOffset) => {
    rowRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className={"slider-comp " + props.class}>
      <div className="container">
        <div className="title">
          <div style={{ display: "flex", alignItems: "center" }}>
            {props.titleAbbreviation ? (
              <h2 className="title-abv">{props.titleAbbreviation}</h2>
            ) : null}
            <h2
              style={{ marginRight: "10px" }}
              ref={titleRef}
              className="sect-title"
            >
              {props.sectionTitle}
            </h2>
            {props.crown ? (
              <img
                src={require("./images/Header/crown.png")}
                alt="Crown"
                height="24"
                width="24"
              />
            ) : null}
          </div>
          {props.subscribeButton ? (
            <button>SUBSCRIBE</button>
          ) : (
            <p className="mts">
              View More{" "}
              <i
                className="fa-solid fa-chevron-right"
                style={{ fontSize: "12px" }}
              ></i>
            </p>
          )}
        </div>
        <div
          className="cards"
          ref={rowRef}
          onScroll={() => {
            if (window.innerWidth > 576) {
              btnsDisplay();
            }
          }}
        >
          {props.cards.map((card) => {
            return (
              <Card
                class={props.cardClass}
                image={card.image}
                title={card.title}
                author={card.author}
                date={card.date}
                content={card.content}
                premium={card.premium}
                cardContClass={props.cardContClass}
                address={card.address}
                eventDate={card.eventDate}
              />
            );
          })}
        </div>
        {/* <div onClick={() => scroll(350)}>lhjgjkjgklkjn</div> */}
        {/* <button>
          <img src={Right} alt="Right arrow"></img>
        </button> */}
        <button className="left-btn" onClick={() => scroll(-350)} ref={leftBtn}>
          <img
            src={require("./images/chevron-left.png")}
            alt="Left arrow"
          ></img>
        </button>
        <button
          className="right-btn"
          onClick={() => scroll(350)}
          ref={rightBtn}
        >
          <img src={Right} alt="Right arrow"></img>
        </button>
        <div className="shadow" ref={shadowRef}></div>
      </div>
    </div>
  );
}

export default Slider;
