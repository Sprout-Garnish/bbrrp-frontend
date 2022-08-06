import { RestaurantsQuery } from "@modules/client/graphql/generated/schema";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Flex from "../common/flex";

const __restaurantList: RestaurantsQuery["restaurants"] = [];
const __restaurantImage: PRestaurantItem["images"] = [];

type PRestaurantItem = typeof __restaurantList[number];
type RestaurantImage = typeof __restaurantImage[number];

const getImageURL = (images: RestaurantImage[]): string => {
  let imageURL: string = "/bistro.jpg";
  images.forEach((image) => {
    imageURL = image.image?.url || imageURL;
  });
  return imageURL;
};

//별점이 없다 ㅠㅠㅠㅠ
const RestaurantItem: React.FC<PRestaurantItem> = ({
  name,
  category,
  images,
  id,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/restaurants/${id}`)}
      className="flex flex-col w-52 h-60 shadow-xl rounded-md m-4"
      style={{ display: "flex" }}
    >
      <div style={{ flex: 5 }}>
        <Image
          src={getImageURL(images as RestaurantImage[])}
          width={200}
          height={200}
          layout="fixed"
        />
      </div>
      <div
        style={{ flex: 1, display: "flex", marginLeft: "auto" }}
        className="bg-lemon w-full text-black"
      >
        <div style={{ flex: 4 }}>
          <h4>{name}</h4>
          <h6>
            {/** @prop {string} info address로 바꿀 필요가 있음  */}
            {"(" + category + ")"}
          </h6>
        </div>
        <div style={{ flex: 1 }}>
          <h6>4.5</h6>
        </div>
      </div>
    </button>
  );
};

export default RestaurantItem;
