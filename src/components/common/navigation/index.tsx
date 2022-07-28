import React from "react";
import {
  NavItemSection,
  NavBox,
  NavSection,
  MainTitleSection,
} from "./classed";
import NavItems from "./navsearchbox";
import NavMenus from "./navbutton";

const Navigation = () => {
  return (
    <NavBox className="h-25 py-5 bg-white flex-row">
      <NavItemSection>
        <NavMenus />
      </NavItemSection>
      <MainTitleSection>
        <h1 className="text-5xl Georgia text-center text-lemon">LEMON TABLE</h1>
        <h3 className="text-xl text-whitesmoke Avenir">
          RESTAURANT RESERVATIOM SITE
        </h3>
      </MainTitleSection>
      <NavSection>
        <NavItems />
      </NavSection>
    </NavBox>
  );
};

export default Navigation;
