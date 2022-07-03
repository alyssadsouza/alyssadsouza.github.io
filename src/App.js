import SkillTabs from './components/SkillTabs';
import HomeImg from './images/welcome-img.png';
import './App.css';

const content = require('./content/skills.json')?.content ?? [];

function App() {
  return (
    <div className="App selection:bg-pink-500">
      <nav>
        <ul id="site-links" className="flex flex-row px-20 py-10 justify-end font-display">
            <li className="ml-8"><a href="/" className="text-lg hover:text-blue-500 transition-all">Home</a></li>
            <li className="ml-8"><a href="#about" className="text-lg hover:text-blue-500 transition-all">About</a></li>
            <li className="ml-8"><a href="#projects" className="text-lg hover:text-blue-500 transition-all">Projects</a></li>
        </ul>
      </nav>

      <section id="home" className="flex items-center justify-between p-20 flex-wrap">
        <div id="home-text" className="flex flex-col max-w-screen-sm">
          <h1 className="text-3xl font-display">I'm Alyssa.</h1>
            <h1 className="text-2xl font-display my-4">I'm a software engineering undergrad student.</h1>
            <p className="">I'm a second-year at the University of Waterloo and as a co-op student I’m actively looking for web development internships. This portfolio showcases my skills and some of the projects I’ve worked on.</p>
            <div className="px-4 py-2 font-display text-white  bg-blue-500 border-2 border-opacity-0 border-blue-500 rounded-full w-fit my-8 self-center cursor-pointer hover:bg-opacity-0 hover:border-opacity-100 hover:text-blue-500 transition-all">
              <a href="#projects">See my Projects</a>
            </div>
        </div>
        <div id="home-img" className="max-w-screen-sm">
            <img src={HomeImg} alt="Girl sitting at computer." />
        </div>
      </section>

      <section id="about" className="flex items-center justify-between p-20 flex-wrap">
        <SkillTabs content={content} />
      </section>
    </div>
  );
}

export default App;
