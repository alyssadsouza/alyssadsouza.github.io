import Typewriter from "typewriter-effect";

import HomeImage from "../icons/Home";
import { Link } from "react-router-dom";
import HomeDark from "../icons/HomeDark";

function Home() {
  return (
    <div className="flex flex-col justify-center flex-grow h-full gap-12 lg:gap-24 md:flex-row animate-appear">
      <div className="flex flex-col justify-center gap-4 md:max-w-lg md:mb-32">
        <h1 className="text-5xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("I'm Alyssa").start();
            }}
            options={{
              delay: 75,
            }}
          />
        </h1>
        <h2 className="font-normal">I'm a software engineering undergrad.</h2>
        <p>
          I'm a fourth-year Software Engineering student at the University of
          Waterloo, specializing in AI and Computational Math. With multiple
          co-op terms of hands-on experience, I'm actively seeking software
          development roles where I can apply and further develop my skills.
        </p>
        <Link
          to="/projects"
          className="flex items-center gap-2 px-4 py-1 text-white transition-all rounded-full group bg-secondary-400 hover:bg-secondary-500 dark:bg-secondary-500 dark:hover:bg-secondary-600 hover:text-neutral-50 hover:no-underline dark:text-neutral-50 dark:hover:text-neutral-50 w-fit"
        >
          See My Projects →
        </Link>
      </div>
      <div className="flex flex-grow md:max-w-2xl md:p-8 sm:min-w-[24rem]">
        <HomeImage className="dark:hidden" />
        <HomeDark className="hidden dark:block" />
      </div>
    </div>
  );
}

export default Home;
