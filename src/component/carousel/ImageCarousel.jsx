import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./image.css";

const ImageCarousel = ({img}) => {
  return (
    <div className="">
      <Carousel infiniteLoop autoPlay>
        {img.map((img, key) => (
          <div className="image" key={key}>
            <img src={img} alt="carousel" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
