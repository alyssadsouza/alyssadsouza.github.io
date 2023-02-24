import { useEffect, useState } from "react";
import Project from "../components/Projects/Project";
import ProjectSidebar from "../components/Projects/ProjectSidebar";
const projects = require('../content/projects.json').content

const getProject = (project, projects) => {
  return projects.find((element) => element.project === project);
};

export default function Projects() {
  console.log(projects);
  const [chosenProject, setChosenProject] = useState(projects.at(0));
  // const [projectName, setProjectName] = useState(
  //   chosenProject.project || "SPOT"
  // );

  // useEffect(() => {
  //   setProjectName(chosenProject.project || "SPOT");
  // }, [chosenProject]);

  // useEffect(() => {
  //   setChosenProject(getProject(projectName, projects));
  // }, [projectName, projects, setChosenProject]);

  return (
    <>
      <div className="bg-primary text-light-text transition-all duration-[1s]">
        <div className="w-full md:w-[25vw] md:h-screen animate-delay-appear">
          <div className="flex flex-col justify-start items-end animate-appear">
            <ProjectSidebar items={projects} />
          </div>
        </div>
      </div>
      <div className="md:w-[75vw] p-[10%] md:p-0 transition-all duration-[1s] w-full h-auto flex flex-col items-end justify-between bg-neutral-50">
        <div
          id="main-stage-image"
          className="h-full w-full flex flex-col overflow-y-auto justify-start"
        >
          <div className="animate-delay-appear">
            <Project project={chosenProject} />
          </div>
        </div>
      </div>
    </>
  );
}
