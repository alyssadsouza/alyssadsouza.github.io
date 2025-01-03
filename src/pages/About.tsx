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
          I'll be graduating in May 2026 from the University of Waterloo's Software
          Engineering program, with extensive co-op experience across startups,
          research labs, and enterprise environments. My work has ranged from
          building scalable software systems to developing automation tools,
          always with a focus on delivering clean, maintainable code.
        </p>
        <p>
          As part of my degree, I've most recently completed coursework in software
          design and architecture, as well as computer networks, strengthening
          my understanding of distributed systems, network protocols, and
          performance modeling. I'm excited to apply these skills to software
          development roles that demand both technical depth and creative
          problem-solving.
        </p>
      </div>
    </div>
  );
}

export default About;
