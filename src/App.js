import SkillTabs from './components/SkillTabs';
import ProjectView from './components/ProjectView';
import github from './images/github.svg';
import linkedin from './images/linkedin.svg';
import devpost from './images/devpost.svg';
import './App.css';

const skillsContent = require('./content/skills.json')?.content ?? [];
const projects = require('./content/projects.json')?.content ?? [];

function App() {
  return (
    <div className="App selection:bg-secondary-light">
      <nav>
        <ul id="site-links" className="flex flex-row px-[5%] py-[2.5%] justify-end font-display">
            <li className="ml-8"><a href="/" className="text-lg hover:text-primary transition-all">Home</a></li>
            <li className="ml-8"><a href="#about" className="text-lg hover:text-primary transition-all">About</a></li>
            <li className="ml-8"><a href="#projects" className="text-lg hover:text-primary transition-all">Projects</a></li>
        </ul>
      </nav>

      <section id="home" className="flex items-center justify-between p-[5%] flex-wrap">
        <div id="home-text" className="flex flex-col max-w-screen-sm">
          <h1 className="text-3xl font-display">I'm Alyssa.</h1>
            <h1 className="text-2xl font-display my-4">I'm a software engineering undergrad student.</h1>
            <p className="">I'm a second-year at the University of Waterloo and as a co-op student I’m actively looking for web development internships. This portfolio showcases my skills and some of the projects I’ve worked on.</p>
            <div className="px-[1%] py-[1%] font-display bg-primary border-2 border-opacity-0 border-primary rounded-full w-fit my-8 self-center cursor-pointer hover:bg-opacity-0 hover:border-opacity-100 hover:text-primary transition-all">
              <a href="#projects">See my Projects</a>
            </div>
        </div>
        <div id="home-img" className="max-w-screen-sm">
        </div>
      </section>

      <section id="about" className="flex items-center justify-between p-[5%] flex-wrap">
        <h1 className="text-3xl font-display py-8">This is what I've worked with.</h1>
        <SkillTabs content={skillsContent} />
      </section>

      <section id="projects" className="flex items-center justify-between p-[5%] flex-wrap bg-neutral-800 text-white">
      <h1 className="text-3xl font-display py-8">And this is what I can do.</h1>
        <ProjectView content={projects} />
      </section>

      <footer className="p-16 flex flex-row justify-center">
        <div className="p-1 m-4 rounded-full border-black border transition-all w-8 h-8">
          <img src={github} alt="Icon" className="w-full h-full"/>
        </div>
        <div className="p-1.5 m-4 rounded-full border-black border transition-all w-8 h-8">
          <img src={linkedin} alt="Icon" className="w-full h-full"/>
        </div>
        <div className="p-1 m-4 rounded-full border-black border transition-all w-8 h-8">
          <img src={devpost} alt="Icon" className="w-full h-full"/>
        </div>
      </footer>
    </div>
  );
}

export default App;
