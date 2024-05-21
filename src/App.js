import './App.css';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { animateScroll as scroll } from 'react-scroll';
import About from './About';
import Projects from './Projects';

export default function App() {
  const [ text ] = useTypewriter({
    words: ['Welcome everyone,', 'My name is Tzechi.'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 30,
  });

  const handleAboutClick = () => {
    const aboutDiv = document.getElementById('about');
    if (aboutDiv) {
      scroll.scrollTo(aboutDiv.offsetTop, {
        duration: 500,
        smooth: 'easeInOutQuad'
      });
    }
  };
  
  const handleProjectsClick = () => {
    const projectsDiv = document.getElementById('projects');
    if (projectsDiv) {
      scroll.scrollTo(projectsDiv.offsetTop, {
        duration: 500,
        smooth: 'easeInOutQuad'
      });
    }
  };

  return (
    <div className="App">
      <nav className='navbar'>
        <div className='navbar-left name-div'>
          Tzechi Chan
        </div>
        <div className='navbar-right'>
          <div className='nav-btn nav-about-btn' onClick={handleAboutClick}>About</div>
          <div className='nav-btn nav-projects-btn' onClick={handleProjectsClick}>Projects</div>
        </div>
      </nav>
      <div className='intro-div'>
        <span className='intro-words'>
          { text }<span><Cursor cursorStyle ='|'/></span>
        </span> 
        <div className='contact-me-div'>
          <div className='linkedin-icon'>in</div>
          <div className='github-icon'>GitHub</div>
          <div>|</div>
          <div className='contact-me-icon'>Contact me</div>
        </div>
      </div>
      <div id='about' className='about-section-div'>
        <About />
      </div>
      <div id='projects' className='project-section-div'>
        <Projects />
      </div>
    </div>
  );
}


