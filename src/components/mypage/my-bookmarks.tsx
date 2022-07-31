import { UserQuery } from "@modules/client/graphql/generated/schema";
import React from "react";
import RestaurantCard from "../common/restaurant-card";

const __user: Partial<UserQuery> = {};
const __bookmarks = __user.user?.bookmarks;

type Bookmarks = NonNullable<typeof __bookmarks>;

interface PMyBookmarks {
  bookmarks: Bookmarks;
}

const MyBookmarks: React.FC<PMyBookmarks> = ({ bookmarks }) => {
  return (
    <>
      <div className="text-2xl py-8 font-semibold">내 북마크</div>
      {bookmarks.map((bookmark, index) => (
        <RestaurantCard {...bookmark} key={`Bookmark${index}`} />
      ))}
    </>
  );
};

export default MyBookmarks;
