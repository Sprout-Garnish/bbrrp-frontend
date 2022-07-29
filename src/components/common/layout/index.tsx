import React from "react";
import classed from "clsc";
import Navigation from "../navigation";
import Footer from "../footer";

const RootContainer = classed.div`flex flex-col justify-start items-center w-screen`;

const Layout: React.FC = ({ children }) => {
  return (
    <RootContainer>
      <Navigation />
      {children}
    </RootContainer>
  );
};

export default Layout;
