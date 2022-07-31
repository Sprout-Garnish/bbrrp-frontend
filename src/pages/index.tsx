import React from "react";
import type { NextPage } from "next";
import RestaurantCarousel from "@src/components/home/restaurant-carousel";
import RestaurantList from "@src/components/home/restaurant-list";
import LoginButton from "@src/components/common/login-button";
import Sidebar from "@src/components/home/sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Sidebar />
      <div className="fixed bottom-20 left-20 z-10">
        <LoginButton /> {/*개발용 로그인 버튼*/}
      </div>
      <RestaurantCarousel />
      <RestaurantList />
    </>
  );
};

export default Home;
