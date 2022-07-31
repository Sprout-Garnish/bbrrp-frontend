import React from "react";
import Profile from "@src/components/mypage/profile";
import MyReservations from "@src/components/mypage/my-reservations";
import MyBookmarks from "@src/components/mypage/my-bookmarks";
import { useRouter } from "next/router";
import { useUserQuery } from "@modules/client/graphql/generated/schema";

const MyPage = () => {
  const router = useRouter();
  const userId = router.query?.id;
  const { data, loading, error } = useUserQuery({
    variables: {
      where: {
        id: userId as string,
      },
    },
  });
  return (
    <div className="relative w-full">
      <div className="font-bold text-4xl mx-36 my-12">마이페이지</div>
      <div className="mx-36">
        {/* 더 elegant한 로딩창 필요 */}
        {loading && <div>로딩중...</div>}
        {/* 더 elegant한 에러창 필요 */}
        {!loading && (error || !data) && <div>에러가 발생했습니다.</div>}
        {!loading && !error && data && (
          <>
            <Profile user={data.user} />
            <MyReservations reservations={data.user?.reservations ?? []} />
            <MyBookmarks bookmarks={data.user?.bookmarks ?? []} />
          </>
        )}
      </div>
    </div>
  );
};

export default MyPage;
