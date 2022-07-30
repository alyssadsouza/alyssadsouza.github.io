import { useEffect, useState } from "react";
import ProjectThumbnail from "./ProjectThumbnail";
import Project from "./Project";
import Dropdown from "../Dropdown";
import "../../App.css";

const getProject = (project, content) => {
  return content.find((element) => element.project === project);
};

export default function ProjectView({ content, chosenProject, setChosenProject }) {
  const [projectName, setProjectName] = useState('SPOT');

  useEffect(() => {
    setChosenProject(getProject(projectName, content));
  }, [projectName, content]);

  return (
    <div className="flex flex-col justify-start items-end">
      <Dropdown
        menuItem={projectName}
        setMenuItem={setProjectName}
        items={content.map(item => item.project)}
      />
      <Project project={chosenProject} />
    </div>
  );
}
