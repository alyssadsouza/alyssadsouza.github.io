import Typewriter from "typewriter-effect";

import ProjectsTable from "../components/ProjectsTable";

function Projects() {
  return (
    <div className="flex flex-col gap-12 mx-auto max-w-7xl animate-appear">
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
          I've documented a few of the projects that I've worked on which
          highlight my skills and interests here. If you want to see more of my
          work, see my{" "}
          <a
            href="https://github.com/alyssadsouza"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>.
        </p>
      </div>
      <ProjectsTable />
    </div>
  );
}

export default Projects;
