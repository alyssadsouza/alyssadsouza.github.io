import Typewriter from "typewriter-effect";

import AboutImage from "../icons/About";
import AboutDark from "../icons/AboutDark";

function About() {
  return (
    <div className="flex flex-col justify-center flex-grow h-full gap-12 lg:gap-24 md:flex-row animate-appear">
      <div className="flex md:flex-grow md:max-w-2xl md:p-8 sm:min-w-[24rem]">
        <AboutImage className="dark:hidden" />
        <AboutDark className="hidden dark:block" />
      </div>
      <div className="flex flex-col justify-center gap-4 md:max-w-lg">
        <h1>
          <Typewriter
            options={{
              strings: [
                "I'm a developer.",
                "I'm passionate about good design.",
                "I love building software.",
              ],
              autoStart: true,
              delay: 50,
              loop: true,
            }}
          />
        </h1>
        <p>
          I'm currently in my third year at the University of Waterloo, studying
          an undergraduate degree in Software Engineering. I'm also a student in
          the co-op program, which uniquely lets me alternate between studying
          and gaining work experience through 4-month internships.
        </p>
        <p>
          So far I've had the chance to work at small startups, contributing
          directly to their codebase and improving user experiences with their
          products. These experiences have honed my web development skills and
          reinforced key aspects of my degree, from design practices to quality
          assurance and problem-solving.
        </p>
        <p>
          Lately, I've been delving into the impact of big data across various
          industries, exploring data processing and analysis through personal
          projects. Overall, I'm looking to expand my skillset with every new
          experience and work on something impactful that demonstrates how cool
          software is.
        </p>
      </div>
    </div>
  );
}

export default About;
