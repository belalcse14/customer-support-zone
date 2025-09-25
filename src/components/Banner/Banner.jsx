import React from "react";

const Banner = () => {
  return (
    <div className="  flex gap-5 mt-5 max-w-[1200px] mx-auto">
      <div className="hero-content text-center flex-1 bg-base-200 py-13 bg-linear-to-br from-[#422AD5] to-fuchsia-500 text-white rounded-lg">
        <div className="">
          <h1 className="text-l font-semibold">In Progress</h1>
          <p className="py-3 text-4xl font-bold">0</p>
        </div>
      </div>

      <div className="hero-content text-center flex-1 bg-base-200 bg-linear-to-br from-green-400 to-teal-500 text-white rounded-lg">
        <div className="max-w-md">
          <h1 className="text-l font-semibold">Resolved</h1>
          <p className="py-3 text-4xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
