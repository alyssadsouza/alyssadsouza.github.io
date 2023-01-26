import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Project from './components/projects/Project';
import { ReactComponent as HomeImage } from './images/home-image.svg';

function App() {

  const [menuItem, setMenuItem] = useState('Home');
  const [project, setProject] = useState({});

  return (
    <div className={`App selection:bg-primary-300 selection:text-light-text animate-slow-appear h-screen w-screen flex flex-col justify-between lg:flex-row lg:bg-opacity-0 bg-primary`}>

        <div className='lg:hidden mx-[10%] my-[5%] flex flex-row justify-center'>
            <Nav
                menuItem={menuItem}
                setMenuItem={setMenuItem}
                items={["Home", "About", "Projects"]}
                classes="bg-secondary w-fit"
                buttonClasses="hover:bg-primary-150"
            />
        </div>

        <div id="sidebar" className={`bg-primary text-light-text transition-all duration-[1s] w-full ${menuItem === 'Home' ? "lg:w-[40vw]" : ""} ${menuItem === 'Projects' ? "lg:w-[25vw]" : ""}`}>
            {menuItem === 'Home' && (
              <div className='w-full lg:w-[40vw] lg:h-screen animate-delay-appear'>
                <Home setMenuItem={setMenuItem} />
              </div>
            )}
            {menuItem === 'About' && (
              <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-[40vw] lg:min-w-[40vw] lg:h-screen animate-delay-appear'>
                  <About setMenuItem={setMenuItem} />
                </div>
                <div className={`w-full lg:w-[60vw] animate-delay-appear`}>
                  <HomeImage />
                </div>
              </div>
            )}
            {menuItem === 'Projects' && (
                <div className='w-full lg:w-[25vw] lg:h-screen animate-delay-appear'>
                  <Projects chosenProject={project} setChosenProject={setProject} />
                </div>
            )}
        </div>

        <div className={`hidden w-full transition-all duration-[1s] lg:block lg:bottom-0 lg:h-[10vh] lg:fixed ${menuItem === 'Home' ? "lg:w-[40vw]" : ""} ${menuItem === 'Projects' ? "lg:w-[25vw]" : ""}`}>
          <Footer />
        </div>

        <div id="main-stage" className={`lg:w-[60vw] p-[10%] lg:p-0 transition-all duration-[1s] w-full h-auto flex flex-col items-end justify-between bg-neutral-50 ${menuItem === 'About' ? "lg:w-0" : ""} ${menuItem === 'Projects' ? "lg:w-[75vw]" : ""}`}>

          <div className='hidden lg:block mx-[3vw] my-[3vh]'>
            <Nav
                menuItem={menuItem}
                setMenuItem={setMenuItem}
                items={["Home", "About", "Projects"]}
            />
          </div>

          <div id="main-stage-image" className={`h-full w-full flex flex-col justify-center ${menuItem === "Projects" ? "overflow-scroll" : "overflow-hidden"}`}>
            {menuItem === 'Home' && (
              <div className='animate-delay-appear'>
                <HomeImage />
              </div>
            )}
            {menuItem === 'Projects' && (
              <div className='animate-delay-appear'>
                <Project project={project} />
              </div>
            )}
          </div>

          <div className='lg:hidden w-full flex flex-row items-center'>
            <Footer menuItem={menuItem} />
          </div>

        </div>
    
    </div>
  );
}

export default App;
