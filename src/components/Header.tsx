import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

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

const Header = () => {
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
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;
