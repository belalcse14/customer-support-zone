import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Card from "./components/Card/Card";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TaskStatus from "./components/TaskStatus/TaskStatus";

const fetchTicket = async () => {
  const res = await fetch("/public/ticketData.json");
  return res.json();
};
const fetchPromise = fetchTicket();

function App() {
  // console.log(fetchPromise);
  const [progressCount, setProgressCount] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  return (
    <>
      <Navbar></Navbar>
      <Banner progressCount={progressCount}></Banner>

      <div className="max-w-[1200px] mx-auto mt-15">
        <div className="flex">
          <div className="flex-3/4">
            <h1 className="font-semibold text-xl ">Customer Tickets</h1>
            <Suspense fallback={"Data is loading..."}>
              <Card
                fetchPromise={fetchPromise}
                setProgressCount={setProgressCount}
                progressCount={progressCount}
                taskStatus={taskStatus}
                setTaskStatus={setTaskStatus}
              ></Card>
            </Suspense>
          </div>
          <div className="flex-1/4 ml-3">
            <div>
              <h2 className="font-semibold text-xl ">Task Status</h2>
              {/* <TaskStatus
                taskStatus={taskStatus}
                setTaskStatus={setTaskStatus}
              ></TaskStatus> */}
              <TaskStatus
                taskStatus={taskStatus}
                setTaskStatus={setTaskStatus}
              ></TaskStatus>
            </div>
            <div>
              <h2 className="font-semibold text-xl pt-8">Resolved Task</h2>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
