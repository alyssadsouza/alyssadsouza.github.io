import { useState, useEffect } from "react";
import NavArrow from '../components/NavArrow';
import Typewriter from '../components/Typewriter';

function Home({setMenuItem}) {

  return (
    <section id="home" className="flex flex-col justify-center lg:h-[90%] lg:overflow-y-auto w-full">
      <div id="home-text" className="flex flex-col w-full px-[10%] py-[5%] my-[15%]">
        <h1 className="text-3xl font-display font-bold">I'm Alyssa.</h1>
        <h2 className="text-2xl font-display my-4">
          <Typewriter
            headers={[
              "I'm a software engineering undergrad student.",
              "I'm a self-taught web developer.",
              "I'm a second-year undergrad.",
            ]}
            restartingIndex={6} // start from 6 again which is where "I'm a " ends
          />
        </h2>
        <p>
          I'm a second-year at the University of Waterloo and as a co-op student
          I’m actively looking for web development internships. This portfolio
          showcases my skills and some of the projects I’ve worked on.
        </p>
        <button
          className="px-2 py-1 text-sm font-display btn-primary rounded-full w-fit mt-8 self-center cursor-pointer"
          onClick={() => setMenuItem("Projects")}
        >
          See my Projects
        </button>
      </div>
      <NavArrow next="About" setMenuItem={setMenuItem} classes="mt-[-10%]" />
    </section>
  );
}

export default Home;
