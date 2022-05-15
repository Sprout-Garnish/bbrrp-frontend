import React from "react";

const Password: React.FC = () => {
  return (
    <div className="space-y-2">
      <label className="mb-2 text-sm font-medium text-gray-700 tracking-wide">
        Password
      </label>
      <input
        className="w-full content-center text-base px-2 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
        type="password"
        placeholder="Enter your password"
      />
    </div>
  );
};

export default Password;
