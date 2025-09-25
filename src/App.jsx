import { Suspense } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Card from "./components/Card/Card";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

const fetchTicket = async () => {
  const res = await fetch("/public/ticketData.json");
  return res.json();
};
function App() {
  const fetchPromise = fetchTicket();
  console.log(fetchPromise);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="max-w-[1200px] mx-auto mt-15">
        <div className="flex">
          <div className="flex-3/4">
            <h1 className="font-semibold text-xl ">Customer Tickets</h1>
            <Suspense fallback={"Data is loading..."}>
              <Card fetchPromise={fetchPromise}></Card>
            </Suspense>
          </div>
          <div className="flex-1/4 ml-3">
            <h2 className="font-semibold text-xl ">Task Status</h2>
            <p className="text-xs pt-4 text-gray-500">
              Select a ticket to add to Task Status
            </p>
            <h2 className="font-semibold text-xl pt-8">Resolved Task</h2>
            <p className="text-xs pt-4 text-gray-500">No resolved tasks yet.</p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
