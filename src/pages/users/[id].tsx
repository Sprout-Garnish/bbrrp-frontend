import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import Profile from "@src/components/mypage/profile";
import MyReservations from "@src/components/mypage/myreservations";
import MyBookmarks from "@src/components/mypage/mybookmarks";
import Footer from "@src/components/common/footer";
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
              url
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
            url
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
        <>
          <div className="relative w-full">
            <div className="font-bold text-4xl mx-36 my-12 font-bold">
              마이페이지
            </div>
            <div className="mx-36">
              <Profile data={data} />
              <MyReservations className="left-0" data={data} />
              <MyBookmarks className="left-0" data={data} />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default MyPage;
