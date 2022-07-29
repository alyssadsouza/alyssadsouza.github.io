import ProjectView from '../components/projects/ProjectView';

const projects = require('../content/projects.json')?.content ?? [];

function Projects({chosenProject, setChosenProject}) {

  return (
      <section id="projects" className="flex flex-col items-stretch justify-start px-[10%] py-[5%] w-full h-full">
        <h1 className="text-3xl font-display font-bold pt-8 pb-4">And this is what I can do.</h1>
        <p className="w-full pb-8">These are projects I've worked on in small teams over the span of a few days and submitted at hackathons.</p>
        <ProjectView content={projects} chosenProject={chosenProject} setChosenProject={setChosenProject} />
      </section>
  );
}

export default Projects;
