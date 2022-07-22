import React from "react";
import { Restaurant as RestaurantType } from "../../../modules/client/graphql/generated/schema";

interface Props {
  inputForm: RestaurantType;
  setInputForm: (changeForm: RestaurantType) => void;
}

const CategoryInput: React.FC<Props> = ({ inputForm, setInputForm }) => {
  return (
    <>
      <div className="dropdown dropdown-end">
        Restaurant Category
        <label tabIndex={0} className="btn m-1">
          {inputForm.category ? inputForm.category : "카테고리"}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
    </>
  );
};

export default CategoryInput;
