import { projects as allProjects, Project } from "../content/projects";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";

export type SortParam = "title" | "creationDate";
export type SortOrder = "ASCENDING" | "DESCENDING";

const sortFunctions = {
  title: (a: Project, b: Project) => a.title.localeCompare(b.title),
  creationDate: (a: Project, b: Project) =>
    new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime(),
};

export default function useProject() {
  const { projectId } = useParams();
  const [projects, setProjects] = useState<Project[]>(allProjects);

  const currentProject = useMemo(() => {
    return projects.find((project) => project.id === projectId) || null;
  }, [projectId]);

  const sortProjects = (sortParam: SortParam, sortOrder: SortOrder) => {
    const sorted = projects.toSorted(sortFunctions[sortParam]);
    setProjects(sortOrder === "DESCENDING" ? sorted.reverse() : sorted);
  };

  return { currentProject, projects, sortProjects };
}
