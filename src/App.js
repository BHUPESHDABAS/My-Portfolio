import React from 'react';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

function App() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <Skills />
      <Certificates/>
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
