import Link from "next/link";
import React from "react";
import { Button } from "../classed";

const RestaurantNavItems = () => {
  return (
    <>
      <button onClick={() => alert("스크랩 되었습니다.")}>스크랩하기</button>
      <Link href="/">
        <Button onClick={() => alert("마이 페이지로 이동")}>예약하기</Button>
      </Link>
    </>
  );
};

export default RestaurantNavItems;
