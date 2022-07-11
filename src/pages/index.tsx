import React from "react";
import type { NextPage } from "next";
import RestaurantCarousel from "@src/components/home/restaurant-carousel";
import RestaurantList from "@src/components/home/restaurant-list";
import LoginButton from "@src/components/common/loginButton";
import Sidebar from "@src/components/home/sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Sidebar />
      <div>
        <LoginButton />
      </div>
      <RestaurantCarousel />
      <RestaurantList />
    </>
  );
};

export default Home;
