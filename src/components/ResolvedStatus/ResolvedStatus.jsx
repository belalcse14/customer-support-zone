import React from "react";
import ResolvedCard from "../ResolvedCard/ResolvedCard";

const ResolvedStatus = ({ resolvedTask }) => {
  return (
    <div>
      {resolvedTask.length === 0 ? (
        <p className="text-gray-600 pl-3 pt-3">No Resolved Task</p>
      ) : (
        resolvedTask.map((rTask) => (
          <ResolvedCard key={rTask.id} rTask={rTask}></ResolvedCard>
        ))
      )}
    </div>
  );
};

export default ResolvedStatus;
