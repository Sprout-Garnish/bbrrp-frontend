import React from "react";
import {
  NavItemSection,
  NavBox,
  NavSection,
  MainTitleSection,
} from "./classed";
import NavItems from "./nav-search-box";
import NavMenus from "./nav-button";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <NavBox>
      <NavItemSection>
        <NavMenus />
      </NavItemSection>
      <MainTitleSection
        onClick={() => router.push("/")}
        className="cursor-pointer"
      >
        <h1 className="text-3xl xl:text-4xl Georgia text-center text-lemon">
          LEMON TABLE
        </h1>
        <h3 className="text-md xl:text-xl text-whitesmoke Avenir">
          RESTAURANT RESERVATION SITE
        </h3>
      </MainTitleSection>
      <NavSection>
        <NavItems />
      </NavSection>
    </NavBox>
  );
};

export default Navigation;
