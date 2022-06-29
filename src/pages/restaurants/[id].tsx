import React from "react";
import "@src/components/restaurant-detail/detail-images";
import DetailInfo from "@src/components/restaurant-detail/detail-info";
import DetailPrice from "@src/components/restaurant-detail/detail-price";
import "@src/components/restaurant-detail/detail-bookbutton";
import "@src/components/restaurant-detail/detail-menu";
import "@src/components/restaurant-detail/detail-review";
import { faker } from "@faker-js/faker";

const mockData = {
  id: 1,
  mainImg: <img src={require("https://picsum.photos/200")} />,
  name: faker.lorem.words(),
  stars: Math.floor(Math.random() * 5),
  location: "서울",
  briefIntro: faker.lorem.sentence(),
  info: faker.lorem.sentence(),
  category: "일식",
  owner: "김만덕",
  bookPrice: 10000,
  meanPrice: 10000,
  menu: ["피자", "떡볶이"],
  review: ["리뷰1", "리뷰2"],
};

const RestaurantDetail = () => {
  console.log(mockData.id);
  return (
    <>
      <DetailInfo
        id={mockData.id}
        name={mockData.name}
        stars={mockData.stars}
        location={mockData.location}
        briefIntro={mockData.briefIntro}
        info={mockData.info}
        category={mockData.category}
        owner={mockData.owner}
      ></DetailInfo>
      <DetailPrice
        id={mockData.id}
        bookPrice={mockData.bookPrice}
        meanPrice={mockData.meanPrice}
      ></DetailPrice>
    </>
  );
};

export default RestaurantDetail;
