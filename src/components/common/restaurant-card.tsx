import { RestaurantQuery } from "@modules/client/graphql/generated/schema";
import React from "react";
import Flex from "./flex";

type PRestaurantCard = RestaurantQuery["restaurant"];

const RestaurantCard: React.FC<PRestaurantCard> = ({
  images,
  name,
  category,
}) => {
  return (
    <div className="flex flex-col w-52 h-60 shadow-xl rounded-md m-4">
      <Flex flex={5}>
        {images?.map(
          (image, index) =>
            image.image?.url && (
              <img src={image.image?.url} key={`RestaurantCardImage${index}`} />
            )
        )}
      </Flex>
      <Flex flex={1}>
        <div className="px-5 text-black text-left">
          <span className="font-semibold text-3xl">{name}</span>
          <br />
          <span>{category}</span>
        </div>
      </Flex>
    </div>
  );
};

export default RestaurantCard;
