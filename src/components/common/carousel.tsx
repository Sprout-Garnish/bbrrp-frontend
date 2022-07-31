import React from "react";

// https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

interface PCarouselItem {
  src: string;
  order: number;
}

export const CarouselItem: React.FC<PCarouselItem> = ({ src, order }) => {
  return (
    <div id={`slide${order}`} className="carousel-item relative w-full">
      <img src={src} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${order - 1}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${order + 1}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

const Carousel: React.FC = ({ children }) => {
  return <div className="carousel w-full">{children}</div>;
};

export default Carousel;
