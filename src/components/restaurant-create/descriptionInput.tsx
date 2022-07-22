import React from "react";
import { Restaurant as RestaurantType } from "../../../modules/client/graphql/generated/schema";

interface Props {
  inputForm: RestaurantType;
  setInputForm: (changeForm: RestaurantType) => void;
}

const DescriptionInput: React.FC<Props> = ({ inputForm, setInputForm }) => {
  return (
    <>
      <div>
        Description:
        <textarea
          className="textarea textarea-info w-full"
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
