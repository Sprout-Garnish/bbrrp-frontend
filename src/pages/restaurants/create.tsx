import React from "react";
import CreateRestaurant from "../../components/restaurant-create/index";

const createRestaurantPage = () => {
  return (
    <>
      <div className="w-full bg-white">
        <CreateRestaurant isUpdating={false} />
      </div>
    </>
  );
};

export default createRestaurantPage;
