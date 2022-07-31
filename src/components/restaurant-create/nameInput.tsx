import React from "react";
import { Restaurant as RestaurantType } from "../../../modules/client/graphql/generated/schema";

interface Props {
  inputForm: RestaurantType;
  setInputForm: (changeForm: RestaurantType) => void;
}

const NameInput: React.FC<Props> = ({ inputForm, setInputForm }) => {
  return (
    <>
      <div className="flex flex-row w-full max-w-full">
        <p
          className="text-black flex-auto w-full font-bold"
          style={{ flex: 1 }}
        >
          이름
        </p>
        <input
          type="text"
          placeholder="레스토랑의 이름을 입력하세요..."
          className="input input-bordered bg-white flex-auto w-full"
          style={{ flex: 8 }}
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
