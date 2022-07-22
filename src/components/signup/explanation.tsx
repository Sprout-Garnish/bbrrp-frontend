import React from "react";

const Explanation: React.FC = () => {
  return (
    <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl mr-20 z-10">
      <div className="self-start hidden lg:flex flex-col  text-white">
        <h1 className="mb-3 font-bold text-5xl">Application Name</h1>
        <p className="pr-3">Write Application Explanation</p>
      </div>
    </div>
  );
};

export default Explanation;
