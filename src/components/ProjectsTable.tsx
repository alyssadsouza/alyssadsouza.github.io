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
        <div><Arrow
          className={`w-5 ${
            sortParam && sortParam.value !== value?.value
              ? "hidden"
              : sortOrder && sortOrder.value === "DESCENDING"
              ? "rotate-180"
              : ""
          }`}
        /></div>
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="top-0 md:z-50 md:sticky bg-neutral/80 backdrop-blur-md">
        {/* Mobile table header */}
        <div className="grid items-center grid-cols-5 gap-2 mb-4 font-bold sm:hidden text-grayscale-300 font-display">
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
        <div className="hidden w-full gap-8 px-4 font-bold sm:grid sm:grid-cols-5 text-primary font-display">
          <ProjectTableHeader label="Project" value={sortParams[0]} />
          <span className="flex items-center col-span-3">Description</span>
          <ProjectTableHeader
            label="Created On"
            value={sortParams[1]}
            className="justify-center"
          />
        </div>
        <hr className="border-grayscale-50" />
      </div>

      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="hover:no-underline text-grayscale hover:text-grayscale"
        >
          <div className="grid w-full gap-8 p-4 transition-all rounded-lg shadow-sm sm:grid-cols-5 bg-neutral-50 hover:bg-neutral-200/30">
            <span className="flex flex-col gap-2">
              <b>{project.title}</b>
              <img
                className="hidden rounded-md md:block"
                src={project.thumbnailUrl}
                alt=""
              />
            </span>
            <span className="flex flex-col justify-between col-span-3 gap-4 md:text-base">
              {project.description}
              <span className="flex flex-wrap content-center gap-1">
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </span>
            </span>
            <span className="col-span-3 text-left md:text-base sm:col-span-1 sm:text-center sm:text-grayscale text-grayscale-300">
              <span className="sm:hidden">Created on </span>
              {new Date(project.creationDate).toDateString()}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
