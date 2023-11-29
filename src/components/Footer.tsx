import { Link } from "react-router-dom";
import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full gap-4 p-4 ">
      <Link
        to="https://github.com/alyssadsouza"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub className="w-6 h-6 transition-all text-neutral-300 hover:text-primary dark:text-secondary-400 dark:hover:text-secondary-100" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/alyssa-dsouza"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn className="w-6 h-6 transition-all text-neutral-300 hover:text-primary dark:text-secondary-400 dark:hover:text-secondary-100" />
      </Link>
    </footer>
  );
};

export default Footer;
