import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProject from "../../hooks/useProject";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";

const Dropdown = ({ items }) => {
  const [open, setOpen] = useState(false);
  const project = useProject();

  useEffect(() => setOpen(false), [project]);

  return (
    <div className="py-1 my-4 bg-neutral-200 bg-opacity-30 w-full rounded-3xl">
      <div className="flex flex-row justify-between items-center">
        <p className="bg-secondary-dark text-neutral-100 text-left ml-2 rounded-3xl w-full h-fit px-2 py-1 transition-all">
          {project?.title ?? "Select project..."}
        </p>
        <ArrowIcon
          onClick={() => setOpen(!open)}
          className={`cursor-pointer hover:text-neutral-200 h-5 w-5 m-3 stroke-current text-neutral-100 transition-all duration-300 ${
            open ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      <nav
        className={`flex flex-col mt-1 overflow-hidden w-full transition-all duration-500 ${
          open ? "max-h-64 overflow-y-auto" : "max-h-0"
        }`}
      >
        {items
          .sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
          )
          .map((item) => {
            if (item !== project) {
              return (
                <Link
                  to={`/projects/${item.project}`}
                  key={item.project}
                  className="text-left hover:text-secondary-dark text-white mx-2 my-[0.1rem] px-2 py-1 transition-all"
                >
                  {item.title}
                </Link>
              );
            }
            return <div key={item}></div>;
          })}
      </nav>
    </div>
  );
};

export default Dropdown;
