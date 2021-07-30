import './app.css';
import React from 'react';

import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navigation from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
