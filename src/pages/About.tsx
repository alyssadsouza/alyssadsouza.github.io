import Typewriter from "typewriter-effect";

import AboutImage from "../icons/About";

function About() {
  return (
    <div className="flex flex-col justify-center flex-grow h-full gap-12 lg:gap-24 md:flex-row">
      <div className="flex flex-grow md:max-w-2xl md:p-8 sm:min-w-[24rem]">
        <AboutImage />
      </div>
      <div className="flex flex-col justify-center gap-4 md:max-w-lg">
        <h1>
          <Typewriter
            options={{
              strings: [
                "I'm a web developer.",
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro fugit
          impedit similique quis ex, quo, laborum, error sunt tempora aliquid
          aliquam voluptate! Earum, ullam ipsum! Alias sit ut quos ad.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro fugit
          impedit similique quis ex, quo, laborum, error sunt tempora aliquid
          aliquam voluptate! Earum, ullam ipsum! Alias sit ut quos ad.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro fugit
          impedit similique quis ex, quo, laborum, error sunt tempora aliquid
          aliquam voluptate! Earum, ullam ipsum! Alias sit ut quos ad.
        </p>
      </div>
    </div>
  );
}

export default About;
