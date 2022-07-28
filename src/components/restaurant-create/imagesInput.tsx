import React from "react";

interface ImagesInputProps {
  images: string[];
  setImages: (changeForm: string[]) => void;
}

const ImagesInput: React.FC<ImagesInputProps> = ({ images, setImages }) => {
  return (
    <>
      <div className="flex flex-row">
        <p
          className="text-black font-bold justify-center align-middle"
          style={{ flex: 1 }}
        >
          이미지
        </p>
        <input
          type="file"
          style={{ flex: 8 }}
          onChange={(e) => {
            console.log(e.target.files);
            if (images) {
              setImages([...images, e.target.value] as string[]);
            } else {
              setImages([e.target.value]);
            }
          }}
        />
      </div>
    </>
  );
};

export default ImagesInput;
