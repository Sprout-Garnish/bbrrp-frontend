import React from "react";
interface ImagesInputProps {
  images: string[];
  setImages: (changeForm: string[]) => void;
}

interface ImagesButtonProps extends ImagesInputProps {
  imageString: string;
}

const ImagesButton: React.FC<ImagesButtonProps> = ({
  imageString,
  setImages,
  images,
}) => {
  return (
    <>
      <p>
        {imageString}{" "}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setImages(images.filter((img) => img !== imageString));
          }}
        >
          DELETE
        </button>
      </p>
    </>
  );
};

const ImagesInput: React.FC<ImagesInputProps> = ({ images, setImages }) => {
  return (
    <>
      <div>
        Images:
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files);
            if (images) {
              setImages([...images, e.target.value] as string[]);
            } else {
              setImages([e.target.value]);
            }
          }}
        />
        {images.map((item) => (
          <ImagesButton
            imageString={item}
            images={images}
            setImages={setImages}
          />
        ))}
      </div>
    </>
  );
};

export default ImagesInput;
