import React, { useState } from "react";

const SmallForm: React.FC = () => {
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [phone, changePhone] = useState("");
  const [name, changeName] = useState("");
  const hook = () => console.log(email, password, phone, name);
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
      <div className="space-y-2">
        <label className="mb-2 text-sm font-medium text-gray-700 tracking-wide">
          Phone
        </label>
        <input
          className="w-full content-center text-base px-2 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
          type="text"
          placeholder="000-0000-0000"
          onChange={({ target: { value } }) => changePhone(value)}
        />
      </div>
      <div className="space-y-2">
        <label className="mb-2 text-sm font-medium text-gray-700 tracking-wide">
          Name
        </label>
        <input
          className="w-full content-center text-base px-2 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
          type="name"
          placeholder="Enter your name"
          onChange={({ target: { value } }) => changeName(value)}
        />
      </div>
      <button
        type="submit"
        onClick={() => {
          hook();
        }}
        className=" w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SmallForm;
