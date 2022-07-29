import React from "react";
import Flex from "../common/flex";

const RestaurantCard: React.FC = (props) => {
  return (
    <>
      <div className="flex flex-col w-52 h-60 shadow-xl rounded-md m-4 mb-44">
        <Flex flex={5}>{props.bookmark.images}</Flex>
        <Flex flex={1}>
          <div className="px-5 text-black text-left">
            <span className="font-semibold text-3xl">
              {props.bookmark.name}
            </span>
            <br />
            <span>{props.bookmark.category}</span>
          </div>
        </Flex>
      </div>
    </>
  );
};

const MyBookmarks: React.FC = (props) => {
  return (
    <>
      <div className="text-2xl py-8 font-semibold">내 북마크</div>
      {props.data.user.bookmarks.map((bookmark) => (
        <RestaurantCard bookmark={bookmark} />
      ))}
    </>
  );
};

export default MyBookmarks;
