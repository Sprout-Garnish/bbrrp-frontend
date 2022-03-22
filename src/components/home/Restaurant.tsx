import Image from "next/image";
import React from "react";

type RestaurantCategory = "일식" | "양식" | "중식" | "한식";

export interface RestaurantItem {
  id: string; //기본키
  name: string; //식당 이름
  briefIntro: string; //한 줄 소개
  category: RestaurantCategory; //식당 종류
  location: string; //식당 위치
  mainImg: string; //대표 이미지
}

const Restaurant: React.FC<RestaurantItem> = ({
  name,
  briefIntro,
  category,
  location,
}) => {
  return (
    <div>
      <div className="imageBox">
        <Image src="/bistro.jpg" width={200} height={200} layout="fixed" />
      </div>
      <div className="infoBox">
        <h4>{name}</h4>
        <h6>
          {category} | {location}
        </h6>
        <p>
          {briefIntro.length <= 200 ? briefIntro : briefIntro.slice(0, 200)}
        </p>
      </div>
    </div>
  );
};

export default Restaurant;
