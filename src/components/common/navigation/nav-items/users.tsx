import Link from "next/link";
import React from "react";
import { Button } from "../classed";

const UserNavItems = () => {
  return (
    <>
      <Link href="/">
        <Button onClick={() => console.log("알림")}>알림</Button>
      </Link>
      <Link href="/">
        <Button onClick={() => console.log("환경설정")}>환경설정</Button>
      </Link>
    </>
  );
};

export default UserNavItems;
