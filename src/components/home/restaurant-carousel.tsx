import Carousel, { CarouselItem } from "../common/carousel";
import React from "react";

const RestaurantCarousel = () => {
  return (
    <>
      <Carousel>
        <CarouselItem>
          <img src="/carousel-img.jpg" className="min-w-full"></img>
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://picsum.photos/800/250?random=2"
            className="min-w-full"
          ></img>
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://picsum.photos/800/250?random=3"
            className="min-w-full"
          ></img>
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default RestaurantCarousel;
