import { RestaurantQuery } from "@modules/client/graphql/generated/schema";
import React from "react";
import DetailImage from "./detail-image";

const __restaurant: Partial<RestaurantQuery["restaurant"]> = {};
type Images = typeof __restaurant["images"];

interface PDetailImages {
  images: Images;
}

const DetailImages: React.FC<PDetailImages> = ({ images }) => {
  return (
    <>
      {images?.map((image, index) => (
        <DetailImage key={`DetailImage${index}`} {...image} />
      ))}
    </>
  );
};

export default DetailImages;
