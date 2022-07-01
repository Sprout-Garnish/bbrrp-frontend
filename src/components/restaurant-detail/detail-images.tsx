import React from "react";

interface propsType {
  images: Array;
}

const DetailImages = (props: propsType) => {
  return (
    <>
      {props.images.map((image) => {
        return (
          <>
            <div key={image.id}>
              <div>{image.image}</div>
              <span>{image.name}</span>
              <span>{image.description}</span>
            </div>
          </>
        );
      })}
    </>
  );
};

export default DetailImages;
