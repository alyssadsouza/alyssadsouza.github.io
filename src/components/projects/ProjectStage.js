import ProjectPagination from "./ProjectPagination";

const ProjectStage = ({ project, setProject }) => {
  return (
    <div className="lg:py-4 flex flex-col text-left">
      <h3 className="text-xl py-0 lg:px-[10%] font-bold font-display">Demo</h3>
      <p className="pb-4 lg:py-0 lg:px-[10%] text-sm">
        This was my team's submission video demoing the application we built.
        You can see the full submission on Devpost{" "}
        <a
          href={project.devpostLink}
          target="_blank"
          rel="noreferrer"
          className="text-primary-200 underline-offset-1 hover:underline"
        >
          here
        </a>
        .
      </p>
      <iframe
        title={`project-video-${project?.project}`}
        className="w-full lg:p-[10%] lg:py-4 h-[65vh] rounded-xl"
        frameBorder={0}
        src={project?.video}
        allowFullScreen
      ></iframe>
      <ProjectPagination project={project} setProject={setProject} />
    </div>
  );
};

export default ProjectStage;
