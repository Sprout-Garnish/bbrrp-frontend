import React from "react";

const ButtonBox: React.FC = () => {
  return (
    <>
      <div
        className="flex space-x-5 flex-row justify-end pr-20"
        style={{ paddingTop: 20 }}
      >
        <button
          type="button"
          className="btn btn-wide border-lemon bg-lemon text-black"
          onClick={() => alert("임시저장합니다.")}
        >
          임시저장
        </button>
        <button
          type="button"
          className="btn btn-wide border-lemon bg-lemon text-black"
          onClick={() => alert("레스토랑을 개업했습니다.")}
        >
          개업하기
        </button>
      </div>
    </>
  );
};

export default ButtonBox;
