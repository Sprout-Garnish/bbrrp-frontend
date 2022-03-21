import React from "react";
import Restaurant from "./restaurant";
import { RestaurantItem } from "./restaurant";

const { faker } = require("@faker-js/faker");
const mockData: RestaurantItem[] = [];

const fillMockData = () => {
  let i: number = 1;
  while (i <= 20) {
    const data: RestaurantItem = {
      id: String(i),
      name: faker.lorem.words(),
      briefIntro: faker.lorem.sentence(),
      category: "일식",
      location: "서울",
      mainImg: "randomImage",
    };
    mockData.push(data);
    i++;
  }
};

fillMockData();

const Restaurants: React.FC = () => {
  const restaurantsToDisplay = mockData.map((item) => (
    <Restaurant
      id={item.id}
      name={item.name}
      briefIntro={item.briefIntro}
      category={item.category}
      location={item.location}
      mainImg={item.mainImg}
    />
  ));
  return (
    <>
      <div className="main">{restaurantsToDisplay}</div>
    </>
  );
};

export default Restaurants;
