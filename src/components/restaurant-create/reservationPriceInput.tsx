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
      <div>
        reservationPrice:
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
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
