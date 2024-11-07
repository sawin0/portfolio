import { useRef } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import NavBar from './components/NavBar'
import Projects from './components/Projects';

const App = () => {
  const projectsRef = useRef(null);

  // Scroll function to pass to Hero
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <div className='overflow-x-hidden text-neutral-300 antialised unselection:bg-cyan-300 selection:bg-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto px-8'>
        <NavBar />
        <Hero onViewProjectsClick={scrollToProjects} />
        <About />
        <Experience />
        <Projects ref={projectsRef}/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
