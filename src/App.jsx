import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Banner from "./components/banner/Banner";
import Card from "./components/Card/Card";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import ResolvedStatus from "./components/ResolvedStatus/ResolvedStatus";

const fetchTicket = async () => {
  const res = await fetch("/public/ticketData.json");
  return res.json();
};
const fetchPromise = fetchTicket();

function App() {
  // console.log(fetchPromise);
  const [progressCount, setProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);
  const [ticketCard, setTicketCard] = useState([]);

  const removeTicketCard = (cards) => {
    const filteredCard = ticketCard.filter((card) => card.id !== cards.id);

    setTicketCard(filteredCard);
    console.log(filteredCard);
  };

  const removeTicket = (ticket) => {
    const filteredTicket = taskStatus.filter((tick) => tick.id !== ticket.id);
    // console.log(filteredTicket);
    setTaskStatus(filteredTicket);
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner
        progressCount={progressCount}
        resolvedCount={resolvedCount}
      ></Banner>

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
                removeTicket={removeTicket}
                ticketCard={ticketCard}
                setTicketCard={setTicketCard}
                removeTicketCard={removeTicketCard}
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
                removeTicket={removeTicket}
                progressCount={progressCount}
                setProgressCount={setProgressCount}
                resolvedCount={resolvedCount}
                setResolvedCount={setResolvedCount}
                resolvedTask={resolvedTask}
                setResolvedTask={setResolvedTask}
                ticketCard={ticketCard}
                setTicketCard={setTicketCard}
                removeTicketCard={removeTicketCard}
              ></TaskStatus>
            </div>
            <div>
              <h2 className="font-semibold text-xl pt-8">Resolved Task</h2>
              <ResolvedStatus
                resolvedTask={resolvedTask}
                setResolvedTask={setResolvedTask}
              ></ResolvedStatus>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
