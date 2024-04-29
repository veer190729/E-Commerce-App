import React from "react";
import "./Carousel.css";
import { useCarousel } from "./CarouselLogic";

export const Carousel = ({ images }) => {
  const { currentIndex, goToPrevSlide, goToSlide, goToNextSlide } = useCarousel(images);

  return (
    <div className="carousel-container">
      <button className="arrow prev" onClick={goToPrevSlide}>
        &lt;
      </button>
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className={index === currentIndex ? "slide active" : "slide"}
          />
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      <button className="arrow next" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};