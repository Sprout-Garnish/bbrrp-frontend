import React, { useState } from "react";
import { useLogin } from "@modules/client/hooks/useLogin";

const SmallForm: React.FC = () => {
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const hook = useLogin();
  return (
    <div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700 tracking-wide">Email</p>
        <input
          className=" w-full text-base px-2 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
          type="email"
          placeholder="mail@gmail.com"
          onChange={({ target: { value } }) => changeEmail(value)}
        />
      </div>
      <div className="space-y-2">
        <label className="mb-2 text-sm font-medium text-gray-700 tracking-wide">
          Password
        </label>
        <input
          className="w-full content-center text-base px-2 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
          type="password"
          placeholder="Enter your password"
          onChange={({ target: { value } }) => changePassword(value)}
        />
      </div>
      <button
        type="submit"
        onClick={() => hook.login(email, password)}
        className=" w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
      >
        Sign in
      </button>
    </div>
  );
};

export default SmallForm;
