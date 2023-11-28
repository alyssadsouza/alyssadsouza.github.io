import Typewriter from "typewriter-effect";

import ProjectsTable from "../components/ProjectsTable";

function Projects() {
  return (
    <div className="flex flex-col gap-12 mx-auto max-w-7xl">
      <div className="flex flex-col max-w-4xl gap-4">
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("These are my projects.").start();
            }}
            options={{
              delay: 50,
            }}
          />
        </h1>
        <p>
          These are a few projects I've worked on that highlight my skills and
          interests. If you want to see more short term team projects I've
          worked on, check out my{" "}
          <a
            href="https://devpost.com/alyssadsouza"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devpost
          </a>{" "}
          for hackathon submissions that were done over a weekend. My{" "}
          <a
            href="https://github.com/alyssadsouza"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          also has most projects I've worked on.
        </p>
      </div>
      <ProjectsTable />
    </div>
  );
}

export default Projects;
