import React from "react";
import { Restaurant as RestaurantType } from "../../../modules/client/graphql/generated/schema";

interface Props {
  inputForm: RestaurantType;
  setInputForm: (changeForm: RestaurantType) => void;
}

const ReservationPriceInput: React.FC<Props> = ({
  inputForm,
  setInputForm,
}) => {
  return (
    <>
      <div className="flex flex-row w-full max-w-full">
        <p
          className="text-black font-bold justify-center align-middle"
          style={{ flex: 1 }}
        >
          예약가격
        </p>
        <input
          type="number"
          placeholder="Type here"
          style={{ flex: 8 }}
          className="input input-bordered w-full bg-white"
          value={inputForm.reservationPrice as number | undefined}
          onChange={(e) =>
            setInputForm({
              ...inputForm,
              reservationPrice: Number(e.target.value),
            })
          }
        />
      </div>
    </>
  );
};

export default ReservationPriceInput;
