import { RestaurantQuery } from "@modules/client/graphql/generated/schema";
import React from "react";

const __restaurant: Partial<RestaurantQuery["restaurant"]> = {};
type Images = NonNullable<typeof __restaurant["images"]>;
type PDetailImage = Images[0];

const DetailImage: React.FC<PDetailImage> = ({ image }) => {
  return (
    <div>
      <img src={image?.url} className="mx-2 w-40 h-28 rounded-md" />
    </div>
  );
};

export default DetailImage;
