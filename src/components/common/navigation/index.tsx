import { undefinedIfFalsy } from "@src/utilities/null-safety";
import { useRouter } from "next/router";
import React from "react";
import {
  NavItemSection,
  NavBox,
  NavSection,
  MainTitleSection,
} from "./classed";
import NavItems from "./nav-items";
import NavMenus from "./nav-menus";
import SearchSection from "./search-section";

const Navigation = () => {
  const router = useRouter();
  const isMyPage = router.pathname.startsWith("/users");
  return (
    <NavBox className="h-25 py-5 bg-white flex-row justify-center">
      <NavItemSection flex={undefinedIfFalsy(isMyPage, 1)}>
        <NavMenus />
      </NavItemSection>
      {isMyPage && <SearchSection />}
      <MainTitleSection flex={undefinedIfFalsy(isMyPage, 1)}>
        <h1 className="text-5xl Georgia text-center text-lemon">LEMON TABLE</h1>
        <h3 className="text-xl text-whitesmoke Avenir">
          RESTAURANT RESERVATIOM SITE
        </h3>
      </MainTitleSection>
      <NavSection flex={undefinedIfFalsy(isMyPage, 1)}>
        <NavItems />
      </NavSection>
    </NavBox>
  );
};

export default Navigation;
