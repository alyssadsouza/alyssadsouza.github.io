import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const location = useLocation(); // Get the current path

  return (
    <div className="sticky top-8 h-fit w-64 border-l border-l-gray-400 dark:border-l-secondary-400 pl-4 text-sm">
      <p className="text-base mb-2 font-bold">On this page</p>
      <div className="space-y-1">
        {sections.map((section) => (
          <div className="list-none" key={section.id}>
            <Link
              className="text-gray-400 dark:text-secondary-400"
              to={`${location.pathname}#${section.id}`} // Append ID to the current path
            >
              {section.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
