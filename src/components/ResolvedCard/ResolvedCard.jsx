import React from "react";

const ResolvedCard = ({ rTask }) => {
  return (
    <div className="bg-violet-200 py-2.5 p-4 mt-3 font-semibold text-lg rounded-lg">
      <p>
        <span>✔</span> <span className="text-green-700">{rTask.title}</span>
      </p>
    </div>
  );
};

export default ResolvedCard;
