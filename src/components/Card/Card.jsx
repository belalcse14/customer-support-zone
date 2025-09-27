import React, { use } from "react";
import TaskStatus from "../TaskStatus/TaskStatus";
import { toast } from "react-toastify";

const Card = ({
  fetchPromise,
  setProgressCount,
  progressCount,
  taskStatus,
  setTaskStatus,
}) => {
  const promiseData = use(fetchPromise);
  // console.log(taskStatus);

  return (
    <div className="grid grid-cols-2 gap-4 mt-4 ">
      {promiseData.map((data) => (
        <div
          onClick={() => {
            toast("Tickets Added in Progress!");
            setProgressCount((progressCount += 1));
            {
              setTaskStatus([...taskStatus, data]);
            }

            // console.log(data);
          }}
          key={data.id}
        >
          <div className="h-[150px] cursor-pointer bg-gray-100 rounded-lg drop-shadow-lg">
            <div className="flex justify-between p-2">
              <h1 className="font-semibold text-lg">{data.title}</h1>
              <button
                className={`rounded-2xl py-1 px-4 ${
                  data.status === "Open" ? "bg-green-200" : "bg-amber-200"
                }`}
              >
                {data.status}
              </button>
            </div>
            <p className="p-2">{data.description}</p>
            <div className="flex justify-between p-2">
              <div className="flex items-center">
                <p className="text-xs font-bold">{data.id}</p>
                <p className="ml-4 text-m">{data.priority}</p>
              </div>
              <div className="flex items-center">
                <p className="text-xs">{data.customer}</p>
                <p className="ml-4 text-xs">
                  <span>🕧</span> {data.createdAt}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="h-[150px]  bg-gray-100">
        <div className="flex justify-between p-2">
          <h1 className="font-semibold text-lg">Login Issue</h1>
          <button className="rounded-2xl py-1 px-4 bg-green-300">Open</button>
        </div>
        <p className="p-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          ipsam tempore nemo? Totam, a at.
        </p>
        <div className="flex justify-between p-2">
          <div className="flex">
            <p>#1001</p>
            <p className="ml-4">High Priority</p>
          </div>
          <div className="flex">
            <p>John Doe</p>
            <p className="ml-4">
              <span>🕧</span> 09/25/2025
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
