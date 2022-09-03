import React, { useState } from "react";
import DetailImages from "@src/components/restaurant-detail/detail-images";
import DetailInfo from "@src/components/restaurant-detail/detail-info";
import "@src/components/restaurant-detail/detail-review";
import DetailReview from "@src/components/restaurant-detail/detail-review";

const Restaurants = () => {
  const [mockData, setMockData] = useState({
    restaurant: {
      id: "id2",
      images: null,
      location: "",
      name: "부대통령",
      description: "6000원 뚝배기 갓성비 식당",
      category: "한식",
      reservationPrice: 10000,
      info: "주차 가능",
      reviews: [],
    },
  });
  return (
    <>
      <DetailInfo {...mockData.restaurant} />
      <DetailImages images={mockData.restaurant.images ?? []} />
      <DetailReview reviews={mockData.restaurant.reviews ?? []} />
    </>
  );
};

export default Restaurants;
