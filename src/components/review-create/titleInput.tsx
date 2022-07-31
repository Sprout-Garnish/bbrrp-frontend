import React from "react";
import { Review as ReviewType } from "../../../modules/client/graphql/generated/schema";

interface Props {
  inputForm: ReviewType;
  setInputForm: (changeForm: ReviewType) => void;
}

const TitleInput: React.FC<Props> = ({ inputForm, setInputForm }) => {
  return (
    <>
      <div>
        Title:
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
          value={inputForm.title as string | undefined}
          onChange={(e) =>
            setInputForm({
              ...inputForm,
              title: e.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default TitleInput;
