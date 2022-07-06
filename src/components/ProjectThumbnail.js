export default function ProjectThumbnail({ project, onHover }) {
  const icons = project.images.map((image) => (
    <div key={image} className="p-[0.5%] m-1 rounded-full border-black border transition-all w-8 h-8">
      <img src={require(`../images/${image}.svg`)} alt="Icon" className="w-full h-full"/>
    </div>
  ));

  return (
    <div className={`flex flex-col justify-between my-4 ${project.color} p-4 rounded-xl w-full min-h-[12rem]`} onMouseOver={onHover}>
      <div className="flex flex-row justify-end">
        {icons}
      </div>
      <h2 className="text-lg font-display">{project.title}</h2>
      <p className="text-xs">{project.content.DESCRIPTION}</p>
    </div>
  );
}
