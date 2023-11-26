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
    <header className="sticky top-0 z-10 flex justify-end w-full px-8 py-4 shadow-sm font-display bg-neutral-50/50 backdrop-blur-md md:backdrop-blur-none md:shadow-none md:bg-transparent">
      <nav className="flex items-center gap-4">
        {paths.map((path) => (
          <NavLink
            key={path.path}
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
