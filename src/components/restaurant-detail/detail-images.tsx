import React from "react";

interface propsType {
  images: Array;
}

const DetailImages = (props: propsType) => {
  props.images.map((image) => console.log(image));
  return (
    <>
      {props.images.map((image) => {
        return (
          <>
            <div>{image.image}</div>
            <span>{image.name}</span>
            <span>{image.description}</span>
          </>
        );
      })}
    </>
  );
};

export default DetailImages;
