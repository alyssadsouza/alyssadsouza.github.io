import { useEffect, useState } from "react";
import ProjectThumbnail from "./ProjectThumbnail";
import Project from "./Project";
import "../App.css";

const getProject = (project, content) => {
  return content.find((element) => element.project === project);
};

export default function ProjectView({ content }) {
  const [projectName, setProjectName] = useState('SPOT');
  const [chosenProject, setChosenProject] = useState(
    getProject(projectName, content)
  );

  useEffect(() => {
    setChosenProject(getProject(projectName, content));
  }, [projectName, content]);

  return (
    <div className="flex flex-row justify-between items-stretch flex-wrap">
      <div id="project-btns" className="flex flex-col w-1/5">
        {content.map((project) => (
          <div key={project.project} className={`pr-4 border-r-neutral-600 hover:border-r transition-all duration-75 ${project === chosenProject && "border-r"}`}>
            <ProjectThumbnail
              project={project}
              onHover={() => setProjectName(project.project)}
            />
          </div>
        ))}
      </div>
      <div id="spotlight-project" className="pl-[2%] w-4/5 flex flex-col justify-between items-center flex-wrap">
        <Project project={chosenProject} />
      </div>
    </div>
  );
}
