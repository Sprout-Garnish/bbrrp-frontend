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
      <p className="mx-2 text-xl my-2 text-black font-bold">메뉴</p>
      <div className="flex flex-row">
        <div className="flex flex-row">
          {images?.map((image, index) => (
            <DetailImage key={`DetailImage${index}`} {...image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailImages;
