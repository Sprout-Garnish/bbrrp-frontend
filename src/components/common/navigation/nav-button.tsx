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
        className="Georgia text-lg xl:text-xl text-khaki bg-white px-6 xl:px-8 py-4 cursor-pointer"
      >
        {title}
      </div>
    </Link>
  );
};

const NavMenus: React.FC = () => {
  return (
    <>
      <NavMenu title="Product" />
      <NavMenu title="Introduce" />
      <NavMenu title="Image" />
    </>
  );
};

export default NavMenus;
