import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useDarkMode from "../hooks/useDarkMode";

function Root() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral dark:bg-secondary-800">
      <Header />
      <div className="flex flex-col flex-grow p-6 mt-8 sm:p-12 sm:mt-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
