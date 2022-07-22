import React from "react";
import { Restaurant as RestaurantType } from "../../../modules/client/graphql/generated/schema";

interface Props {
  inputForm: RestaurantType;
  setInputForm: (changeForm: RestaurantType) => void;
}

const InfoInput: React.FC<Props> = ({ inputForm, setInputForm }) => {
  return (
    <>
      <div>
        info:
        <textarea
          className="textarea textarea-info w-full"
          value={inputForm.info as string | undefined}
          onChange={(e) =>
            setInputForm({
              ...inputForm,
              info: e.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default InfoInput;
