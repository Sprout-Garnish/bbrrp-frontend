import { RestaurantsQuery } from "@modules/client/graphql/generated/schema";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

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

const RestaurantItem: React.FC<PRestaurantItem> = ({
  name,
  description,
  category,
  info,
  images,
  id,
}) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(`/restaurants/${id}`)}>
      <div className="imageBox">
        <Image
          src={getImageURL(images as RestaurantImage[])}
          width={200}
          height={200}
          layout="fixed"
        />
      </div>
      <div className="infoBox">
        <h4>{name}</h4>
        <h6>
          {/** @prop {string} info address로 바꿀 필요가 있음  */}
          {category} | {info}
        </h6>
        <p>{!!description && description.truncate(200)}</p>
      </div>
    </button>
  );
};

export default RestaurantItem;
