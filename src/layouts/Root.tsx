import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useDarkMode from "../hooks/useDarkMode";

function Root() {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-neutral dark:bg-secondary-700">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-col flex-grow p-6 mt-8 sm:p-12 sm:mt-0">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Root;
