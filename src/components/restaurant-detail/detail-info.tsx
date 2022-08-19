import { RestaurantQuery } from "@modules/client/graphql/generated/schema";
import React from "react";

type PDetailInfo = Pick<
  NonNullable<RestaurantQuery["restaurant"]>,
  "name" | "location" | "description" | "category" | "id" | "reservationPrice"
>;

const DetailInfo: React.FC<PDetailInfo> = ({
  id,
  name,
  description,
  category,
  reservationPrice,
}) => {
  //지도 API
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          width: "100%",
          height: "100%",
        }}
        className="text-black"
      >
        <div style={{ flex: 1.3, flexDirection: "row", display: "flex" }}>
          <h2 className="text-6xl mx-2 font-bold">{name}</h2>
          <h4 className="text-4xl mx-2">{id}</h4>
          <div style={{ display: "flex" }} className="text-4xl mx-16">
            <p>별점</p>
            <p>* * * * *</p>
            <p>(인원)</p>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: "column",
            display: "flex",
            justifyContent: "flex-start",
            height: "100%",
          }}
        >
          <button
            type="button"
            className="btn btn-wide border-lemon bg-lemon text-black text-bold text-2xl"
            onClick={() => alert("예약하기")}
          >
            예약하기
          </button>
        </div>
      </div>
      <div
        className="text-black"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className="mx-2 mt-8 text-3xl">
          {category} | {description}
        </p>
      </div>
      <div
        className="text-black"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className="mx-2 mt-8 text-3xl">
          예약가격: {reservationPrice} | 평균메뉴가격: 10000원
        </p>
      </div>
    </>
  );
};

export default DetailInfo;
