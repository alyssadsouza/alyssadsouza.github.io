import projects from "../content/projects.json";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

export default function useProject() {
  const projectName = useParams().project;
  const project = useMemo(() => {
    return (
      projects.content.find((project) => project.project === projectName) || null
    );
  }, [projectName]);
  
  return project;
}