import { RestaurantQuery } from "@modules/client/graphql/generated/schema";
import React from "react";

type PDetailInfo = Pick<
  NonNullable<RestaurantQuery["restaurant"]>,
  "name" | "location" | "description" | "category"
>;

const DetailInfo: React.FC<PDetailInfo> = ({
  name,
  location,
  description,
  category,
}) => {
  // const Category = () => {
  //   return null;
  // };

  // 지도 API 사용하기(카카오 맵 API)
  // const Map = () => {

  // }

  return (
    <>
      <div>{name}</div>
      <div>
        {/* 주소로 바꿔야함 */}
        {location?.lat} | {location?.lng}
      </div>
      <div>{description}</div>
      <div>{category}</div>
    </>
  );
};

export default DetailInfo;
