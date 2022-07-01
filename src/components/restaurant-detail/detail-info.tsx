import React from "react";

interface propsType {
  id: number;
  name: string;
  description: string;
  location_raw: string;
  category: string;
  owner: string;
}

const DetailInfo = (props: propsType) => {
  // const Category = () => {
  //   return null;
  // };

  // 지도 API 사용하기(카카오 맵 API)
  // const Map = () => {

  // }

  return (
    <>
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div>{props.category}</div>
    </>
  );
};

export default DetailInfo;
