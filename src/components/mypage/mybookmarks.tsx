import React from "react";

const MyBookmarks = (props) => {
  console.log(props);
  const RestaurantCard = (props) => {
    return (
      <>
        <div className="flex flex-col w-52 h-60 border-2 rounded-md">
          <div style={{ flex: 5 }}>{props.bookmark.images}</div>
          <hr />
          <div style={{ flex: 1 }} className="bg-lemon">
            <div className="text-black text-center">
              {props.bookmark.name}
              <br />
              {props.bookmark.category}
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {props.data.user.bookmarks.map((bookmark) => (
        <RestaurantCard bookmark={bookmark}></RestaurantCard>
      ))}
    </>
  );
};

export default MyBookmarks;
