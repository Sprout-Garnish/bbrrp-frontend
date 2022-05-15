import React from "react";

const Button: React.FC = () => {
  return (
    <div>
      <button
        type="submit"
        className=" w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
      >
        Sign in
      </button>
    </div>
  );
};

export default Button;
