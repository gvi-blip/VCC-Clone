import React, { useRef, useEffect, useCallback } from "react";
import Card from "./Card";
import Right from "./images/Right-arrow.svg";

function Slider(props) {
  const {
    titleAbbreviation,
    sliderClass,
    subscribeButton,
    crown,
    cards,
    cardClass,
    cardContClass,
  } = props;
  const handleResize = useCallback(() => {
    if (titleAbbreviation) {
      if (window.innerWidth < 576) {
        titleRef.current.style.display = "none";
      } else {
        titleRef.current.style.display = "block";
      }
    }
  }, [titleAbbreviation]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (titleAbbreviation && window.innerWidth < 576) {
      titleRef.current.classList.add("d-none");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, titleAbbreviation]);

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
    const m = rowRef.current.scrollWidth - rowRef.current.clientWidth;
    const scrollLeft = rowRef.current.scrollLeft;
    if (scrollLeft === 0) {
      leftBtn.current.style.display = "none";
      shadowRef.current.classList.remove("d-none");
    }
    if (scrollLeft > 0) {
      leftBtn.current.style.display = "block";
    }
    if (scrollLeft > 0 && scrollLeft < m) {
      rightBtn.current.style.display = "block";
      shadowRef.current.classList.remove("d-none");
    }

    if (Math.round(scrollLeft) === m) {
      rightBtn.current.style.display = "none";
      shadowRef.current.classList.add("d-none");
    }
  }
  const scroll = (scrollOffset) => {
    rowRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className={"slider-comp " + sliderClass}>
      <div className="container">
        <div className="title">
          <div style={{ display: "flex", alignItems: "center" }}>
            {titleAbbreviation ? (
              <h2 className="title-abv">{titleAbbreviation}</h2>
            ) : null}
            <h2
              style={{ marginRight: "10px" }}
              ref={titleRef}
              className="sect-title"
            >
              {props.sectionTitle}
            </h2>
            {crown ? (
              <img
                src={require("./images/Header/crown.png")}
                alt="Crown"
                height="24"
                width="24"
              />
            ) : null}
          </div>
          {subscribeButton ? (
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
          {cards.map((card) => {
            return (
              <Card
                cardClass={cardClass}
                image={card.image}
                title={card.title}
                author={card.author}
                date={card.date}
                content={card.content}
                premium={card.premium}
                cardContClass={cardContClass}
                address={card.address}
                eventDate={card.eventDate}
              />
            );
          })}
        </div>

        <button className="left-btn" onClick={() => scroll(-250)} ref={leftBtn}>
          <img
            src={require("./images/chevron-left.png")}
            alt="Left arrow"
          ></img>
        </button>
        <button
          className="right-btn"
          onClick={() => scroll(250)}
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
