import { useState, useEffect } from "react";
import NavArrow from '../components/NavArrow';

function Home({setMenuItem}) {
  /* Typewriter effect */
  const headers = [
    "I'm a software engineering undergrad student.",
    "I'm a self-taught web developer.",
    "I'm a second-year undergrad.",
  ];
  const [header, setHeader] = useState("");
  const [adding, setAdding] = useState(true);
  const [headerText, setHeaderText] = useState(headers[0]);
  const [index, setIndex] = useState(0);
  const [headerIndex, setHeaderIndex] = useState(1);

  useEffect(() => {
    if (adding) {
      if (index <= headerText.length) {
        setHeader(headerText.slice(0, index));
        setTimeout(() => setIndex(index + 1), 75);
      }
      if (index === headerText.length) {
        setTimeout(() => {
          setAdding(false);
          setIndex(index - 1);
        }, 7500); // hold on full header for 5 seconds
      }
    } // there's a period between adding still being true but index > text length where text holds for a few seconds
    else {
      if (index >= 6) {
        // start from 6 again which is where "I'm a " ends
        setHeader(headerText.slice(0, index));
        if (index === 6) {
          setAdding(true);
          setHeaderText(headers[headerIndex]);
          if (headerIndex === headers.length - 1) {
            setHeaderIndex(0);
          } else {
            setHeaderIndex(headerIndex + 1);
          }
          setTimeout(() => setIndex(index + 1), 300);
        } else {
          setTimeout(() => setIndex(index - 1), 75);
        }
      }
    }
  }, [index]);

  return (
    <section id="home" className="flex flex-col justify-center lg:h-[90%] lg:overflow-scroll w-full">
      <div id="home-text" className="flex flex-col w-full px-[10%] py-[5%] my-[15%]">
        <h1 className="text-3xl font-display font-bold">I'm Alyssa.</h1>
        <h2 className="text-2xl font-display my-4">{header}<span className="caret"></span></h2>
        <p className="">
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
