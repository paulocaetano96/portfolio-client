import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

function Slider({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log("selectedIndex: ", selectedIndex, "--------------------");
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.image} interval={slide.interval}>
          <img
            className="size"
            src={slide.image}
            alt="Award Cerimony after completing bachelor's degree"
          />
          <Carousel.Caption className="caption">
            <h3>{slide.title}</h3>
            <p>{slide.subTitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
