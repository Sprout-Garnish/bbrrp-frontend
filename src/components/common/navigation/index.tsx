import { undefinedIfFalsy } from "@src/utilities/null-safety";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { IconSection, NavBox, NavSection } from "./classed";
import NavItems from "./nav-items";
import SearchSection from "./search-section";

const Navigation = () => {
  const router = useRouter();
  const isMyPage = router.pathname.startsWith("/users");
  return (
    <NavBox>
      <IconSection flex={undefinedIfFalsy(isMyPage, 1)}>
        <Image src="/vercel.svg" width={50} height={30} layout="fixed" />
      </IconSection>
      {isMyPage && <SearchSection />}
      <NavSection flex={undefinedIfFalsy(isMyPage, 4)}>
        <NavItems />
      </NavSection>
    </NavBox>
  );
};

export default Navigation;
