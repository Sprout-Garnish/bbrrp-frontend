import React from "react";
import classed, { tw } from "clsc";
import { Section } from "./classed";
import Image from "next/image";

const SearchBox = classed(Section)(tw`flex-5 justify-end pr-8`);
const SearchForm = classed.form`w-full h-full`;

const SearchSection = () => {
  return (
    <SearchBox>
      <SearchForm>
        <input id="name" type="text" required />
        <button type="submit">
          <Image src="/search.png" width={30} height={30} layout="fixed" />
        </button>
      </SearchForm>
    </SearchBox>
  );
};

export default SearchSection;
