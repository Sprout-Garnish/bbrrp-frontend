import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../classed";

const HomeNavItems = () => {
  return (
    <>
      <Link href="/">
        <Button onClick={() => alert("알림 보기 화면으로 이동합니다.")}>
          <Image src="/alarm.webp" width={30} height={30} layout="fixed" />
        </Button>
      </Link>
      <Link href="/">
        <Button onClick={() => alert("마이 페이지로 이동합니다.")}>
          <Image src="/person.png" width={30} height={30} layout="fixed" />
        </Button>
      </Link>
    </>
  );
};

export default HomeNavItems;
