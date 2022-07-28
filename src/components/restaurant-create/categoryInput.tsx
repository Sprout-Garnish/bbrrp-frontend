import React from "react";
import { Restaurant as RestaurantType } from "../../../modules/client/graphql/generated/schema";

interface Props {
  inputForm: RestaurantType;
  setInputForm: (changeForm: RestaurantType) => void;
}

const CategoryInput: React.FC<Props> = ({ inputForm, setInputForm }) => {
  return (
    <>
      <div className="flex flex-row">
        <p
          className="text-black font-bold flex-2 max-w-full"
          style={{ flex: 1 }}
        >
          카테고리
        </p>
        <div
          className="dropdown dropdown-end w-m-full w-full flex-4"
          style={{ flex: 8 }}
        >
          <label
            tabIndex={0}
            className="btn border-transparent bg-lemon text-black w-full"
          >
            {inputForm.category ? inputForm.category : "카테고리"}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow text-black bg-lemon rounded-box w-full"
          >
            <li>
              <a
                onClick={() =>
                  setInputForm({ ...inputForm, category: "카테고리1" })
                }
              >
                카테고리1
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  setInputForm({ ...inputForm, category: "카테고리2" })
                }
              >
                카테고리2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoryInput;
