import React from "react";

const MyBookmarks = (props) => {
  const RestaurantCard = (props) => {
    return (
      <>
        <div className="flex flex-col w-52 h-60 shadow-xl rounded-md m-4 mb-44">
          <div style={{ flex: 5 }}>{props.bookmark.images}</div>
          <div style={{ flex: 1 }}>
            <div className="px-5 text-black text-left">
              <span className="font-semibold text-3xl">
                {props.bookmark.name}
              </span>
              <br />
              <span>{props.bookmark.category}</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="text-2xl py-8 font-semibold">내 북마크</div>
      {props.data.user.bookmarks.map((bookmark) => (
        <RestaurantCard bookmark={bookmark}></RestaurantCard>
      ))}
    </>
  );
};

export default MyBookmarks;
