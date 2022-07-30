import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = ({classes}) => {
  return (
    <footer className={`flex flex-row justify-center items-center w-full h-full lg:border-t lg:bg-neutral-100 ${classes}`}>
      <IconContext.Provider
        value={{
          className:
            "text-neutral-300 hover:text-primary-light transition-all w-5 h-5",
        }}
      >
        <a
          href="https://github.com/alyssadsouza"
          target="_blank"
          rel="noreferrer"
          className="mx-1"
        >
          <FaGithub />
        </a>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          className:
            "text-neutral-300 hover:text-primary-light transition-all w-5 h-5",
        }}
      >
        <a
          href="https://github.com/alyssadsouza"
          target="_blank"
          rel="noreferrer"
          className="mx-1"
        >
          <FaLinkedin />
        </a>
      </IconContext.Provider>
    </footer>
  );
};

export default Footer;
