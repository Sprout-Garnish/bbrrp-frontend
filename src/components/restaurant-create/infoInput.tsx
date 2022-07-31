import React from "react";

const InfoInput: React.FC = () => {
  return (
    <>
      <div className="flex flex-row w-full max-w-full">
        <p
          className="text-black flex-auto w-full font-bold"
          style={{ flex: 1 }}
        >
          식당 정보
        </p>
        <div style={{ flex: 8 }} className="space-x-5">
          <label>
            <input type="checkbox" name="restaurantInfo" value="parking" />
            주차
          </label>
          <label>
            <input type="checkbox" name="restaurantInfo" value="dog" />
            애견동반가능
          </label>
        </div>
      </div>
    </>
  );
};

export default InfoInput;
