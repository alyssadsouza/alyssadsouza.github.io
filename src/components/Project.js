export default function Project({ project }) {
  const icons = project.images.map((image) => (
    <div
      key={image}
      className="p-[1.5%] mr-4 my-4 rounded-full bg-white transition-all w-8 h-8"
    >
      <img
        src={require(`../images/${image}.svg`)}
        alt="Icon"
        className="w-full h-full project-img"
      />
    </div>
  ));

  return (
    <div className={`flex flex-row justify-between items-center my-4 p-[5%] w-full h-full ${project.color} animate-appear`}>
      <div className="flex flex-col w-1/2 mr-[10%] animate-appear">
        <h2 className="text-3xl font-display">{project.title}</h2>
        <a href={project.link} target="_blank" rel="noreferrer" className={`${project.color === 'primary' ? 'text-primary-light' : 'text-neutral-600'} text-sm flex flex-row justify-start items-center w-fit underline-offset-1 hover:underline`}>
          See the code
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          </a>
        <div className="flex flex-row justify-start">{icons}</div>
        <hr className={`${project.color === 'primary' ? 'border-white' : 'border-neutral-700' }`} />
        <h3 className="text-xl py-4 font-display font-bold">Description</h3>
        <p>{project.content.DESCRIPTION}</p>
        <h3 className="text-xl py-4 font-display font-bold">How I Built It</h3>
        <p>{project.content.HOW_I_BUILT_IT}</p>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center">
        <iframe
          title={`project-video-${project.project}`}
          className="w-full h-3/5 rounded-xl outline outline-1 outline-offset-[1rem]"
          frameBorder={0}
          src={project.video}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
