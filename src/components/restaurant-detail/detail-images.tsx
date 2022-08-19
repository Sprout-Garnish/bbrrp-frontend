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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <p className="mx-2 text-3xl mt-5 text-black font-bold">메뉴</p>
        {images?.map((image, index) => (
          <DetailImage key={`DetailImage${index}`} {...image} />
        ))}
      </div>
    </>
  );
};

export default DetailImages;
