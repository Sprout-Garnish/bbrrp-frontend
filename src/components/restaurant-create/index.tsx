import React, { useState } from "react";
import { Restaurant as RestaurantType } from "../../../modules/client/graphql/generated/schema";
import NameInput from "./nameInput";
import DescriptionInput from "./descriptionInput";
import CategoryInput from "./categoryInput";
import ReservationPriceInput from "./reservationPriceInput";
import InfoInput from "./infoInput";

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
    images: undefined,
  });
  return (
    <>
      <form action="" className="flex-auto space-y-5 w-100" method="post">
        <NameInput inputForm={inputForm} setInputForm={setInputForm} />
        <DescriptionInput inputForm={inputForm} setInputForm={setInputForm} />
        <CategoryInput inputForm={inputForm} setInputForm={setInputForm} />
        <ReservationPriceInput
          inputForm={inputForm}
          setInputForm={setInputForm}
        />
        <InfoInput inputForm={inputForm} setInputForm={setInputForm} />
        <div>이미지 입력받기</div>
        <button className="btn btn-primary">제출</button>
      </form>
    </>
  );
};

export default RestaurantCreate;
