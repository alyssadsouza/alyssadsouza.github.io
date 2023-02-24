import { Outlet } from 'react-router-dom';
import ProjectSidebar from "../components/Projects/ProjectSidebar";
const projects = require('../content/projects.json').content

export default function Projects() {
  return (
    <>
      <div className="bg-primary text-light-text transition-all duration-[1s]">
        <div className="w-full md:w-[30vw] md:h-screen animate-slow-appear">
          <div className="flex flex-col justify-start items-end animate-appear">
            <ProjectSidebar items={projects} />
          </div>
        </div>
      </div>
      <div className="md:w-[70vw] p-[10%] md:p-0 transition-all duration-[1s] w-full h-auto flex flex-col items-end justify-between bg-neutral-50">
        <div
          id="main-stage-image"
          className="h-full w-full flex flex-col overflow-y-auto scrollbar-light justify-start"
        >
          <div className="animate-slow-appear">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
