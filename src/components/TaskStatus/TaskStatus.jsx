import React from "react";

const TaskStatus = ({ taskStatus, setTaskStatus }) => {
  //   const ticketData = use(data);
  console.log(taskStatus);

  return (
    <div>
      {taskStatus.map((task) => (
        <div
          key={task.id}
          className=" bg-gray-100 p-3 mb-3 mt-5 rounded-lg shadow-md"
        >
          <h2 className="mb-2 font-medium text-lg">{task.title}</h2>
          <button className="bg-green-500 text-white w-full py-1.5 font-semibold rounded-lg">
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
