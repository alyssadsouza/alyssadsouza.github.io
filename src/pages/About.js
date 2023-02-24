import SkillTabs from "../components/Skills/SkillTabs";
import AboutImage from "../assets/about-image";

function About() {
  return (
    <div className="bg-primary text-light-text transition-all animate-slow-appear duration-[1s]">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[40vw] md:min-w-[40vw] md:h-screen animate-delay-appear">
          <section className="flex flex-col justify-start md:h-[90%] md:overflow-y-auto w-full px-[10%] py-[5%]">
            <h1 className="text-3xl font-display py-8 font-bold">
              This is my skillset.
            </h1>
            <SkillTabs />
          </section>
        </div>
        <div className="flex w-full md:w-[60vw] animate-delay-appear p-8">
          <AboutImage />
        </div>
      </div>
    </div>
  );
}

export default About;
