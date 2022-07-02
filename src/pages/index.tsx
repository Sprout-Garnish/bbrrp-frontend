import React from "react";
import type { NextPage } from "next";
import RestaurantList from "@src/components/home/restaurant-list";
import LoginButton from "@src/components/common/loginButton";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <LoginButton />
      </div>
      <RestaurantList />
    </>
  );
};

export default Home;
