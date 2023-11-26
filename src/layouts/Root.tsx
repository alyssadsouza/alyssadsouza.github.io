import { Outlet } from "react-router";
import Header from "../components/Header.js";

function Root() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral">
      <Header />
      <div className="flex flex-col flex-grow p-12">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
