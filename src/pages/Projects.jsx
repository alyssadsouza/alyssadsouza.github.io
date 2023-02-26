import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Chip from "../components/Projects/Chip";
import projectData from "../content/projects.json";
import { ReactComponent as DownArrow } from "../assets/icons/caret-down.svg";

export default function Projects() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [projects, setProjects] = useState(
    projectData.content.sort((a, b) =>
      a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
    )
  );
  const [sortAscending, setSortAscending] = useState(false);
  const [sortParam, setSortParam] = useState("Project");
  const [frameworks, setFrameworks] = useState([]);

  const uniqueFrameworks = useMemo(() => {
    const frameworks = projectData.content.map((item) => item.tech).flat(1);
    return frameworks.filter(
      (item, index) => frameworks.indexOf(item) === index
    );
  }, []);

  useEffect(
    () => setFrameworks(new URLSearchParams(search).getAll("frameworks")),
    [search]
  );

  useEffect(() => {
    if (frameworks) {
      setProjects(
        projectData.content.filter((project) =>
          frameworks.every((el) => project.tech.includes(el))
        )
      );
    }
  }, [frameworks]);

  const sortTableByProject = () => {
    setSortParam("Project");
    if (sortAscending) {
      setProjects(
        projects.sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        )
      );
      setSortAscending(false);
    } else {
      setProjects(
        projects.sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
        )
      );
      setSortAscending(true);
    }
  };
  const sortTableByDate = () => {
    setSortParam("Date");
    if (sortAscending) {
      setProjects(
        projects.sort(
          (a, b) => new Date(b.creation_date) - new Date(a.creation_date)
        )
      );
      setSortAscending(false);
    } else {
      setProjects(
        projects.sort(
          (a, b) => new Date(a.creation_date) - new Date(b.creation_date)
        )
      );
      setSortAscending(true);
    }
  };

  const updateFrameworks = (item) => {
    if (frameworks.includes(item)) {
      setFrameworks(frameworks.filter((el) => el !== item));
    } else {
      setFrameworks([...frameworks, item]);
    }
  };

  return (
    <div
      key={search}
      className="flex flex-col h-full md:p-12 md:pt-32 gap-8 animate-appear"
    >
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div>
          <button
            onClick={(e) => e.currentTarget.focus()}
            className="peer inline-flex gap-1 justify-between items-center self-end p-1 px-2 text-xs border-neutral-200/30 border rounded-full w-fit text-neutral-200/80 transition-all hover:bg-neutral-200/10"
          >
            <p>
              {frameworks.length > 1
                ? `${frameworks.length} filters`
                : frameworks.length > 0
                ? `1 filter`
                : "All Projects"}
            </p>
            <DownArrow className="w-3 h-3" />
          </button>
          <ul className="peer-focus:visible invisible peer-focus:opacity-100 shadow-md w-28 p-2 absolute opacity-0 transition-all duration-300 bg-neutral-50 text-xs max-h-32 overflow-y-auto overflow-x-hidden scrollbar-light scroll-thin-y">
            <li
              onClick={() => setFrameworks([])}
              className={`hover:bg-neutral-100 border-b p-1 cursor-pointer ${
                !frameworks.length && "text-primary-300"
              }`}
            >
              {!frameworks.length && <span>✓ </span>}All Projects
            </li>
            {uniqueFrameworks.map((item) => (
              <li
                key={item}
                onClick={() => updateFrameworks(item)}
                className={`hover:bg-neutral-100 border-b p-1 cursor-pointer ${
                  frameworks.includes(item) && "text-primary-300"
                }`}
              >
                {frameworks.includes(item) && <span>✓ </span>}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-light scroll-x">
        <table
          key={sortAscending + frameworks}
          className="animate-appear text-sm border-separate border-spacing-x-0 border-spacing-y-2 w-full"
        >
          <thead className="text-neutral-200/80">
            <tr>
              <th
                onClick={sortTableByProject}
                align="left"
                className="cursor-pointer font-normal pl-2 border-b border-neutral-200/30"
              >
                {sortParam === "Project" && (
                  <span>{!sortAscending ? "↑ " : "↓ "}</span>
                )}
                Project
              </th>
              <th className="font-normal border-b border-neutral-200/30"></th>
              <th className="font-normal border-b border-neutral-200/30">
                Frameworks
              </th>
              <th
                onClick={sortTableByDate}
                className="cursor-pointer font-normal border-b border-neutral-200/30"
              >
                {sortParam === "Date" && (
                  <span>{!sortAscending ? "↑ " : "↓ "}</span>
                )}
                Created On
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.project}
                onClick={() => navigate(`/projects/${project.project}`)}
                className="h-12 hover:bg-neutral-100/50 transition-all cursor-pointer"
              >
                <td className="border-y border-l rounded-tl-lg rounded-bl-lg p-2 border-neutral-100">
                  <div className="flex items-center w-32 h-20 rounded-md overflow-hidden border">
                    <img src={project.thumbnail} alt={project.title} />
                  </div>
                </td>
                <td className="border-y p-4 border-neutral-100">
                  {project.title}
                </td>
                <td className="border-y pl-4 border-neutral-100 max-w-[20vw]">
                  <div className="flex flex-row justify-center items-center flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Chip
                        key={tech}
                        item={tech}
                        classes="text-[0.65rem] px-[0.75rem] py-[0.1rem] hover:bg-primary-300/10"
                        onClick={() => navigate(`/projects?frameworks=${tech}`)}
                      />
                    ))}
                  </div>
                </td>
                <td
                  align="center"
                  className="border-y border-r rounded-tr-lg rounded-br-lg p-4 border-neutral-100"
                >
                  {project.creation_date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
