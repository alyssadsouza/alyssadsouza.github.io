import SkillTabs from '../components/skills/SkillTabs';
import NavArrow from '../components/NavArrow';

const skillsContent = require('../content/skills.json')?.content ?? [];

function About({setMenuItem}) {

  return (
      <section id="about" className="flex flex-col justify-center  lg:h-[90%] lg:overflow-scroll w-full px-[10%] py-[5%]">
        <h1 className="text-3xl font-display py-8 font-bold">This is my skillset.</h1>
        <SkillTabs content={skillsContent} />
        <NavArrow next="Projects" setMenuItem={setMenuItem} classes="mt-[5%]" />
      </section>
  );
}

export default About;
