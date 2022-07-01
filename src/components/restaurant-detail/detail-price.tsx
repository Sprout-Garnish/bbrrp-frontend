import React, { useState, useEffect } from "react";

interface propsType {
  id: number;
  reservation_price: number;
  info: string;
}

const DetailPrice = (props: propsType) => {
  const ShowBookPrice = () => {
    return <div></div>;
  };

  const ShowMeanPrice = () => {
    return <div></div>;
  };

  return (
    <>
      <ShowBookPrice />
      <ShowMeanPrice />
    </>
  );
};

export default DetailPrice;
