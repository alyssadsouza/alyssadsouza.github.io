const ProjectStage = ({ project }) => {
  return (
    <div className="flex flex-col text-left">
      <h3 className="text-xl font-bold font-display text-neutral-200 py-4">Demo</h3>
      <p className="pb-4 md:py-0 my-2">
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
        className="w-full md:py-4 h-[50vh] rounded-xl"
        src={project?.video}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ProjectStage;
