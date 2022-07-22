import React from "react";
import { Restaurant as RestaurantType } from "../../../modules/client/graphql/generated/schema";

interface Props {
  inputForm: RestaurantType;
  setInputForm: (changeForm: RestaurantType) => void;
}

const NameInput: React.FC<Props> = ({ inputForm, setInputForm }) => {
  return (
    <>
      <div>
        Restaurant Name:
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
          value={inputForm.name as string | undefined}
          onChange={(e) =>
            setInputForm({
              ...inputForm,
              name: e.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default NameInput;
