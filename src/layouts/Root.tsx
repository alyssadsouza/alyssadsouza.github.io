import { Outlet } from "react-router";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function Root() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral">
      <Header />
      <div className="flex flex-col flex-grow p-6 sm:p-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
