import React, { useState } from "react";
import { Restaurant as RestaurantType } from "../../../modules/client/graphql/generated/schema";
import NameInput from "./nameInput";
import DescriptionInput from "./descriptionInput";
import CategoryInput from "./categoryInput";
import ReservationPriceInput from "./reservationPriceInput";
import InfoInput from "./infoInput";
import ImagesInput from "./imagesInput";
import ButtonBox from "./buttonBox";
import ImageBox from "./imageBox";

interface RestaurantCreateProps {
  isUpdating: boolean;
}

const RestaurantCreate: React.FC<RestaurantCreateProps> = ({ isUpdating }) => {
  if (isUpdating) {
    console.log("업데이트시 폼을 기본적으로 채우세요");
  }
  //update시에 해당 restaurant을 api로 가져와서 usestate를 초기화
  const [inputForm, setInputForm] = useState<RestaurantType>({
    id: "",
    name: undefined,
    description: undefined,
    locationRaw: undefined, // raw한 location
    location: { lat: 1.2, lng: 1.2 }, //위도 경도 초기화
    category: undefined,
    owner: undefined, // 사용자 정보에 따라 자동 채워짐
    reservationPrice: undefined,
    info: undefined,
  });
  const [images, setImages] = useState<string[]>([]);
  return (
    <>
      <form
        action=""
        className="flex-auto w-100"
        method="post"
        style={{ marginLeft: 20 }}
      >
        <ButtonBox />
        <div className="flex flex-col space-y-4 w-6/12">
          <NameInput inputForm={inputForm} setInputForm={setInputForm} />
          <hr />
          <CategoryInput inputForm={inputForm} setInputForm={setInputForm} />
          <hr />
          <DescriptionInput inputForm={inputForm} setInputForm={setInputForm} />
          <hr />
          <ImagesInput images={images} setImages={setImages} />
          <hr />
          <ReservationPriceInput
            inputForm={inputForm}
            setInputForm={setInputForm}
          />
          <hr />
          <InfoInput />
          <hr />
          <div className="flex flex-row space-x-4">
            {images.map((img) => (
              <ImageBox
                images={images}
                setImages={setImages}
                imageString={img}
              />
            ))}
          </div>
        </div>
        <br />
      </form>
    </>
  );
};

export default RestaurantCreate;
