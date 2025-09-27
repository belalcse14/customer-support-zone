import React from "react";
import TaskCard from "../TaskCard/TaskCard";

const TaskStatus = ({
  taskStatus,
  removeTicket,
  progressCount,
  setProgressCount,
  resolvedCount,
  setResolvedCount,
  resolvedTask,
  setResolvedTask,
  data,
  ticketCard,
  setTicketCard,
  removeTicketCard,
}) => {
  //   const ticketData = use(data);
  //   console.log(taskStatus);

  return (
    <div>
      {taskStatus.length === 0 ? (
        <p className="text-gray-500 pl-3 pt-3">No tasks in progress</p>
      ) : (
        taskStatus.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            data={data}
            removeTicket={removeTicket}
            taskStatus={taskStatus}
            progressCount={progressCount}
            setProgressCount={setProgressCount}
            resolvedCount={resolvedCount}
            setResolvedCount={setResolvedCount}
            resolvedTask={resolvedTask}
            setResolvedTask={setResolvedTask}
            ticketCard={ticketCard}
            setTicketCard={setTicketCard}
            removeTicketCard={removeTicketCard}
          ></TaskCard>
        ))
      )}
    </div>
  );
};

export default TaskStatus;
