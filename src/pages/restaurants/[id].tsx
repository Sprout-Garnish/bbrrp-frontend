import React from "react";
import DetailImages from "@src/components/restaurant-detail/detail-images";
import DetailInfo from "@src/components/restaurant-detail/detail-info";
import DetailLocation from "@src/components/restaurant-detail/detail-location";
import DetailReview from "@src/components/restaurant-detail/detail-review";
import DetailMoreInfo from "@src/components/restaurant-detail/detail-moreInfo";
import { useRouter } from "next/router";
import { useRestaurantQuery } from "@modules/client/graphql/generated/schema";

const RestaurantDetail: React.FC = () => {
  const router = useRouter();
  const restaurantId = router.query?.id;
  const { data, loading, error } = useRestaurantQuery({
    variables: {
      where: {
        id: restaurantId as string,
      },
    },
  });
  return (
    <>
      {/* 더 elegant한 로딩창 필요 */}
      {loading && <div>로딩중...</div>}
      {/* 더 elegant한 에러창 필요 */}
      {!loading && (error || !data) && <div>에러가 발생했습니다.</div>}
      {!loading && data?.restaurant && (
        <div className="w-full mt-5 py-10 px-24">
          <DetailInfo {...data.restaurant} />
          <DetailImages images={data.restaurant.images ?? []} />
          <DetailLocation location={data.restaurant.location} />
          <DetailReview reviews={data.restaurant.reviews ?? []} />
          <DetailMoreInfo info={data.restaurant.info} />
        </div>
      )}
    </>
  );
};

export default RestaurantDetail;
