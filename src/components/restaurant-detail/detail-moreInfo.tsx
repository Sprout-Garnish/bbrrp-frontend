import React from "react";
import { RestaurantQuery } from "@modules/client/graphql/generated/schema";

const __restaurant: Partial<RestaurantQuery["restaurant"]> = {};
type Info = typeof __restaurant["info"];

interface DetailMoreInfoProps {
  info: Info;
}

const DetailMoreInfo: React.FC<DetailMoreInfoProps> = ({ info }) => {
  return (
    <>
      <div className="mx-2 mt-2">
        <h2 className="text-xl font-bold text-black">상세정보</h2>
        <p>{info}</p>
      </div>
    </>
  );
};

export default DetailMoreInfo;
