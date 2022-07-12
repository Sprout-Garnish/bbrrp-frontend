import React from "react";
import type { NextPage } from "next";
import RestaurantCarousel from "@src/components/home/restaurant-carousel";
import RestaurantList from "@src/components/home/restaurant-list";
import LoginButton from "@src/components/common/loginButton";

const Home: NextPage = () => {
  return (
    <>
      <div className="fixed bottom-20 left-20">
        <LoginButton /> {/*개발용 로그인 버튼*/}
      </div>
      <RestaurantCarousel />
      <RestaurantList />
    </>
  );
};

export default Home;
