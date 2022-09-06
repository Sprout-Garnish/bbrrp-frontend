import { RestaurantQuery } from "@modules/client/graphql/generated/schema";
import React from "react";
import emptyStar from "../../../public/emptyStar.png";
import filledStar from "../../../public/filledStar.png";
type PDetailInfo = Pick<
  NonNullable<RestaurantQuery["restaurant"]>,
  "name" | "location" | "description" | "category" | "id" | "reservationPrice"
>;

const DetailInfo: React.FC<PDetailInfo> = ({
  id,
  name,
  category,
  reservationPrice,
}) => {
  return (
    <>
      <div className="text-black flex flex-row mx-2">
        <div className="flex flex-row w-6/12 items-end">
          <h2 className="text-3xl font-bold">{name}</h2>
          <h4 className="text-sm font-bold">{id}</h4>
          <div className="text-lg font-bold mx-16 flex flex-row ">
            <p className="items-center justify-center">별점</p>
            {/* 로직 작성할 것 */}
            {[1, 1, 1, 1, 0].map((num) => {
              if (num) {
                return <img className="w-8 h-8 mx-1" src={filledStar.src} />;
              } else {
                return <img className="w-8 h-8 mx-1" src={emptyStar.src} />;
              }
            })}
            <p className="items-center justify-center">(1)</p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end">
          <button
            type="button"
            className="btn w-30 border-lemon bg-lemon text-black text-bold text-xl"
            onClick={() => alert("예약하기")}
          >
            예약하기
          </button>
        </div>
      </div>
      {/*여기 위까지가 예약하기 버튼 위*/}
      <div className="text-black w-full h-full flex flex-col mx-2">
        <p className=" mt-2 text-sm font-bold">{category}</p>
        <p className=" mt-2 text-sm font-bold">
          예약가격 {reservationPrice} 평균메뉴가격 5000
        </p>
      </div>
    </>
  );
};

export default DetailInfo;
