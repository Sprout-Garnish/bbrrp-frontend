import React from "react";

interface propsType {
  id: number;
  reservation_price: number;
  info: string;
}

const DetailPrice = (props: propsType) => {
  const reservation_price = props.reservation_price;
  const info = props.info;

  return (
    <>
      <div>
        <div>예약비용 : {reservation_price}원</div>
        <span>{info}</span>
      </div>
    </>
  );
};

export default DetailPrice;
