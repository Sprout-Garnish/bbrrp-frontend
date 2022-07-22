import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

// https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

export const CarouselItem = ({ children, width }) => {
  return (
    <div
      className="inline-flex items-center justify-center bg-white decoration-white"
      style={{ width: width }}
    >
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <>
      {" "}
      <div
        {...handlers}
        className="overflow-hidden relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex justify-center">
          <button
            className="btn btn-circle btn-outline absolute z-10 left-10 top-1/2"
            style={{}}
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            ❮
          </button>
          <button
            className="btn btn-circle btn-outline absolute z-10 right-10 top-1/2"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            ❯
          </button>
        </div>
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              width: "100%",
            });
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
