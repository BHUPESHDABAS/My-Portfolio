import React from 'react';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Education from './components/Education';

function App() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education/>
      <Certificates/>
      <Contact />
    </>
  );
}

export default App;
