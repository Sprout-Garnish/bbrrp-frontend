import React from "react";

const Email: React.FC = () => {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-700 tracking-wide">Email</p>
      <input
        className=" w-full text-base px-2 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
        type="email"
        placeholder="mail@gmail.com"
      />
    </div>
  );
};

export default Email;
