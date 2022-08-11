import { useEffect, useState } from "react";
import ProjectThumbnail from "./ProjectThumbnail";
import Project from "./Project";
import Dropdown from "../Dropdown";
import "../../App.css";

const getProject = (project, content) => {
  return content.find((element) => element.project === project);
};

export default function ProjectView({ content, chosenProject, setChosenProject }) {
  const [projectName, setProjectName] = useState(chosenProject.project || 'SPOT');

  useEffect(() => {
    setProjectName(chosenProject.project || 'SPOT');
  }, [chosenProject]);

  useEffect(() => {
    setChosenProject(getProject(projectName, content));
  }, [projectName, content]);

  return (
    <div className="flex flex-col justify-start items-end">
      <Dropdown
        menuItem={projectName}
        setMenuItem={setProjectName}
        items={content.map(item => item.project)}
        classes="bg-neutral-50"
      />
      <Project project={chosenProject} />
    </div>
  );
}
