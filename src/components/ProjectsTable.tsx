import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import useProject, { SortParam, SortOrder } from "../hooks/useProject";

import Chip from "./Chip";
import Arrow from "../icons/Arrow";

type SortParamOption = { value: SortParam; label: string };
const sortParams: SortParamOption[] = [
  {
    value: "title",
    label: "Project Name",
  },
  {
    value: "creationDate",
    label: "Creation Date",
  },
];

type SortOrderOption = { value: SortOrder; label: string };
const sortOrders: SortOrderOption[] = [
  {
    value: "ASCENDING",
    label: "Ascending",
  },
  {
    value: "DESCENDING",
    label: "Descending",
  },
];

export default function ProjectsTable() {
  const { projects, sortProjects } = useProject();
  const [sortParam, setSortParam] = useState<SortParamOption | null>(
    sortParams[1]
  );
  const [sortOrder, setSortOrder] = useState<SortOrderOption | null>(
    sortOrders[1]
  );

  useEffect(() => {
    if (sortParam && sortOrder) sortProjects(sortParam.value, sortOrder.value);
  }, [sortParam, sortOrder]);

  const ProjectTableHeader = ({
    label,
    value,
    className,
  }: {
    label: string;
    value: SortParamOption;
    className?: string;
  }) => {
    return (
      <button
        onClick={() => {
          setSortParam(value);
          setSortOrder(
            sortOrder && sortOrder.value === "ASCENDING"
              ? sortOrders[1]
              : sortOrders[0]
          );
        }}
        className={`flex items-center gap-2 ${className}`}
      >
        <span>{label}</span>
        <div>
          <Arrow
            className={`w-5 ${
              sortParam && sortParam.value !== value?.value
                ? "hidden"
                : sortOrder && sortOrder.value === "DESCENDING"
                ? "rotate-180"
                : ""
            }`}
          />
        </div>
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="top-0 md:z-50 md:sticky bg-neutral/80 dark:bg-secondary-800/80 backdrop-blur-md">
        {/* Mobile table header */}
        <div className="grid items-center grid-cols-5 gap-2 mb-4 font-bold sm:hidden text-grayscale-300 dark:text-secondary-200">
          <span>Sort by</span>
          <Select
            defaultValue={sortParam}
            onChange={setSortParam}
            options={sortParams}
            className="col-span-2"
          />
          <Select
            defaultValue={sortOrder}
            onChange={setSortOrder}
            options={sortOrders}
            className="col-span-2"
          />
        </div>

        {/* Tablet + Desktop table header */}
        <div className="hidden w-full gap-8 px-4 font-bold sm:grid sm:grid-cols-5 text-primary dark:text-secondary-200">
          <ProjectTableHeader label="Project" value={sortParams[0]} />
          <span className="col-span-3"></span>
          <ProjectTableHeader
            label="Created On"
            value={sortParams[1]}
            className="justify-center"
          />
        </div>
        <hr className="mt-2 border-neutral-700/20 dark:border-secondary-200/50" />
      </div>

      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="hover:no-underline text-grayscale dark:text-neutral-50 dark:hover:text-neutral-50 hover:text-grayscale"
        >
          <div className="grid w-full gap-8 p-4 transition-all rounded-lg sm:grid-cols-5 bg-neutral-200/30 dark:bg-secondary-500/30 dark:hover:bg-secondary-500/60 hover:bg-neutral-200/60">
            <div className="hidden md:block">
              <img className="object-cover w-full h-32 rounded-md" src={project.thumbnailUrl} alt="" />
            </div>
            <span className="flex flex-col justify-between col-span-4 gap-4 md:col-span-3 md:text-base">
              <div className="flex flex-col gap-1">
                <p><b>{project.title}</b></p>
                <p>{project.description}</p>
              </div>
              <span className="flex flex-wrap content-center gap-1">
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </span>
            </span>
            <span className="col-span-3 text-left md:text-base sm:col-span-1 sm:text-center sm:text-grayscale text-grayscale-300 dark:sm:text-neutral-50 dark:text-secondary-300 dark:hover:text-neutral-50">
              <span className="sm:hidden">Created on </span>
              {new Date(project.creationDate).toDateString()}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
