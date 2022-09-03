import React from "react";
import { RestaurantQuery } from "@modules/client/graphql/generated/schema";

const __restaurant: Partial<RestaurantQuery["restaurant"]> = {};
type Location = typeof __restaurant["location"];

interface DetailLocationProps {
  location: Location;
}

const DetailLocation: React.FC<DetailLocationProps> = ({ location }) => {
  return (
    <>
      <p className="text-black mx-2 mt-2 font-bold text-xl">위치</p>
      <div className="flex flex-col w-64 h-20 mx-2 mt-2 bg-lemon">
        <p>위도: {location?.lat}</p>
        <p>경도: {location?.lng}</p>
      </div>
    </>
  );
};

export default DetailLocation;
