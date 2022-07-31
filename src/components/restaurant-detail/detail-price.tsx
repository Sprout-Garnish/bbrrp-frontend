import { RestaurantQuery } from "@modules/client/graphql/generated/schema";
import React from "react";

type PDetailPrice = Pick<
  NonNullable<RestaurantQuery["restaurant"]>,
  "reservationPrice" | "id" | "info"
>;
const DetailPrice: React.FC<PDetailPrice> = ({ reservationPrice, info }) => {
  return (
    <div>
      <div>예약비용 : {reservationPrice}원</div>
      <span>{info}</span>
    </div>
  );
};

export default DetailPrice;
