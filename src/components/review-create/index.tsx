import React, { useState } from "react";
import { Review as ReviewType } from "../../../modules/client/graphql/generated/schema";
import ContentInput from "./contentInput";
import TitleInput from "./titleInput";
import ImagesInput from "./imagesInput";

interface ReviewCreateProps {
  isUpdating: boolean;
}

const ReviewCreate: React.FC<ReviewCreateProps> = ({ isUpdating }) => {
  if (isUpdating) {
    console.log("update시 항목들을 기본값으로 채우기");
  }
  const [inputForm, setInputForm] = useState<ReviewType>({
    id: "",
    title: "",
    content: "",
    user: null, // authorized User가 여기 들어감
  });
  const [images, setImages] = useState<string[]>([]);
  return (
    <>
      <form action="" className="flex-auto space-y-5 w-100" method="post">
        <TitleInput inputForm={inputForm} setInputForm={setInputForm} />
        <ContentInput inputForm={inputForm} setInputForm={setInputForm} />
        <ImagesInput images={images} setImages={setImages} />
        <button type="button" className="btn btn-primary">
          제출
        </button>
      </form>
    </>
  );
};

export default ReviewCreate;
