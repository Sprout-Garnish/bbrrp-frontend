import React, { useState } from "react";
import Image from "next/image";

const NavItems = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <>
      <form className="mx-4 py-5">
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className=" outline-none border-b-2 border-lemon w-64 h-auto bg-white text-lg text-khaki"
        />
      </form>
      <Image
        src="/search.png"
        width={25}
        height={25}
        layout="fixed"
        onClick={() => alert("검색을 진행합니다.")}
      />
    </>
  );
};

export default NavItems;
