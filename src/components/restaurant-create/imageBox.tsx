import React from "react";

interface ImagesInputProps {
  images: string[];
  setImages: (changeForm: string[]) => void;
}

interface ImageBoxProps extends ImagesInputProps {
  imageString: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  images,
  setImages,
  imageString,
}) => {
  return (
    <div className="flex flex-col w-52 h-60 border-2 rounded-md">
      <div style={{ flex: 5 }}>
        <p>{imageString}</p>
      </div>
      <hr />
      <div style={{ flex: 1 }} className="bg-lemon">
        <button
          type="button"
          className="text-black text-center"
          onClick={(e) => {
            e.preventDefault();
            setImages(images.filter((img) => img !== imageString));
          }}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default ImageBox;
