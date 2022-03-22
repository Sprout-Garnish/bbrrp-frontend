import React from "react";
import Restaurant, { RestaurantItem } from "./Restaurant";

const { faker } = require("@faker-js/faker");
const mockData: RestaurantItem[] = new Array(20).fill(null).map((_, i) => ({
  id: String(i),
  name: faker.lorem.words(),
  briefIntro: faker.lorem.sentence(),
  category: "일식",
  location: "서울",
  mainImg: "randomImage",
}));

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
    <div className="container">
      <div className="main">{restaurantsToDisplay}</div>
    </div>
  );
};

export default Restaurants;
