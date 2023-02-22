import { useEffect, useState } from "react";
import Project from "../components/Projects/Project";

const getProject = (project, content) => {
  return content.find((element) => element.project === project);
};

export default function Projects({ content, chosenProject, setChosenProject }) {
  const [projectName, setProjectName] = useState(chosenProject.project || 'SPOT');

  useEffect(() => {
    setProjectName(chosenProject.project || 'SPOT');
  }, [chosenProject]);

  useEffect(() => {
    setChosenProject(getProject(projectName, content));
  }, [projectName, content, setChosenProject]);

  return (
    <div className="flex flex-col justify-start items-end animate-appear">
      <Project project={chosenProject} />
    </div>
  );
}
