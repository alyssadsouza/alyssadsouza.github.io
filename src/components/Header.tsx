import { NavLink } from "react-router-dom";

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
    <header className="sticky top-0 z-10 flex justify-end w-full h-24 p-8 font-display">
      <nav className="flex items-center gap-4">
        {paths.map((path) => (
          <NavLink
            to={path.path}
            className={({ isActive }) =>
              isActive ? "text-primary" : "hover:text-primary transition-colors"
            }
          >
            {path.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
