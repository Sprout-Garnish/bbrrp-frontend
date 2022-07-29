import React from "react";
import type { NextPage } from "next";
import RestaurantCarousel from "@src/components/home/restaurant-carousel";
import RestaurantList from "@src/components/home/restaurant-list";
import LoginButton from "@src/components/common/loginButton";
import Sidebar from "@src/components/home/sidebar";
import Footer from "@src/components/common/footer";

const Home: NextPage = () => {
  return (
    <>
      <Sidebar />
      <div className="fixed bottom-20 left-20">
        <LoginButton /> {/*개발용 로그인 버튼*/}
      </div>
      <RestaurantCarousel />
      <RestaurantList />
      <Footer />
    </>
  );
};

export default Home;
