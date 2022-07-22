import React from "react";
import Copyright from "./copyright";
import SmallForm from "./smallForm";

const Form: React.FC = () => {
  return (
    <div className="flex justify-center self-center  z-10">
      <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
        <div className="mb-4">
          <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
          <p className="text-gray-500">Please signup</p>
        </div>
        <div className="space-y-5">
          <SmallForm />
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default Form;
