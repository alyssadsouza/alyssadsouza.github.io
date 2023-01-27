import Dropdown from "../navigation/Dropdown";
export default function ProjectSidebar({menuItem, setMenuItem, items}) {

  return (
      <section id="projects" className="flex flex-col items-stretch justify-start px-[10%] py-[5%] w-full text-neutral-800 md:h-[90%] md:overflow-y-auto">
        <h1 className="text-3xl font-display font-bold pt-8 pb-4 text-light-text">And this is what I can do.</h1>
        <p className="w-full pb-8 text-light-text">These are projects I've worked on in small teams over the span of a few days and submitted at hackathons.</p>
        <h3 className="uppercase text-primary-200 font-display tracking-[0.2rem]">Projects</h3>
        <Dropdown menuItem={menuItem} setMenuItem={setMenuItem} items={items} />
      </section>
  );
}
