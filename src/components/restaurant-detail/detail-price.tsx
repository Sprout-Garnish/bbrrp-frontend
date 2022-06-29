import React, { useState, useEffect } from "react";

interface propsType {
  id: number;
  bookPrice: number;
  meanPrice: number;
}

const DetailPrice = (props: propsType) => {
  const [bookPrice, setBookPrice] = useState(0);
  const [meanPrice, setMeanPrice] = useState(0);

  useEffect(() => {
    setBookPrice(props.bookPrice);
    setMeanPrice(props.meanPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  const ShowBookPrice = () => {
    return <div>{bookPrice}</div>;
  };

  const ShowMeanPrice = () => {
    return <div>{meanPrice}</div>;
  };

  return (
    <>
      <ShowBookPrice />
      <ShowMeanPrice />
    </>
  );
};

export default DetailPrice;
