import React from "react";
import { useRouter } from "next/router";
import HomeNavItems from "./home";
import UserNavItems from "./users";
import RestaurantNavItems from "./restaurants";

const NavItems = () => {
  const router = useRouter();
  if (router.pathname === "/") {
    return <HomeNavItems />;
  }
  if (router.pathname.startsWith("/users")) {
    return <UserNavItems />;
  }
  if (router.pathname.startsWith("/restaurants")) {
    return <RestaurantNavItems />;
  }
  return <></>;
};

export default NavItems;
