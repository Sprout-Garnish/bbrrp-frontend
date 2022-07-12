import React, { useState } from "react";
import Image from "next/image";

const HomeNavItems = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <>
      <form className="mx-4">
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className="border-b-2 border-lemon w-80 h-16 bg-white text-xl"
        />
      </form>
      <Image
        src="/search.png"
        width={60}
        height={60}
        layout="fixed"
        onClick={() => alert("검색을 진행합니다.")}
      />
    </>
  );
};

export default HomeNavItems;
