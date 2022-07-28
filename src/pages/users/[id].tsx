import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import Profile from "@src/components/mypage/profile";
import MyReservations from "@src/components/mypage/myreservations";
import MyBookmarks from "@src/components/mypage/mybookmarks";
// https://defineall.tistory.com/923

const FEED_QUERY = gql`
  {
    user(where: { id: "cl4cy61ut01240qmc84odtsr8" }) {
      name
      nickname
      isAdmin
      phone
      role
      reservations {
        time
        reservationFee
        refund
        restaurant {
          name
          category
          images {
            image {
              width
              height
            }
          }
          imagesCount
        }
      }
      reservationsCount
      bookmarks {
        name
        category
        images {
          image {
            width
            height
          }
        }
        imagesCount
      }
      bookmarksCount
    }
  }
`;

const MyPage = () => {
  const { data } = useQuery(FEED_QUERY);
  console.log(data);
  return (
    <>
      {data && (
        <div>
          <div>마이페이지</div>
          <Profile data={data} />
          <MyReservations data={data} />
          <MyBookmarks data={data} />
        </div>
      )}
    </>
  );
};

export default MyPage;
