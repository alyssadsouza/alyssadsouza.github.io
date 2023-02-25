import { useLocation } from "react-router";
import NavHeaderLink from "./NavHeaderLink";

export default function NavHeader() {
  const { pathname } = useLocation();
  return (
    <nav className={`flex flex-row justify-center py-1 px-0 font-display text-light-text text-sm ${pathname === "/about" ? "text-light-text" : "md:text-dark-text"}`}>
      <NavHeaderLink path="/" name="Home" />
      <NavHeaderLink path="/about" name="About" />
      <NavHeaderLink path="/projects" name="Projects" />
    </nav>
  );
}
