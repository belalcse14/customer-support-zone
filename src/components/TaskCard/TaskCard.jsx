import React from "react";
import { toast } from "react-toastify";

const TaskCard = ({
  removeTicket,
  task,
  setProgressCount,
  progressCount,
  resolvedCount,
  setResolvedCount,
  data,
  setResolvedTask,
  resolvedTask,
  ticketCard,
  setTicketCard,
  removeTicketCard,
  tickets,
}) => {
  const handleRemove = () => {
    removeTicket(task);
    setProgressCount(progressCount - 1);
    setResolvedCount(resolvedCount + 1);
    // console.log(data);
    setResolvedTask([...resolvedTask, task]);
    setTicketCard([...ticketCard, task]);
    removeTicketCard(tickets);
    toast("Task marked as resolved!");
  };

  return (
    <div
      key={task.id}
      className=" bg-gray-100 p-3 mb-3 mt-5 rounded-lg shadow-md"
    >
      <h2 className="mb-2 font-medium text-lg">{task.title}</h2>
      <button
        onClick={handleRemove}
        className="bg-green-500 cursor-pointer text-white w-full py-1.5 font-semibold rounded-lg"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskCard;
