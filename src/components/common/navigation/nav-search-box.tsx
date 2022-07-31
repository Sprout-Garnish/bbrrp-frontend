import React, { useState } from "react";
import Image from "next/image";

const NavItems = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <>
      <form className="pt-3">
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className="mx-4 outline-none border-b-2 border-lemon w-48  xl:w-64 h-auto bg-white text-lg text-khaki"
        />
      </form>
      <Image
        src="/search.png"
        width={25}
        height={25}
        layout="fixed"
        className="cursor-pointer"
        onClick={() => alert("검색을 진행합니다.")}
      />
    </>
  );
};

export default NavItems;
