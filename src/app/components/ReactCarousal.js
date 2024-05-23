import React, { useState } from "react";

const ReactCarousel = ({ data, bannerOuterDivClss, bannerImgClass }) => {
  const [acIndex, setIndex] = useState(0);

  const handleClick = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const onClickPrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const onClickNext = () => {
    setIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        {data.map((img, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === acIndex ? "active" : ""}
            aria-current={index === acIndex ? "true" : ""}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleClick(index)}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {data.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${bannerOuterDivClss} ${
              index === acIndex ? "active" : ""
            }`}
          >
            <img
              src={img.imgeSrc}
              className={`d-block w-100 ${bannerImgClass}`}
              alt={img.alt}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={onClickPrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={onClickNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ReactCarousel;
