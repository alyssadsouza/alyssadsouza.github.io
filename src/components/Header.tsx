import { NavLink } from "react-router-dom";
import DarkMode from "../icons/DarkMode";
import LightMode from "../icons/LightMode";

const paths = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

const Header = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className="sticky top-0 z-10 flex justify-end w-full px-8 py-4 font-medium shadow-sm bg-neutral-50/50 dark:bg-secondary-600/50 backdrop-blur-md md:backdrop-blur-none md:shadow-none md:bg-transparent dark:md:bg-transparent md:static">
      <nav className="flex items-center gap-4">
        {paths.map((path) => (
          <NavLink
            key={path.path}
            to={path.path}
            className={({ isActive }) =>
              `hover:no-underline ${
                isActive
                  ? "text-primary hover:text-primary dark:text-neutral-50 dark:hover:text-neutral-50"
                  : "text-grayscale dark:text-secondary-400 hover:text-primary dark:hover:text-neutral-50 transition-colors"
              }`
            }
          >
            {path.name}
          </NavLink>
        ))}
        <button
          className="flex gap-2 px-1 py-[0.2rem] rounded-full bg-neutral-200 dark:bg-secondary-600 hover:bg-neutral-300 dark:hover:bg-secondary-500 transition-all"
          onClick={() => setDarkMode(!darkMode)}
        >
          <div
            className={`p-[0.25rem] ${
              !darkMode ? "bg-primary-400 rounded-full" : ""
            }`}
          >
            <LightMode
              className={`w-4 ${
                !darkMode
                  ? "text-white"
                  : "text-secondary-400 dark:text-secondary-200"
              }`}
            />
          </div>
          <div
            className={`p-[0.25rem] ${
              darkMode ? "bg-secondary-300 rounded-full" : ""
            }`}
          >
            <DarkMode
              className={`w-4 ${
                darkMode
                  ? "text-white"
                  : "text-neutral-400 dark:text-secondary-200"
              }`}
            />
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
