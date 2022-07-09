import Carousel, { CarouselItem } from "../common/carousel";

const RestaurantCarousel = () => {
  return (
    <>
      <Carousel>
        <CarouselItem>
          <img src="https://picsum.photos/200/300?random=1"></img>
        </CarouselItem>
        <CarouselItem>
          <img src="https://picsum.photos/200/300?random=2"></img>
        </CarouselItem>
        <CarouselItem>
          <img src="https://picsum.photos/200/300?random=3"></img>
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default RestaurantCarousel;
