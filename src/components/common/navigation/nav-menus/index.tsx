import React from "react";
import Link from "next/link";

interface NavMenuProps {
  title: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ title }) => {
  return (
    <Link href="/">
      <div
        onClick={() => alert("해당 페이지로 이동합니다.")}
        className=" Avenir text-4xl bg-white px-8 py-8"
      >
        {title}
      </div>
    </Link>
  );
};

const NavMenus: React.FC = () => {
  return (
    <>
      {["Product", "Introduce", "Image"].map((item) => (
        <NavMenu title={item} />
      ))}
    </>
  );
};

export default NavMenus;
