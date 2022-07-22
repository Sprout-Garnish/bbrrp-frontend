import React, { useState } from "react";
import { Reservation as ReservationType } from "../../../modules/client/graphql/generated/schema";

interface ReservationCreateProps {
  isUpdating: boolean;
}

//이미 정해진 Reservation Fee와 Refund 금액에 대해 create
const ReservationCreate: React.FC<ReservationCreateProps> = ({
  isUpdating,
}) => {
  if (isUpdating) {
    console.log("업데이트시 폼을 기본적으로 채우세요");
  }
  const [inputForm, setInputForm] = useState<ReservationType>({
    id: "",
    reservationFee: 0,
    refund: 0,
    user: null,
    restaurant: null,
  });
  //useEffect로 reservationFee 등 가져와서 초기화

  return (
    <>
      <form action="" className="flex-auto space-y-5 w-100" method="post">
        <p>Reservation Fee: {inputForm.reservationFee}</p>
        <p>Refund: {inputForm.refund}</p>
        <button
          type="submit"
          onClick={() => alert("예약되었습니다.")}
          className="btn btn-primary"
        >
          예약하기
        </button>
      </form>
    </>
  );
};

export default ReservationCreate;
