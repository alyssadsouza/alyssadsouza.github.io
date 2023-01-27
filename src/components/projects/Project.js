import ProjectStage from "./ProjectStage";

export default function Project({ project }) {
  const icons = project?.images?.map((image) => (
    <div
      key={image}
      className="p-[5%] mx-1 my-4 rounded-full bg-neutral-200 bg-opacity-20 transition-all w-8 h-8"
    >
      <img
        src={require(`../../images/${image}.svg`)}
        alt="Icon"
        className="w-full h-full project-img"
      />
    </div>
  ));

  return (
    <div className='flex flex-col justify-center items-start my-4 md:py-[10vh] md:px-[15vw] rounded-xl w-full h-auto'>
      <div>
        <h2 className="text-3xl font-display">{project?.title}</h2>
        <a href={project?.link} target="_blank" rel="noreferrer" className='text-sm text-neutral-200 my-2 flex flex-row justify-start items-center w-fit underline-offset-1 hover:underline'>
          See the code
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
      <div className="flex flex-row justify-end">{icons}</div>
      <h3 className="text-xl py-4 font-display font-bold text-neutral-200">Description</h3>
      <p className="my-2">{project?.content?.DESCRIPTION}</p>
      <h3 className="text-xl py-4 font-display font-bold text-neutral-200">How I Built It</h3>
      {project?.content?.HOW_I_BUILT_IT?.map((paragraph, i) =>
        <div key={`${paragraph}-${i}`}>
          <p className="my-2">{paragraph}</p>
        </div>
      )}
      <ProjectStage project={project} />
    </div>
  );
}
