import React, { useState, useEffect } from "react";

interface propsType {
  id: number;
  name: string;
  stars: number;
  location: string;
  briefIntro: string;
  info: string;
  category: string;
  owner: string;
}

const DetailInfo = (props: propsType) => {
  const [name, setName] = useState("");
  const [stars, setStars] = useState(0);
  const [location, setLocation] = useState("");
  const [briefIntro, setBriefIntro] = useState("");
  const [info, setInfo] = useState("");
  const [category, setCategory] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    setName(props.name);
    setStars(props.stars);
    setLocation(props.location);
    setBriefIntro(props.briefIntro);
    setInfo(props.info);
    setCategory(props.category);
    setOwner(props.owner);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  // const ShowStars = () => {
  // https://devyeogoo.tistory.com/5
  // }

  // const Category = () => {
  //   return null;
  // };

  // 지도 API 사용하기(카카오 맵 API)
  // const Map = () => {

  // }

  return (
    <>
      <div className="detail-info-name">{name}</div>
      <div className="detail-info-stars">{stars}</div>
      <div className="detail-info-location">{location}</div>
      <div className="detail-info-breifInfo">{briefIntro}</div>
      <div className="detail-info-info">{info}</div>
      <div className="detail-info-category">{category}</div>
      <div className="detail-info-owner">{owner}</div>
    </>
  );
};

export default DetailInfo;
