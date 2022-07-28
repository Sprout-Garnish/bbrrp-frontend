import React from "react";
import { Restaurant as RestaurantType } from "../../../modules/client/graphql/generated/schema";

interface Props {
  inputForm: RestaurantType;
  setInputForm: (changeForm: RestaurantType) => void;
}

const DescriptionInput: React.FC<Props> = ({ inputForm, setInputForm }) => {
  return (
    <>
      <div className="flex flex-row">
        <p
          className="text-black font-bold justify-center align-middle"
          style={{ flex: 1 }}
        >
          설명
        </p>
        <textarea
          className="textarea textarea-bordered w-full bg-white"
          style={{ flex: 8 }}
          value={inputForm.description as string | undefined}
          onChange={(e) =>
            setInputForm({
              ...inputForm,
              description: e.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default DescriptionInput;
