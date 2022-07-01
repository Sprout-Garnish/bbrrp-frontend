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
          <span>{review.user}</span>
          <span>{review.timestamp}</span>
          <span>좋아요 수 : {review.likes}</span>
          <span>{review.title}</span>
          <span>{review.content}</span>
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
