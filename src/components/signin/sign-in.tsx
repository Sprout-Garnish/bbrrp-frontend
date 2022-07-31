import React from "react";
import Explanation from "./explanation";
import Form from "./form";

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center bg-green-400 w-full">
      <Explanation />
      <Form />
    </div>
  );
};

export default SignIn;
