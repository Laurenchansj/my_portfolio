import './App.css';
import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { animateScroll as scroll } from 'react-scroll';
import About from './About';
import Projects from './Projects';
import Wave from 'react-wavify';
import ContactMe from './ContactMe';


export default function App() {
  const myName = `
    < Tzechi_Chan />
  `;
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

  const handleContactClick = () => {
    const contactDiv = document.getElementById('contact');
    if (contactDiv) {
      scroll.scrollTo(contactDiv.offsetTop, {
        duration: 500,
        smooth: 'easeInOutQuad'
      });
    }
  };

  const [contact_me_hover, setContactMeHover] = useState(false);

  const handleGoToTopClick = () => {
    const topDiv = document.getElementById('top');
    if (topDiv) {
      scroll.scrollTo(topDiv.offsetTop, {
        duration: 500,
        smooth: 'easeInOutQuad'
      });
    }
  };



  return (
    <div className="App">
      <nav id='top' className='navbar'>
        <div className='navbar-left name-div'>
          { myName }
        </div>
        <div className='navbar-right'>
          <div className='nav-btn nav-about-btn' onClick={handleAboutClick} options={{height: 20}}>About</div>
          <div className='nav-btn nav-projects-btn' onClick={handleProjectsClick}>Projects</div>
        </div>
      </nav>
      <div className='intro-div'>
        <span className='intro-words'>
          { text }<span><Cursor cursorStyle ='|'/></span>
        </span> 
        <div className='contact-me-div'>
          <a className='linkedin-icon' href='https://www.linkedin.com/in/tzechi-chan/' target='_blank' rel='noreferrer'>in</a>
          <a className='github-icon' href='https://github.com/Laurenchansj' target='_blank' rel='noreferrer'>GitHub</a>
          <div>|</div>
          <div className='contact-me-icon' onMouseEnter={() => setContactMeHover(true)} onMouseLeave={() => setContactMeHover(false)} onClick={handleContactClick}>
            {contact_me_hover ? 'Send Email' : 'Contact Me'}
          </div>
        </div>
        
        <Wave fill='#008080' paused={false} options={{height: 60, amplitude:60, speed: 0.15, points: 4}}></Wave>
      </div>
      <div id='about' className='about-section-div'>
        <About />
        <div className='top-btn-div'>
          <div onClick={handleGoToTopClick} className='top-btn'>^</div>
        </div>
      </div>
      <div id='projects' className='project-section-div'>
        
        <Projects />
        <div className='top-btn-div'>
          <div onClick={handleGoToTopClick} className='top-btn'>^</div>
        </div>
      </div>
      <div id='contact'>
        <ContactMe />
        <div className='top-btn-div'>
          <div onClick={handleGoToTopClick} className='top-btn'>^</div>
        </div>
      </div>
      <footer className='footer-div'>
        <div className='footer-name'>Made by Tzechi (Lauren) Chan</div>
        <div className='footer-email'>laurenchansj@gmail.com</div>
      </footer>
    </div>
  );
}


