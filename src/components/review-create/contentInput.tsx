import React from "react";
import { Review as ReviewType } from "../../../modules/client/graphql/generated/schema";

interface Props {
  inputForm: ReviewType;
  setInputForm: (changeForm: ReviewType) => void;
}

const ContentInput: React.FC<Props> = ({ inputForm, setInputForm }) => {
  return (
    <>
      <div>
        Content:
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
          value={inputForm.content as string | undefined}
          onChange={(e) =>
            setInputForm({
              ...inputForm,
              content: e.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default ContentInput;
