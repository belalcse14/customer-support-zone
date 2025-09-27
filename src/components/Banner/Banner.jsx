import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Banner = ({ progressCount, resolvedCount }) => {
  return (
    <div className="  flex gap-5 mt-5 max-w-[1200px] mx-auto">
      <div className="hero-content text-center flex-1 bg-base-200 flex bg-linear-to-br from-[#422AD5] to-fuchsia-500 text-white rounded-lg">
        <img className="bg-no-repeat flex-1" src={vector1} alt="" />
        <div className="flex-1">
          <h1 className="text-l font-semibold">In Progress</h1>
          <p className="py-3 text-4xl font-bold">{progressCount}</p>
        </div>
        <img
          className="rotate-y-180 bg-no-repeat flex-1"
          src={vector1}
          alt=""
        />
      </div>

      <div className="hero-content text-center flex-1 bg-base-200 bg-linear-to-br from-green-400 to-teal-500 text-white rounded-lg flex">
        <img className="bg-no-repeat flex-1" src={vector1} alt="" />
        <div className="max-w-md flex-1">
          <h1 className="text-l font-semibold">Resolved</h1>
          <p className="py-3 text-4xl font-bold">{resolvedCount}</p>
        </div>
        <img
          className="rotate-y-180 bg-no-repeat flex-1"
          src={vector1}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
