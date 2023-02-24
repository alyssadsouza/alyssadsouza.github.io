import { NavLink } from "react-router-dom";
import Typewriter from "../components/Typewriter/Typewriter";
import { ReactComponent as HomeImage } from "../assets/home-image.svg";

function Home() {
  return (
    <div className="animate-slow-appear w-full flex flex-col md:flex-row">
      <div className="bg-primary text-light-text duration-[1s] w-full md:w-[40vw] md:h-screen animate-delay-appear">
          <section className="flex flex-col justify-center md:h-[90%] md:overflow-y-auto w-full">
            <div className="flex flex-col w-full px-[10%] py-[5%] my-[15%]">
              <h1 className="text-3xl font-display font-bold">I'm Alyssa.</h1>
              <h2 className="text-2xl font-display my-8">
                <Typewriter
                  phrases={[
                    "I'm a software engineering undergrad student.",
                    "I'm a self-taught web developer.",
                    "I'm a second-year undergrad.",
                  ]}
                  restartingIndex={6} // start from 6 again which is where "I'm a " ends
                />
              </h2>
              <p>
                I'm a second-year at the University of Waterloo and as a co-op
                student I’m actively looking for web development internships.
                This portfolio showcases my skills (including vector
                illustration and animation) and some of the projects I’ve worked
                on.
              </p>
              <NavLink
                className="px-4 py-1 text-sm font-display bg-secondary text-primary hover:text-light-text rounded-full w-fit mt-8 self-center cursor-pointer transition-all"
                to="/projects"
              >
                See my Projects
              </NavLink>
            </div>
          </section>
      </div>
      <div className="md:w-[60vw] p-[10%] md:p-0 transition-all duration-[1s] w-full h-screen flex flex-col items-end justify-between bg-neutral-50">
        <HomeImage />
      </div>
    </div>
  );
}

export default Home;
