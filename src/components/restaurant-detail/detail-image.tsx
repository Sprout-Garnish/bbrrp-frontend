import { RestaurantQuery } from "@modules/client/graphql/generated/schema";
import React from "react";

const __restaurant: Partial<RestaurantQuery["restaurant"]> = {};
type Images = NonNullable<typeof __restaurant["images"]>;
type PDetailImage = Images[0];

const DetailImage: React.FC<PDetailImage> = ({ image, name, description }) => {
  return (
    <div>
      <div>
        <img src={image?.url} />
      </div>
      <span>{name}</span>
      <span>{description}</span>
    </div>
  );
};

export default DetailImage;
