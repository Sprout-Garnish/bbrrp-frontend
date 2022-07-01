import React from "react";

interface propsType {
  reviews: Array;
}

const DetailReview = (props: propsType) => {
  function Review(props) {
    const review = props.review;
    return (
      <>
        <div>
          <span>
            {review.user}
            <br />
          </span>
          <span>
            {review.timestamp}
            <br />
          </span>
          <span>
            좋아요 수 : {review.likes}
            <br />
          </span>
          <span>
            {review.title}
            <br />
          </span>
          <span>
            {review.content}
            <br />
          </span>
          <div>
            {review.images.map((image) => {
              return (
                <>
                  <h4>{image.name}</h4>
                  <h5>{image.description}</h5>
                  <div>{image.image}</div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {props.reviews.map((review) => {
        return <Review key={review.id} review={review}></Review>;
      })}
    </>
  );
};

export default DetailReview;
