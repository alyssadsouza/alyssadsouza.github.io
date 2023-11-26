import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full gap-4 p-4 ">
      <a
        href="https://github.com/alyssadsouza"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub className="w-6 h-6 transition-all text-neutral-300 hover:text-primary" />
      </a>
      <a
        href="https://www.linkedin.com/in/alyssa-dsouza"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn className="w-6 h-6 transition-all text-neutral-300 hover:text-primary" />
      </a>
    </footer>
  );
};

export default Footer;
