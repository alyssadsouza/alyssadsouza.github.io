import SkillTabs from '../components/Skills/SkillTabs';

function About() {

  return (
      <section id="about" className="flex flex-col justify-start md:h-[90%] md:overflow-y-auto w-full px-[10%] py-[5%]">
        <h1 className="text-3xl font-display py-8 font-bold">This is my skillset.</h1>
        <SkillTabs />
      </section>
  );
}

export default About;
