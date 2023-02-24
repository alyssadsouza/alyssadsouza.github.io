import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ProjectSidebar from './components/Projects/ProjectSidebar';
import Nav from './components/Navigation/Nav';
import Projects from './pages/Projects';
import Footer from './components/Layout/Footer';
import { ReactComponent as HomeImage } from './assets/home-image.svg';
import AboutImage from './assets/about-image';
const projects = require('./content/projects.json')?.content ?? [];

function App() {

  const [menuItem, setMenuItem] = useState('Home');
  const [project, setProject] = useState({});

  return (
    <div className={`App selection:bg-primary-300 selection:text-light-text animate-slow-appear h-screen w-screen flex flex-col justify-between md:flex-row md:bg-opacity-0 bg-primary`}>

        <div className='md:hidden mx-[10%] my-[5%] flex flex-row justify-center'>
            <Nav
                menuItem={menuItem}
                setMenuItem={setMenuItem}
                items={["Home", "About", "Projects"]}
                classes={menuItem === "About" ? "md:text-white" : "md:text-dark-text"}
            />
        </div>

        <div id="sidebar" className={`bg-primary text-light-text transition-all duration-[1s]`}>
            {menuItem === 'Home' && (
              <div className='w-full md:w-[40vw] md:h-screen animate-delay-appear'>
                <Home setMenuItem={setMenuItem} />
              </div>
            )}
            {menuItem === 'About' && (
              <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-[40vw] md:min-w-[40vw] md:h-screen animate-delay-appear'>
                  <About />
                </div>
                <div className="flex w-full md:w-[60vw] animate-delay-appear p-8">
                  <AboutImage />
                </div>
              </div>
            )}
            {menuItem === 'Projects' && (
                <div className='w-full md:w-[25vw] md:h-screen animate-delay-appear'>
                  <ProjectSidebar menuItem={project} setMenuItem={setProject} items={projects} />
                </div>
            )}
        </div>

        <div className={`hidden w-full transition-all duration-[1s] md:block md:bottom-0 md:h-[10vh] md:fixed ${menuItem === 'Home' ? "md:w-[40vw]" : ""} ${menuItem === 'Projects' ? "md:w-[25vw]" : ""}`}>
          <Footer />
        </div>

        <div id="main-stage" className={`md:w-[60vw] p-[10%] md:p-0 transition-all duration-[1s] w-full h-auto flex flex-col items-end justify-between bg-neutral-50`}>

          <div className='hidden md:block mx-[3vw] my-[3vh]'>
            <Nav
                menuItem={menuItem}
                setMenuItem={setMenuItem}
                items={["Home", "About", "Projects"]}
                classes={menuItem === "About" ? "md:text-white" : "md:text-dark-text"}
            />
          </div>

          <div id="main-stage-image" className={`h-full w-full flex flex-col ${menuItem === "Projects" ? "overflow-y-auto justify-start" : "overflow-hidden justify-center"}`}>
            {menuItem === 'Home' && (
              <div className='animate-delay-appear'>
                <HomeImage />
              </div>
            )}
            {menuItem === 'Projects' && (
              <div className='animate-delay-appear'>
                <Projects content={projects} chosenProject={project} setChosenProject={setProject} />
              </div>
            )}
          </div>

          <div className='md:hidden w-full flex flex-row items-center'>
            <Footer menuItem={menuItem} />
          </div>

        </div>
    
    </div>
  );
}

export default App;
