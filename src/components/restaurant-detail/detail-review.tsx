import {
  RestaurantQuery,
  useReviewQuery,
} from "@modules/client/graphql/generated/schema";
import React from "react";
import DetailImage from "./detail-image";

const __restaurant: Partial<RestaurantQuery["restaurant"]> = {};
type Reviews = NonNullable<typeof __restaurant["reviews"]>;
type PReview = Reviews[0];

const Review: React.FC<PReview> = ({ id }) => {
  const { data, loading, error } = useReviewQuery({
    variables: {
      where: {
        id,
      },
    },
  });
  return (
    <>
      {loading && <div>로딩중...</div>}
      {!loading && (error || !data) && <div>에러가 발생했습니다.</div>}
      {!loading && data?.review && (
        <div className="mx-2 mt-2">
          <h2 className="text-xl font-bold text-black">리뷰</h2>
          <span>
            {data.review.user?.name}
            <br />
          </span>
          <span>
            {data.review.timestamp}
            <br />
          </span>
          <span>
            좋아요 수 : {data.review.likes}
            <br />
          </span>
          <span>
            {data.review.title}
            <br />
          </span>
          <span>
            {data.review.content}
            <br />
          </span>
          <div>
            {data.review.images?.map((image, index) => {
              return <DetailImage key={`DetailImage${index}`} {...image} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

interface PDetailReview {
  reviews: Reviews;
}

const DetailReview: React.FC<PDetailReview> = ({ reviews }) => {
  return (
    <>
      {reviews.map((review, index) => {
        return <Review key={`Review${index}`} {...review} />;
      })}
    </>
  );
};

export default DetailReview;
