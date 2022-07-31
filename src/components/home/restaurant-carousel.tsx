import Carousel, { CarouselItem } from "../common/carousel";
import React from "react";

const RestaurantCarousel = () => {
  const images = [
    "/carousel-img.jpg",
    "https://picsum.photos/800/250?random=2",
    "https://picsum.photos/800/250?random=3",
  ];
  return (
    <Carousel>
      {images.map((src, index) => (
        <CarouselItem
          key={`CarouselItem${index}`}
          order={index + 1}
          src={src}
        />
      ))}
    </Carousel>
  );
};

export default RestaurantCarousel;
