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
          I'm currently in my third year at the University of Waterloo, pursuing
          an undergraduate degree in Software Engineering. As a student in the
          co-op program, I have the unique opportunity to alternate between
          academic studies and gaining practical work experience through 4-month
          internships.
        </p>
        <p>
          My work experience spans a range of environments, from software
          development at startups and a non-profit research organization, to
          data extraction for a global food service company. In each role I’ve
          contributed directly to codebases, which honed my development
          skills and reinforced key elements of my degree, such as design
          patterns, quality assurance, and problem-solving.
        </p>
        <p>
          Recently, I've been exploring data processing and analysis through
          personal projects. During my latest internship, I focused on data
          extraction, utilizing techniques such as web crawling, python
          scripting, and prompt engineering to extract and clean data. Overall,
          I'm looking to continue expanding my skillset with each new experience
          and to work on projects that make a tangible difference.
        </p>
      </div>
    </div>
  );
}

export default About;
