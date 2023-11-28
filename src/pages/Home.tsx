import Typewriter from "typewriter-effect";

import HomeIcon from "../icons/Home";

function Home() {
  return (
    <div className="flex flex-col justify-center flex-grow h-full gap-12 lg:gap-24 md:flex-row">
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
          I'm a second-year at the University of Waterloo and as a co-op student
          I'm actively looking for software development internships. This
          portfolio showcases my skills and some of the projects I've worked on.{" "}
        </p>
      </div>
      <div className="flex flex-grow md:max-w-2xl md:p-8 sm:min-w-[24rem]">
        <HomeIcon className="w-full h-full" />
      </div>
    </div>
  );
}

export default Home;
