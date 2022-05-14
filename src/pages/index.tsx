import React from "react";
import type { NextPage } from "next";
import RestaurantCarousel from "@src/components/home/restaurant-carousel";
import RestaurantList from "@src/components/home/restaurant-list";

const Home: NextPage = () => {
  return (
    <>
      <RestaurantCarousel />
      <RestaurantList />
    </>
  );
};

export default Home;
